/*
 * @Author: your name
 * @Date: 2022-01-03 13:25:27
 * @LastEditTime: 2022-01-03 14:42:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \projects\book-mgr-be\app.js
 */
const koa1=require ('koa');
const koa2=require('./node_modules/koa/lib/application.js')

// 导入包 赋值给常量 等同于
// const koa=require('./node_modules/koa/lib/application.js');

console.log(koa1===koa2);