/*
 * @Author: your name
 * @Date: 2022-01-15 13:57:42
 * @LastEditTime: 2022-01-15 15:16:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
 * @FilePath: \projects\book-mgr\book-mgr-fe\src\main.js
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from "ant-design-vue"

import 'ant-design-vue/dist/antd.css';

createApp(App)
        .use(store)
        .use(router)
        .use(Antd)
        .mount('#app');
