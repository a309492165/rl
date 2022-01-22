// 遍历文件 注册路由
const views = require.context('../views', false, /\.vue$/);
let viewsArr = []
views.keys().forEach(name => {
    console.log(splitFileName(name));
    viewsArr.push({
        path: splitFileName(name),
        name: splitFileName(name),
        component: views(name).default,
    })

    function splitFileName(text) {
        text = text.slice(text.lastIndexOf('/'))

        var pattern = /\.{1}[a-z]{1,}$/;
        if (pattern.exec(text) !== null) {
            return (text.slice(0, pattern.exec(text).index));
        } else {
            return text;
        }
    }
});
console.log(viewsArr);

const routes = [
    ...viewsArr,
]



export default routes
