<template>
    <i :class='
			[
				`${prefix}-icon`,
				name? `${prefix}-icon-`+removeIconPrefix(name):""  ,
				size? `${prefix}-icon-` + size: "",
				{
				  [`${prefix}-icon--rotating`]: rotating
				}
			]'
           :style="{
                fontSize: mySize,
                color: color,
                fontWeight: bold?'bold': (weight? weight: null),
                marginRight: mr,
                marginLeft: ml
            }"
       @click="handleClick"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave"

    >
        <slot></slot>
    </i>
</template>


<script>

    import { getSizeStyle } from 'rl-ui-design/packages/utils/propUtils'
    import { isNumber } from 'lodash-es'
    import { prefix } from 'rl-ui-design/src/config'

    export default {
        name: 'RlIcon',

        props: {
            // 图标名称
            name: {
                type: String,
                default: '',
            },
            // 尺寸
            size: {
                type: [String, Number],
                default: 'm',
            },
            // 颜色
            color: {
                type: String,
                default: '',
            },

            rotating: {
                type: Boolean,
                default: false,
            },

            bold: {
                type: Boolean,
                default: false,
            },

            weight: {
                type: [String, Number],
                default: null,
            },

            mr: {
                type: [String, Number],
                default: null,
            },
            ml: {
                type: [String, Number],
                default: null,
            },

        },

        data () {
            return {prefix}
        },

        computed: {
            mySize () {
                return getSizeStyle(this.size, {
                    xs: 13,
                    s: 13,
                    m: 14,
                    l: 16,
                    xl: 20,
                    xxl: 24,
                    xxxl: 30,
                })
            },
        },

        methods: {
            removeIconPrefix: function (val) {
                let reg = new RegExp(`^${this.prefix}-icon-`, 'g')
                return val.replace(reg, '')
            },
            hasPx (val) {
                if (['px', '%', 'em'].includes(val)) {
                    return true
                }

                if (isNumber(val)) {
                    return true
                }
                return false
            },

            handleClick (event) {
                this.$emit('click', event)
            },
            handleMouseEnter (event) {
                this.$emit('mouseenter', event)
            },
            handleMouseLeave (event) {
                this.$emit('mouseleave', event)
            },

        },

        mounted () {

        },

    }
</script>

<style scoped>

</style>
