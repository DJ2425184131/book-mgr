/*
 * @Author: your name
 * @Date: 2022-01-04 16:35:42
 * @LastEditTime: 2022-01-05 09:49:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \projects\book-mgr-be\src\helpers\utils\index.js
 */
// 1、声明一个函数来取时间戳 通过时间戳来取年份  
const getYearByTimeStamp=(ts)=>{
    const date=new Date(ts);

    return date.getFullYear();
};
// 读取当前日期
const getDateByTimeStamp=(ts)=>{
    const date=new Date(ts);
    return date.getDate();
}
// console.log(123);
// 导出时间戳的模块 
// module.exports=getYearByTimeStamp; 
// module.exports=getDateByTimeStamp;
// 模块导出-----暴露两个 需要用对象 
module.exports={
    getYearByTimeStamp,
    getDateByTimeStamp,
};