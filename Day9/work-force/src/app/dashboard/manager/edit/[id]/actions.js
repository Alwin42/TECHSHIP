"use server";

import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateEmployee(id, formData) {
  let isSuccess = false;

  try {
    await dbConnect();

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

    await Employee.findByIdAndUpdate(id, employeeData);
    isSuccess = true;

  } catch (error) {
    console.error("Update Employee Error:", error);
    return { success: false, error: "Failed to update employee details." };
  }

  if (isSuccess) {
    revalidatePath("/dashboard/manager");
    redirect("/dashboard/manager");
  }
}