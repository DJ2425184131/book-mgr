/*
 * @Author: your name
 * @Date: 2022-01-04 08:50:54
 * @LastEditTime: 2022-01-09 20:00:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \projects\book-mgr-be\src\index.js
 */
// 1、引入koa koa----类 每一个文件都是一个模块 
const Koa=require('koa');

// const context = require('koa/lib/context');

// 来引用helpers文件下的utils文件下的index -----导入模块
// const utils=require('./helpers/utils/index')

// 获取时间
// console.log(utils);



// 2、koa--类 通过new关键字去实例化类
const app=new Koa();
// 3、给实例化对象给一个use注册中间件的方法  中间件=回调函数 就是有http请求进来的时候 走中间件里面的回调函数 
// app.use((ctx)=>{  });   ctx---context当前请求的上下文 也就是当前所带的请求信息
// 4、app.listen()----监听端口 
// app.use((ctx)=>{
//     // console.log((ctx.URL));
//     const {path='/'}=ctx;  //等于const path=ctx.path

//     if(path==='/user/123'){
//         ctx.body='返回用户123的信息'
//     }

//     if(path==='/settings'){
//         ctx.body='返回设置的信息'
//     }

    
// });
 
// 中间件---对请求进行处理 中间件提供的参数context上下文-----当前请求的相关信息包含在内 

app.use(async (context,next)=>{


    // 拿到context对象下的request属性 重命名值req-----对象解构
    const {request:req}=context;
    const {url}=req;

    if(url==='/'){
        context  .response.body='<h1>主页</h1>';
        return ;
    }

    if(url==='/user/list'){
        context.response.body='<h1>用户列表</h1>';
        return ;
    }

    context.body='404';
    console.log(1);

    await next();
    console.log(3);
    context.status=404;

    console.log(1);
    await next();
    console.log(4);
});
 
app.use(async (context,next)=>{
    console.log(2);
    await next();
    console.log(5);
    // context.body="找不到资源"
})

app.use(async (context,next)=>{
    console.log(3);
    await next();
    console.log(6);
    // context.body="找不到资源"
})

app.use((ctx)=>{
    console.log(ctx.URL)
})
 
// 开启一个http服务 接收http请求进行处理并做出响应 
app.listen(3000,()=>{
    console.log('启动成功');
});
// console.log('123456'); 
