import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All field Required");

      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
      return;
    }

    const photoUrl =
      "https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()";

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {}
  res.status(500).json({ message: "Internal Server Errror" });
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
if (!email || !password) {
  const error = new Error("All filed Required")
  error.statusCode = 400;
  return next (error);
}

if (!email || !password) {
  const error = new Error("All filed Required")
  error.statusCode = 404;
  return next (error);
}

if(password !== existingUser.password) {
  const error = new Error("Incorrect Password");
  error.status =401;
  return next(error);
}

res.status(200).json({
  message:"Welcome Back",
  data: existingUser,
});