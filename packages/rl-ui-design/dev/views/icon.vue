<template>
    <div class="page-route">
        <div>
            <button @click="rotate">旋转</button>
        </div>
        <ul>
            <li v-for="(item, index) in glyphs">
                <div>
                    <rl-icon :name="item.font_class" size="32" :rotating="rotating"></rl-icon>
                </div>
                <div>name: <span style="color: red;">{{item.font_class}}</span></div>
                <div>中文名字: {{item.name}}</div>
<!--                {{JSON.stringify(item)}}-->
            </li>
        </ul>
        <rl-icon ></rl-icon>

    </div>

</template>

<script>
    import { glyphs } from '../../packages/theme/base/src/fonts/iconfont.json'

    export default {
        components: {
        },
        data () {
            return {
                glyphs,
                rotating: false
            }
        },
        methods: {
            rotate() {
                this.rotating = !this.rotating
            }
        }

    }
</script>

<style lang="less" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            padding: 0;
            margin: 0;
            display: block;
            list-style: none;
            width: 200px;
            padding: 8px;
            margin: 2px;
            text-align: center;
            border: 1px solid #111;
        }
    }

</style>
