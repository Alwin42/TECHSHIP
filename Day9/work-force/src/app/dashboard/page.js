import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Redirect based on role
  if (session.user.role === "manager") {
    redirect("/dashboard/manager");
  } else {
    redirect("/dashboard/employee");
  }
}