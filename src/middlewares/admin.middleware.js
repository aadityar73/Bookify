const isAdmin = (req, res, next) => {
  try {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default isAdmin;
