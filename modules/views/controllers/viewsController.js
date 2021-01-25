export const getOverview = (req, res) => {
  res.status(200).render('overview', {
    title: 'overview',
  });
};

export const getLogin = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

export const getSignup = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create your account',
  });
};
export const getRecipes = (req, res) => {
  res.status(200).render('recipes', {
    title: 'Recipes',
  });
};
export const getForgotPassword = (req, res) => {
  res.status(200).render('forgotPassword', {
    title: 'Forgot Password',
  });
};
export const getResetPassword = (req, res) => {
  res.status(200).render('resetPassword', {
    title: 'Reset Password',
  });
};
