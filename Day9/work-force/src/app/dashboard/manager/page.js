import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/app/dashboard/employee/LogoutButton";
import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";
import EmployeeDirectory from "./EmployeeDirectory"; 

export default async function ManagerDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "manager") {
    redirect("/login");
  }

  await dbConnect();
  
  const rawEmployees = await Employee.find({}).sort({ createdAt: -1 }).lean(); 
  
  const employees = rawEmployees.map(emp => ({
    ...emp,
    _id: emp._id.toString(),
    joiningDate: emp.joiningDate.toISOString().split('T')[0],
  }));

  const totalEmployees = employees.length;
  const onLeave = 0; 
  const activeNow = totalEmployees - onLeave;

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white pb-16 relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#03045E] rounded-full mix-blend-screen filter blur-[150px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-[#0077B6] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-12 pt-8 tracking-wide uppercase">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
        <Link href="#" className="border-b-2 border-[#00B4D8] pb-1 text-[#00B4D8]">Dashboard</Link>
        <Link href="/dashboard/manager/profile" className="text-gray-400 hover:text-white transition-colors">Profile</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Good Morning, <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CAF0F8] to-[#00B4D8]">{session.user.name}</span>
          </h1>
          <p className="text-gray-400 font-medium">Here is what is happening with your team today.</p>
        </header>

        <div className="flex flex-wrap gap-5 mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 text-lg font-bold w-48 shadow-xl">
            <span className="text-gray-300">Employees</span> 
            <span className="ml-auto text-[#00B4D8] text-2xl">{totalEmployees}</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 text-lg font-bold w-48 shadow-xl">
            <span className="text-gray-300">On leave</span> 
            <span className="ml-auto text-[#90E0EF] text-2xl">{onLeave}</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 text-lg font-bold w-48 shadow-xl">
            <span className="text-gray-300">Active now</span> 
            <span className="ml-auto text-[#CAF0F8] text-2xl">{activeNow}</span>
          </div>
          
          <Link href="/dashboard/manager/add" className="group bg-linear-to-r from-[#00B4D8] to-[#0077B6] rounded-2xl px-8 py-5 text-lg font-bold hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all cursor-pointer flex items-center gap-2">
            Add employee
            <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">+</span>
          </Link>
        </div>

        {/* Inject the Client Component here */}
        <EmployeeDirectory employees={employees} />

      </div>
    </main>
  );
}