const mongoose=require('mongoose')

const connect=()=>{
    // 给数据库的哪个集合 添加什么样式的文档

    // 定义Schema集合----映射MongoDB的集合 是集合文档的构成
    const UserSchema=new mongoose.Schema({
        nickname:String,
        password:String,
        age:Number
    });

    //定义Model模型---Schema生成的方法集合 用来操作MongoDB下的集合和集合下的文档
    const UserModel=mongoose.model('User',UserSchema);


    // 连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
    // 连接数据库之后输出连接成功  open---连接事件                                               
    mongoose.connection.on('open',()=>{
        console.log('连接成功');

        // 创建文档
        const user=new UserModel({
        nickname:'小明',
        password:123456,
        age:12,
    });

        // 保存 同步到MongoDB
        user.save();
    });
};

connect();