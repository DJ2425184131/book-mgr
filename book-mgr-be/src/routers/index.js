  const Router=require('@koa/router');
  const mongoose=require('mongoose'); 
  
  const User=mongoose.model('User');

  const router=new Router({
      prefix: '/auth',
});
 
  router.post('./register',async (ctx) => {

});

  router.post('./login',async (ctx) => {
      
});
const auth=require('./auth/index');
module.exports=(app)=>{
  app.use(auth.routes());
};

// module.exports=router;