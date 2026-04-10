const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



module.exports.userDetail = (req, res) => {
  // console.log(req.user)
  res.json(req.user);
};


module.exports.signup = async(req,res, next) => { 
    const {firstName, lastName, username, email, password} = req.body;
    const userExists = await User.findOne({email});

   if(userExists){
     return res.status(400).json({message:"User already exists"});
   }
   const hashedPassword = await bcrypt.hash(password,10);
   const user = await User.create({
     firstName,
     lastName,
     username,
     email,
     password:hashedPassword
   });
   // create token
   const token = jwt.sign(
     {id:user._id},
     process.env.JWT_SECRET,
     {expiresIn:"7d"}
   );

   // send cookie
   res.cookie("token",token,{
     httpOnly:true,
     secure:false,
     sameSite:"lax"
   });

   res.status(201).json({message:"Signup Successful", user});
}


module.exports.login = async(req, res, next) => {
  const {email,password} = req.body;
  const user =await User.findOne({email});

  if(!user){
     return res.status(400).json({message:"Invalid Email"});
  }
   // compare password
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("isMatch", isMatch);

  if(!isMatch){
     return res.status(400).json({message:"Wrong Password"});
   }
  // create token
  const token = jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
   );

  res.cookie("token",token,{
    httpOnly:true,
    secure:false,
    sameSite:"lax"
  });
  res.status(201).json({message:"Login Successful", user });
};


module.exports.logout = async(req, res, next) => {

  const token = req.cookies.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = decoded.id;
  
  if(!token){
    return res.json({message:"Already Logged Out" })
  }
  console.log("user logging out");

   res.clearCookie("token", {
     httpOnly: true,
     sameSite: "lax",
     secure: false
   });

  res.status(200).json({
    message: "Logout successful"
  })
};