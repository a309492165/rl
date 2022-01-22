
import pkg from '../package.json'
import { components } from '../packages/components'

import '../packages/theme/base/src/index.less'

console.log(
    `%c rl-ui-design v${pkg.version}  %c npm: npm i rl-ui-design -S`,
    `padding: 5px 0; background: #0284FE; color: #fff; border-radius: 4px 0 0 4px;`,
    `padding: 5px 0; background: #fff; color: #0284FE; border-radius: 0 4px 4px 0;`)

export const install = function(Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
    });

    // Vue.prototype.$ELEMENT = {
    //     size: opts.size || '',
    //     zIndex: opts.zIndex || 2000
    // };

    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: pkg.version,
    install,
    ...components
}
