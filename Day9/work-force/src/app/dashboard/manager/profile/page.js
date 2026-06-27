import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/app/dashboard/employee/LogoutButton";
import ToggleSwitch from "./ToggleSwitch";

export default async function ManagerProfile() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "manager") {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white p-8 relative overflow-hidden">
      
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#03045E] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-12 pt-8 tracking-wide uppercase">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">HOME</Link>
        <Link href="/dashboard/manager" className="text-gray-400 hover:text-white transition-colors">DASHBOARD</Link>
        <Link href="#" className="border-b-2 border-white pb-1 text-white">PROFILE</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-7 bg-linear-to-br from-[#00B4D8]/90 to-[#0077B6]/90 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,180,216,0.15)]">
          
          <div className="flex items-center gap-6 mb-8 border-b border-white/20 pb-8">
            <div className="w-24 h-24 bg-[#E0C3FC] rounded-full flex items-center justify-center text-[#3B0764] shadow-inner ring-4 ring-white/20">
              <span className="text-4xl font-bold">{session.user.name?.charAt(0).toUpperCase() || 'A'}</span>
            </div>
            <div>
              <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-1">Manager Profile</p>
              <h1 className="text-4xl font-bold">Hello {session.user.name?.split(' ')[0] || 'Alwin'}</h1>
            </div>
          </div>

          <div className="space-y-4 text-lg font-medium mb-10 text-white/90">
            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"><span className="text-blue-100/70">Name</span> <span>{session.user.name || 'Alwin Emmanuel Sebastian'}</span></div>
            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"><span className="text-blue-100/70">Manager ID</span> <span>INFOSYSMY3421</span></div>
            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"><span className="text-blue-100/70">Department</span> <span>HR</span></div>
            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"><span className="text-blue-100/70">Salary</span> <span>5 LPA</span></div>
            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"><span className="text-blue-100/70">Tenure</span> <span>5 Years</span></div>
          </div>

          <ToggleSwitch />

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
            <button className="bg-[#03045E] text-white px-6 py-3 rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Edit profile
            </button>
            <button className="bg-[#03045E] text-white px-6 py-3 rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Request Leave
            </button>
            <button className="bg-red-500/20 text-red-100 border border-red-500/30 px-6 py-3 rounded-xl font-bold hover:-translate-y-1 hover:bg-red-500/30 transition-all duration-300">
              Logout
            </button>
          </div>

        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="bg-linear-to-br from-[#00B4D8]/80 to-[#0077B6]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex-1 group hover:border-white/30 transition-colors duration-500">
            <h2 className="text-2xl font-bold mb-6 text-white">Help Center</h2>
            
            <div className="space-y-4 mb-8">
              <Link href="#" className="flex items-center justify-between text-lg hover:text-[#03045E] transition-colors border-b border-white/10 pb-3">
                File a Complaint <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="#" className="flex items-center justify-between text-lg hover:text-[#03045E] transition-colors border-b border-white/10 pb-3">
                Grievance and suggestions <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-[#03045E] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors">Contact HR</span>
              <span className="bg-[#03045E] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors">Submit a Ticket</span>
              <span className="bg-[#03045E] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors">System Support</span>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#0077B6]/80 to-[#03045E]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex-1 flex flex-col justify-center">
            <div className="space-y-6">
              {[
                "My Courses",
                "Progress Tracker",
                "Feedback & Ratings",
                "Upcoming Training Sessions"
              ].map((item, index) => (
                <Link key={index} href="#" className="flex items-center justify-between text-sm font-medium hover:text-[#00B4D8] transition-colors group">
                  {item} <span className="text-white/30 group-hover:text-[#00B4D8] group-hover:translate-x-1 transition-all">→</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}