import jwt from "jsonwebtoken";
import 'dotenv/config';


const generateToken = async (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


export const adminLogin = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) return res.json({ success: false, message: 'please fill inputs' });

    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: 'Invalid Credentials' });
    }
    const token = await generateToken(email);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, err: error.message });

  }
};