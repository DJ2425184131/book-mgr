// promise---解决回调函数 接口里套5个接口

// 一
// const request=(arg,cb)=>{
//     setTimeout(() => {
//         console.log(arg);
//         cb(arg+1);
//     }, 1000);
// };

// 回调地狱
// request(1,function(res1){
//     request(res1,function(res2){
//         request(res2,function(res3){
//             request(res3,function(res4){
//                 request(res4,function(res5){
//                     console.log('res5',res5);
//                 });
//             });
//         });
//     });
// });



// 二
// const request=(arg,isReject)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (isReject){
//                reject ('出错啦');
//                return; 
//             }
//             console.log(arg);
//             resolve(arg+1);
//         },3000);
//     });
// };

// request(1)
//     .then((res1)=>{
//         return request(res1,true);
//     })
//     .then((res2)=>{
//         console.log('6666')
//         return request(res2);
//     },e=>{
//         console.log(e);
//     })
//     .then((res3)=>{
//         return request(res3);
//     })
//     .then((res4)=>{
//         return request(res4);
//     })
//     .then((res5)=>{
//         return request(res5);
//     });





// async函数-----返回一个promise
// 一、
// const fn=async()=>{
//     return 1;
// }

// fn().then((res)=>{
//     console.log(res);
// })

// 二、
const request=(arg,isReject)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isReject){
               reject ('出错啦');
               return; 
            }
            console.log(arg);
            resolve(arg+1);
        },3000);
    });
};

const fn=async()=>{
    const res1=await request(1);
    const res2=await request((res1));
    const res3=await request((res2));
    const res4=await request((res3));
    const res5=await request((res4));

    console.log(res5);
};

fn();