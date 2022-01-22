/*
 * @Author: your name
 * @Date: 2022-01-05 13:18:26
 * @LastEditTime: 2022-01-07 09:42:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \projects\book-mgr-be\src\test\async-awiat.js
 */
// 1\回调函数 cb---callback回调
// const request=(arg,cb)=>{
//     setTimeout(() => {
//         console.log(arg);
//         cb(arg+1);
//     },1000);         
// };

// request(1,function(res1){
//     request(res1,function(res2){
//         request(res2,function(res3){ 
//             request(res3,function(res4){
//                 request(res4,function(res5){ 
//                     console.log('res5:',res5) ;
//                 });
//             });
//         });
//     });
// }); 
// 2\用promise解决回调地狱函数 返回promise对象实例 实例为new时传递参数 参数为函数 参数指的是promise在实例化立即执行的内容 
// const request=(arg,isReject)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (isReject){
//                 reject('出错啦');
//                 return;
//             }
//             console.log(arg);
//             resolve(arg+1);
//         },1000);
//     });
// };


// 3\request调用的时候立即执行 request返回的是promise实例
// request(1)
//     .then((res1)=>{ 
//         return request(res1,true);
//     })
//     .catch((msg)=>{
//         console.log(msg);
//     })
//     .then((res2)=>{
//         return request(res2);
//     })
//     .then((res3)=>{
//         return request(res3);
//     })
//     .then((res4)=>{
//         return request(res4);
//     })
//     .then((res5)=>{
//         console.log('res5:',res5);
//     })

// 4\async---返回的是promise函数

// const request=(arg,isReject)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (isReject){
//                 reject('出错啦');
//                 return;
//             }
//             console.log(arg);
//             resolve(arg+1);
//         },1000);
//     });
// };

// const fn=async()=>{
//     const res=await request(10);

//     console.log(res);
// };

// fn();

// 5\async 返回的是一个promise函数

const request=(arg,isReject)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isReject){
                reject('出错啦');
                return;
            }
            console.log(arg);
            resolve(arg+1);
        },1000);
    });
};

const fn=async()=>{
 const res1=await request(1);
 const res2=await request(res1);
 const res3=await request(res2);
 const res4=await request(res3);
 const res5=await request(res4);
 
 console.log(res5);
};


// const fn=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(1);
//     });
// };

fn()