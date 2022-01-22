<template>
    <div id="app">
        <div class="app-header">ReallyLife start Vue-Demo</div>
        <div class="app-body">
            <div class="app-body-nav">
                <ul>
                    <li @click="$router.push({path: item.path})" :class="{active: item.path === $route.path}" v-for="item in navList" :key="item.path">
                        {{ item.path }}
                    </li>
                </ul>
            </div>
            <div class="app-body-box">
                <!-- 一级路由给 key 会触发 mounted -->
                <router-view :key="$route.path"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import routes from './router'
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                navList: routes
            }
        },
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    html, body, #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .app-header {
        height: 60px;
        line-height: 60px;
        padding-left: 16px;
        background: #0284fe;
        color: #fff;
    }
    .app-body {
        height: calc(100% - 60px);
        display: flex;
    }

    .app-body-nav {
        width: 200px;
        height: 100%;
        overflow: auto;
        background: lightcoral;
        color: #fff;
    }
    .app-body-nav li {
        margin-bottom: 10px;
        cursor: pointer;
        transition: all .3s;
    }
    .app-body-nav li:hover, .app-body-nav li.active {
        background: rgba(0, 0, 0, 0.2);
    }
    .app-body-box {
        width: calc(100% - 200px);
        height: 100%;
        overflow: auto;
    }

    .admin-main-fade-transform-leave-active,
    .admin-main-fade-transform-enter-active {
        transition: all 1s;
    }
    .admin-main-fade-transform-enter {
        opacity: 0;
        transform: translateY(-30px);
    }
    .admin-main-fade-transform-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .page-route {
        padding: 8px;
    }
</style>
