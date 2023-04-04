// 1、声明一个函数来取时间戳 通过时间戳来取年份  

const getYearByTimeStamp=(ts)=>{

    const date=new Date(ts);
  
    return date.getFullYear();
  
  }
  module.exports=getYearByTimeStamp;