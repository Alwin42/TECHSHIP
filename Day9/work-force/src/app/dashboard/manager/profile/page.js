import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/app/dashboard/employee/LogoutButton";
import ToggleSwitch from "./ToggleSwitch";
import dbConnect from "@/lib/mongodb";
import Employee from "@/models/Employee";

export default async function ManagerProfile() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "manager") {
    redirect("/login");
  }

  // Attempt to fetch dynamic manager data based on login email
  await dbConnect();
  const profileData = await Employee.findOne({ email: session.user.email }).lean() || null;

  // Fallbacks if the manager isn't populated in the Employee DB yet
  const name = session.user.name || "Alwin Emmanuel";
  const initials = name.charAt(0).toUpperCase();
  const firstName = name.split(' ')[0];
  const managerId = profileData?.employeeId || "INFOSYSMY3421";
  const department = profileData?.department || "Human Resources";
  const salary = profileData?.salary ? `₹${profileData.salary.toLocaleString()}` : "5 LPA";
  
  // Calculate tenure dynamically
  const joinYear = profileData?.joiningDate ? new Date(profileData.joiningDate).getFullYear() : 2021;
  const currentYear = new Date().getFullYear();
  const tenure = `${currentYear - joinYear} Years`;

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white p-8 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#03045E] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-12 pt-8 tracking-wide uppercase">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">HOME</Link>
        <Link href="/dashboard/manager" className="text-gray-400 hover:text-white transition-colors">DASHBOARD</Link>
        <Link href="#" className="border-b-2 border-[#00B4D8] pb-1 text-[#00B4D8]">PROFILE</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-7 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,180,216,0.1)] relative group overflow-hidden">
          
          {/* Subtle hover gradient effect */}
          <div className="absolute inset-0 bg-linear-to-br from-[#00B4D8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8 relative z-10">
            <div className="w-24 h-24 bg-linear-to-br from-[#00B4D8] to-[#03045E] rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-white/10">
              <span className="text-4xl font-bold">{initials}</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="text-[#00B4D8] text-sm font-bold uppercase tracking-wider">Manager Profile</p>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B4D8]"></span>
                </span>
              </div>
              <h1 className="text-4xl font-bold">Hello, {firstName}</h1>
            </div>
          </div>

          <div className="space-y-4 text-lg font-medium mb-10 text-white/90 relative z-10">
            {[
              { label: "Full Name", value: name, icon: "👤" },
              { label: "Manager ID", value: managerId, icon: "🏷️" },
              { label: "Department", value: department, icon: "🏢" },
              { label: "Salary Package", value: salary, icon: "💳" },
              { label: "Tenure", value: tenure, icon: "⏳" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white/5 px-5 py-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-blue-100/70 flex items-center gap-3">
                  <span className="opacity-70">{item.icon}</span> {item.label}
                </span> 
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <ToggleSwitch />
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10 relative z-10">
            <button className="flex-1 bg-linear-to-r from-[#00B4D8] to-[#0077B6] text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:-translate-y-1 transition-all duration-300">
              Edit Profile
            </button>
            <button className="flex-1 bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-xl font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              Request Leave
            </button>
          </div>

        </div>

        {/* Right Column: Auxiliary Cards */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl flex-1 group hover:border-[#00B4D8]/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B4D8]/10 rounded-bl-full pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              Help Center <span className="text-[#00B4D8]">↗</span>
            </h2>
            
            <div className="space-y-2 mb-8">
              <Link href="#" className="flex items-center justify-between text-lg text-gray-300 hover:text-white bg-white/5 px-4 py-3 rounded-xl transition-all hover:bg-white/10 group/link">
                File a Complaint <span className="text-[#00B4D8] group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="#" className="flex items-center justify-between text-lg text-gray-300 hover:text-white bg-white/5 px-4 py-3 rounded-xl transition-all hover:bg-white/10 group/link">
                Grievance & Suggestions <span className="text-[#00B4D8] group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="bg-[#03045E] border border-[#00B4D8]/30 text-[#CAF0F8] text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:bg-[#00B4D8]/20 transition-colors">Contact HR</span>
              <span className="bg-[#03045E] border border-[#00B4D8]/30 text-[#CAF0F8] text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:bg-[#00B4D8]/20 transition-colors">Submit a Ticket</span>
              <span className="bg-[#03045E] border border-[#00B4D8]/30 text-[#CAF0F8] text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:bg-[#00B4D8]/20 transition-colors">System Support</span>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#0077B6]/40 to-[#03045E]/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <div className="space-y-4 relative z-10">
              {[
                { title: "My Courses", icon: "📚" },
                { title: "Progress Tracker", icon: "📈" },
                { title: "Feedback & Ratings", icon: "⭐" },
                { title: "Upcoming Training Sessions", icon: "📅" }
              ].map((item, index) => (
                <Link key={index} href="#" className="flex items-center gap-4 text-sm font-medium text-gray-300 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/5">
                  <span className="text-xl bg-white/10 p-2 rounded-lg">{item.icon}</span>
                  <span className="flex-1">{item.title}</span>
                  <span className="text-white/30 group-hover:text-[#00B4D8] group-hover:translate-x-1 transition-all">→</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}