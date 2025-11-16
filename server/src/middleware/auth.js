import jwt from 'jsonwebtoken';
const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const isValidToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!token || !isValidToken)
      return res.json({ success: false, message: 'you are not authorized' });

    return next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, err: error.message, stack: error.stack });

  }
};

export default isAuth;