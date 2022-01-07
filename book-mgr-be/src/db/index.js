/*
 * @Author: your name
 * @Date: 2022-01-04 09:54:08
 * @LastEditTime: 2022-01-05 09:12:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \projects\book-mgr-be\src\db\index.js
 */
// 1\引入数据库
const mongoose=require('mongoose');
// 4、给哪个数据库 添加哪个集合 添加什么格式的文档
// 接收一个对象 用对象来描述文档
const UserSchema=new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

// 5\获取到UserModal模型
const UserModel=mongoose.model('User',UserSchema);


// 2\连接数据库
const connect=()=>{

mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

// 3、开始数据库后 调用回调函数 开启数据后路要做到事情
mongoose.connection.on('open',()=>{
    console.log('连接成功');

    // 6、创建UserModal文档
    const user=new UserModel({
        nickname:"小许",
        password:'123456',
        age:30,
    });

    user.age=100;

// 7\保存 同步到MongoDB

    user.save();
});
};

// 调用函数
connect();