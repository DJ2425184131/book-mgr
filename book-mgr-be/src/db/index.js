// 1\引入数据库
require ('./Schemas/User');

const mongoose=require('mongoose');

// 2\连接数据库
const connect=()=>{
    return new Promise((resolve)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

        // 3、开始数据库后 调用回调函数 开启数据后路要做到事情
        mongoose.connection.on('open',()=>{
            console.log('连接数据库成功'); 

            resolve();
        });
    });
};

module.exports={
    connect,
}
