"use server";

import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addEmployee(formData) {
  let isSuccess = false;

  try {
    await dbConnect();

    // Parse the data from the form
    const employeeData = {
      employeeId: formData.get("employeeId"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      department: formData.get("department"),
      designation: formData.get("designation"),
      salary: Number(formData.get("salary")),
      joiningDate: new Date(formData.get("joinDate")),
    };

    // Prevent duplicates
    const existingEmployee = await Employee.findOne({
      $or: [{ employeeId: employeeData.employeeId }, { email: employeeData.email }]
    });

    if (existingEmployee) {
      return { success: false, error: "An employee with this ID or Email already exists." };
    }

    // Save to MongoDB
    await Employee.create(employeeData);
    isSuccess = true;

  } catch (error) {
    console.error("Add Employee Error:", error);
    return { success: false, error: "Failed to add employee. Please check your inputs." };
  }

  // If successful, clear the cached dashboard data and redirect
  if (isSuccess) {
    revalidatePath("/dashboard/manager");
    redirect("/dashboard/manager");
  }
}