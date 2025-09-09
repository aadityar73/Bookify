const getRegister = (req, res) => {
  res.render('pages/auth/register', { title: 'Join Now and Start Reading' });
};

const getLogin = (req, res) => {
  res.render('pages/auth/login', { title: 'Log into your account' });
};

export { getRegister, getLogin };
