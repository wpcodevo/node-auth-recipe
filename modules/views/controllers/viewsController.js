exports.getOverview = (req,res)=>{
  res.status(200).render('overview',{
    title: 'overview'
  })
}
exports.getLogin = (req,res)=>{
  res.status(200).render('login', {
    title: 'Log into your account'
  })
}
exports.getSignup = (req,res)=>{
  res.status(200).render('signup',{
    title: 'Create your account'
  })
}
exports.getRecipes = (req,res)=>{
  res.status(200).render('recipes',{
    title: 'Recipes'
  })
}
exports.getForgotPassword = (req,res)=>{
  res.status(200).render('forgotPassword',{
    title: 'Forgot Password'
  })
}
exports.getResetPassword = (req,res)=>{
  res.status(200).render('resetPassword', {
    title: 'Reset Password'
  })
}