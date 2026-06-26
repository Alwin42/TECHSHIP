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

  // 1. Connect to DB and fetch all real employees
  await dbConnect();
  
  // .lean() converts complex Mongoose documents into plain JavaScript objects
  const rawEmployees = await Employee.find({}).sort({ createdAt: -1 }).lean(); 
  
  // Next.js requires plain objects to be passed to Client Components, 
  // so we format the ObjectIds and Dates into standard strings.
  const employees = rawEmployees.map(emp => ({
    ...emp,
    _id: emp._id.toString(),
    joiningDate: emp.joiningDate.toISOString().split('T')[0], // Formats to YYYY-MM-DD
  }));

  // Calculate dynamic stats
  const totalEmployees = employees.length;
  // (In a full app, you would calculate 'on leave' from a separate Leave database)
  const onLeave = 0; 
  const activeNow = totalEmployees - onLeave;

  return (
    <main className="min-h-screen bg-[#121212] font-sans text-white p-8">
      {/* Navbar */}
      <nav className="flex justify-center gap-8 text-lg font-bold mb-12">
        <Link href="#" className="hover:text-gray-300 transition-colors">HOME</Link>
        <Link href="#" className="border-b-2 border-white pb-1">DASHBOARD</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">PROFILE</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Good Morning, {session.user.name}</h1>

        {/* Dynamic Stat Pills */}
        <div className="flex flex-wrap gap-6 mb-12">
          <div className="bg-gradient-to-r from-[#03045E] to-[#00B4D8] rounded-xl px-6 py-4 flex items-center gap-4 text-lg font-bold w-48 shadow-lg">
            Employees <span className="ml-auto">{totalEmployees}</span>
          </div>
          <div className="bg-gradient-to-r from-[#03045E] to-[#00B4D8] rounded-xl px-6 py-4 flex items-center gap-4 text-lg font-bold w-48 shadow-lg">
            On leave <span className="ml-auto">{onLeave}</span>
          </div>
          <div className="bg-gradient-to-r from-[#03045E] to-[#00B4D8] rounded-xl px-6 py-4 flex items-center gap-4 text-lg font-bold w-48 shadow-lg">
            Active now <span className="ml-auto">{activeNow}</span>
          </div>
          
          {/* Enhanced Add Button */}
          <Link href="/dashboard/manager/add" className="bg-gradient-to-r from-[#03045E] to-[#0077B6] rounded-xl px-6 py-4 text-lg font-bold hover:shadow-[0_0_15px_rgba(0,180,216,0.5)] transition-all cursor-pointer">
            + Add employee
          </Link>
        </div>

        {/* Controls Section */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            View Employee List <span className="text-[#00B4D8]">↗</span>
          </h2>
          
          <div className="flex items-center gap-6">
            <div className="relative group cursor-pointer">
              <button className="text-xl font-bold flex items-center gap-2 group-hover:text-[#00B4D8] transition-colors">
                Department <span className="text-sm">▼</span>
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03045E] font-bold">≡</span>
              <input 
                type="text" 
                placeholder="search name or email..." 
                className="bg-[#CAF0F8] text-[#03045E] font-medium rounded-full pl-10 pr-10 py-2 outline-none w-64 placeholder:text-blue-900/50 focus:ring-2 focus:ring-[#00B4D8] transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#03045E]">🔍</span>
            </div>
          </div>
        </div>

        {/* Employee Cards Container */}
        <div className="bg-gradient-to-b from-[#03045E] to-[#121212] rounded-[40px] p-8 relative shadow-2xl border border-blue-900/30">
          
          {employees.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-2xl font-bold mb-2">No employees found.</p>
              <p>Click "Add employee" to populate your directory.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {employees.map((emp) => (
                <div key={emp._id} className="bg-gradient-to-b from-[#0077B6] to-[#03045E] rounded-3xl p-6 shadow-xl relative group hover:-translate-y-1 transition-transform duration-300">
                  
                  {/* Delete Icon */}
                  <button className="absolute top-6 right-6 text-white/50 hover:text-red-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>

                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#CAF0F8] rounded-full flex items-center justify-center text-[#03045E] shadow-inner font-bold text-xl">
                      {emp.fullName.charAt(0).toUpperCase()}
                    </div>
                  </div>

                  {/* Data Mapping */}
                  <div className="space-y-3 text-sm text-blue-50">
                    <p><span className="font-semibold text-[#90E0EF]">ID :</span> {emp.employeeId}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Name :</span> {emp.fullName}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Email :</span> {emp.email}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Phone :</span> {emp.phone}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Dept :</span> {emp.department}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Role :</span> {emp.designation}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Salary :</span> ₹{emp.salary.toLocaleString()}</p>
                    <p><span className="font-semibold text-[#90E0EF]">Joined :</span> {emp.joiningDate}</p>
                  </div>

                  {/* Edit Button */}
                  <div className="mt-6 text-center border-t border-blue-400/20 pt-4">
                    <Link href={`/dashboard/manager/edit/${emp._id}`} className="text-[#CAF0F8] text-lg font-medium flex items-center justify-center gap-2 mx-auto hover:text-white transition-colors">
                      Edit <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
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