"use server"; 

import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function registerUser(formData) {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, error: "Email is already registered." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({
      fullName,
      email,
      password: hashedPassword,
      role: role || "employee",
    });

    return { success: true };
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, error: "An error occurred during registration." };
  }
}