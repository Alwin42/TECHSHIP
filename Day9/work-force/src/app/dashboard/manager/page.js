import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "../employee/LogoutButton";
import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";

export default async function ManagerDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "manager") {
    redirect("/login");
  }

  // 1. Connect to DB and fetch all real employees[cite: 2]
  await dbConnect();
  
  // .lean() converts complex Mongoose documents into plain JavaScript objects[cite: 2]
  const rawEmployees = await Employee.find({}).sort({ createdAt: -1 }).lean(); 
  
  // Format ObjectIds and Dates into standard strings[cite: 2]
  const employees = rawEmployees.map(emp => ({
    ...emp,
    _id: emp._id.toString(),
    joiningDate: emp.joiningDate.toISOString().split('T')[0],
  }));

  // Calculate dynamic stats[cite: 2]
  const totalEmployees = employees.length;
  const onLeave = 0; 
  const activeNow = totalEmployees - onLeave;

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white pb-16 relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#03045E] rounded-full mix-blend-screen filter blur-[150px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-100 h-100 bg-[#0077B6] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-12 pt-8 tracking-wide uppercase">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link>
        <Link href="#" className="border-b-2 border-[#00B4D8] pb-1 text-[#00B4D8]">Dashboard</Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Profile</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Good Morning, <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CAF0F8] to-[#00B4D8]">{session.user.name}</span>
          </h1>
          <p className="text-gray-400 font-medium">Here is what is happening with your team today.</p>
        </header>

        {/* Dynamic Stat Pills (Glassmorphism) */}
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
          
          {/* Enhanced Add Button */}
          <Link href="/dashboard/manager/add" className="group bg-linear-to-r from-[#00B4D8] to-[#0077B6] rounded-2xl px-8 py-5 text-lg font-bold hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all cursor-pointer flex items-center gap-2">
            Add employee
            <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">+</span>
          </Link>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2 text-white">
            Employee Directory
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="text-sm font-bold flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-colors">
              Department <span className="text-[#00B4D8]">▼</span>
            </button>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search name or email..." 
                className="bg-white/5 border border-white/10 text-white font-medium rounded-full pl-10 pr-4 py-2 outline-none w-64 placeholder:text-gray-500 focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            </div>
          </div>
        </div>

        {/* Employee Cards Container */}
        <div className="relative">
          {employees.length === 0 ? (
            <div className="bg-white/5 border border-white/10 border-dashed rounded-[40px] text-center py-24 text-gray-400 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">👥</div>
              <p className="text-2xl font-bold mb-2 text-white">No employees found.</p>
              <p>Click "Add employee" to populate your directory.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map((emp) => (
                <div key={emp._id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl relative group hover:-translate-y-2 hover:bg-white/10 hover:border-[#00B4D8]/30 transition-all duration-300">
                  
                  {/* Delete Icon */}
                  <button className="absolute top-5 right-5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-full p-2 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>

                  {/* Avatar & Header */}
                  <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                    <div className="w-14 h-14 bg-linear-to-br from-[#00B4D8] to-[#03045E] rounded-full flex items-center justify-center text-white shadow-lg font-bold text-xl ring-2 ring-white/10">
                      {emp.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{emp.fullName}</h3>
                      <p className="text-[#90E0EF] text-sm font-medium">{emp.designation}</p>
                    </div>
                  </div>

                  {/* Data Mapping */}
                  <div className="space-y-2.5 text-sm text-gray-300">
                    <div className="flex justify-between"><span className="text-gray-500">ID</span> <span className="font-medium text-white">{emp.employeeId}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Email</span> <span className="font-medium text-white truncate max-w-37">{emp.email}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Phone</span> <span className="font-medium text-white">{emp.phone}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Dept</span> <span className="font-medium text-white bg-white/10 px-2 py-0.5 rounded text-xs">{emp.department}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Salary</span> <span className="font-medium text-white">₹{emp.salary.toLocaleString()}</span></div>
                  </div>

                  {/* Edit Button */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link href={`/dashboard/manager/edit/${emp._id}`} className="text-[#00B4D8] text-sm font-bold flex items-center justify-center gap-2 w-full py-2 rounded-xl hover:bg-[#00B4D8]/10 transition-colors">
                      Edit Profile <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}