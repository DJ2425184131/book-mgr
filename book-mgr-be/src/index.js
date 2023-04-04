const Koa=require('koa');

const app=new Koa;

// app.use---中间件(函数）context--上下文 里面包含请求的信息
// app.use((context)=>{
//     // 对象的解构
//     const {request:req}=context;
//     const {url}=req;

//     if(url==='/user'){
//         context.response.body='abcde';
//         return;
//     }

//     context.body='??';
// });

// 开启http服务 接收Http请求 处理并响应
app.listen(3000,()=>{
    console.log('启动成功');
})

console.log('123456');