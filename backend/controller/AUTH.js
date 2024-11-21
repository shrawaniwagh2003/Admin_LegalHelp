const AdminSchema = require("../models/UserSchema.js");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const loginUser = async (req, res) =>{
    try {
        // take a value from user end
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("All input is required");
    return;
  }

  const userExist = await AdminSchema.findOne({ email: email });

  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    // generate jwt token
    const token = jwt.sign(
      {
        user_id: userExist._id,
        email,
      },
      process.env.TOKEN_KEY
    );
    
    // save user token
    userExist.token = token;

    // save user token in data base but there is no need to save it
    await userExist.save();

    return res.status(200).json({
      user: userExist,
      success: true,
      message: "login Successfull",
    });
  } else {
    return res.status(202).json({
      success: false,
      message: "Login failed",
    });
  }
    } catch (error) {
        return res
        .status(500)
        .json({ success: false, error: `Error in logging ${error}` });
    
    }
}

const generateToken = async (req,res) => {
  if (req.user.user_id === req.params.id) {

  try {
    const _id  = req.user.user_id;
    const user = await AdminSchema.findOne({ _id:_id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000;
    await user.save();
    // console.log(user)
    res.status(200).json({ success: true, token: resetToken });

  } catch (error) {
    res.status(500).json({ error: `Failed to Generate Token ${error}` });
  }
}
else{
  return res.status(401).json({
    success: false,
    error: `The token doesn't match.`
});
}
}
const resetPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const password = req.body.pass;
    const user = await AdminSchema.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;

    await user.save();
    res.json({ success: true ,msg:"Reset Successfully"});
  } catch (error) {
    res.status(500).json({ error: 'Failed to reset password' });
  }
}

;

module.exports = { loginUser, resetPassword, generateToken };
