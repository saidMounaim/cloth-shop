import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @Desc Auth user & get token
// @Route /api/users/login
// @Method POST
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @Desc Get user profile
// @Route /api/users/profile
// @Method GET
export const getUserPofile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @Desc Register user
// @Route /api/users/register
// @Method POST
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(401);
    throw new Error("User already exist");
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    },
  });
});

// @Desc Update profile
// @Route /api/users/profile
// @Method PUT
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const updateUserProfile = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password || user.password,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    user: {
      _id: updateUserProfile._id,
      name: updateUserProfile.name,
      email: updateUserProfile.email,
      isAdmin: updateUserProfile.isAdmin,
      token: generateToken(updateUserProfile._id),
    },
  });
});

// @Desc Get users
// @Route /api/users
// @Route GET
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(201).json({ success: true, users });
});

// @Desc Delete user
// @Route /api/users/:id
// @Method DELETE
export const deleteUser = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  await user.remove();
  res.status(201).json({ message: "User removed" });
});

// @Desc Get user by ID
// @Route /api/users/:id
// @Method GET
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  res.status(201).json({ success: true, user });
});

// @Desc Update user
// @Route /api/users/:id
// @Method PUT
export const updateUser = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.status(201).json({ success: true, user: updatedUser });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});
