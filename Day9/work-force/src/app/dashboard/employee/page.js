import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "./LogoutButton"; 
import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";

export default async function EmployeeDashboard() {
  const session = await getServerSession(authOptions);

  // Redirect if not authenticated or not an employee[cite: 1]
  if (!session || session.user.role !== "employee") {
    redirect("/login");
  }

  // Fetch the actual employee data from MongoDB
  await dbConnect();
  const employeeData = await Employee.findOne({ email: session.user.email }).lean();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-gray-900 pb-12 relative overflow-hidden">
      
      {/* Decorative Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] w-100 h-100 bg-[#00B4D8] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-100 h-100 bg-[#0077B6] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      {/* Navbar[cite: 1] */}
      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-10 pt-8 tracking-wide text-[#03045E]">
        <Link href="#" className="hover:text-[#00B4D8] transition-colors">HOME</Link>
        <Link href="#" className="border-b-2 border-[#0077B6] pb-1 text-[#0077B6]">DASHBOARD</Link>
        <Link href="#" className="hover:text-[#00B4D8] transition-colors">PROFILE</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header[cite: 1] */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#03045E] mb-2">
            Welcome back, <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0077B6] to-[#00B4D8]">{session.user.name || "Alwin"}</span>
          </h1>
          <h2 className="text-xl text-slate-500 font-medium">Dashboard Overview</h2>
        </header>

        {/* Dashboard Grid[cite: 1] */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column[cite: 1] */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Announcements[cite: 1] */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0077B6]">📢</div>
                  <h3 className="text-2xl font-bold text-[#03045E]">Announcements</h3>
                </div>
                <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                  <p className="font-bold text-[#0077B6] mb-2 text-sm uppercase tracking-wide">Annual Company Retreat</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We are excited to announce that the 2026 Annual Company Retreat will be held on August 12–14, 2026 at Green Valley Resort, Munnar. Save the date!
                  </p>
                </div>
              </div>

              {/* Dynamic Employee Profile Stats */}
              <div className="bg-linear-to-br from-[#0077B6] to-[#03045E] rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  My Profile <span>↗</span>
                </h3>
                
                {employeeData ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm border border-white/10">
                      <span className="text-[#CAF0F8] text-sm">Department</span>
                      <span className="font-semibold">{employeeData.department}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm border border-white/10">
                      <span className="text-[#CAF0F8] text-sm">Role</span>
                      <span className="font-semibold">{employeeData.designation}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm border border-white/10">
                      <span className="text-[#CAF0F8] text-sm">Base Salary</span>
                      <span className="font-semibold">₹{employeeData.salary?.toLocaleString()}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 text-blue-200 text-sm">
                    Profile data syncing...
                  </div>
                )}
              </div>
            </div>

            {/* Tasks[cite: 1] */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-bold text-[#03045E] mb-6">Assigned Tasks</h3>
              <div className="space-y-4">
                {[
                  "System Maintenance: Update servers, monitor performance, verify backups.",
                  "Application Development: Write/test code, enhance features, document workflows.",
                  "Network Security: Monitor firewalls, assess vulnerabilities, enforce policies."
                ].map((task, index) => (
                  <div key={index} className="group flex items-center gap-4 bg-slate-50 hover:bg-blue-50 transition-colors rounded-2xl px-6 py-4 border border-slate-100 cursor-pointer">
                    <div className="w-6 h-6 rounded-full border-2 border-[#00B4D8] flex items-center justify-center shrink-0 group-hover:bg-[#00B4D8] transition-colors">
                      <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div className="text-sm text-slate-700 font-medium">{task}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Notifications[cite: 1] */}
          <div className="bg-linear-to-b from-[#00B4D8] to-[#0077B6] rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20 h-full">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Notifications</h3>
              <span className="bg-white text-[#0077B6] text-xs font-bold px-2 py-1 rounded-full">3 New</span>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Upcoming Performance Review", desc: "Your quarterly performance review is scheduled for July 20, 2026." },
                { title: "New Policy Update", desc: "A new remote work policy has been published. Please review it." },
                { title: "Leave Request Approved", desc: "Your leave request from July 10–12 has been approved by HR." }
              ].map((notif, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 relative hover:bg-white/20 transition-colors">
                  <button className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">✕</button>
                  <p className="font-bold text-sm mb-1 text-white">{notif.title}</p>
                  <p className="text-xs text-blue-50 leading-relaxed pr-6">{notif.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}