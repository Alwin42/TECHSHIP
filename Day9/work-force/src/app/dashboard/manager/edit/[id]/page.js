import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/app/dashboard/employee/LogoutButton";
import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";
import EditForm from "./EditForm";

export default async function EditEmployeePage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "manager") {
    redirect("/login");
  }

  const { id } = await params;

  await dbConnect();
  const rawEmployee = await Employee.findById(id).lean();

  if (!rawEmployee) {
    redirect("/dashboard/manager");
  }

  const employee = {
    ...rawEmployee,
    _id: rawEmployee._id.toString(),
    joiningDate: rawEmployee.joiningDate.toISOString().split('T')[0],
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white p-8 relative overflow-hidden">
      
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#03045E] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-12 pt-8 tracking-wide uppercase">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">HOME</Link>
        <Link href="/dashboard/manager" className="text-gray-400 hover:text-white transition-colors">DASHBOARD</Link>
        <Link href="/dashboard/manager/profile" className="text-gray-400 hover:text-white transition-colors">PROFILE</Link>
        <LogoutButton />
      </nav>

      <EditForm employee={employee} />
      
    </main>
  );
}