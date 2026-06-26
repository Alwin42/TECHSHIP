import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "./LogoutButton"; // We will create this next

export default async function EmployeeDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "employee") {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 p-8">
      {/* Navbar */}
      <nav className="flex justify-center gap-8 text-lg font-bold mb-12">
        <Link href="#" className="hover:text-gray-600 transition-colors">HOME</Link>
        <Link href="#" className="border-b-2 border-black pb-1">DASHBOARD</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">PROFILE</Link>
        <LogoutButton />
      </nav>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-normal mb-2">Welcome {session.user.name || "Alwin"}</h1>
        <h2 className="text-2xl font-normal mb-8">Dashboard Overview</h2>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Top Row: Announcements & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Announcements */}
              <div className="bg-[#0077B6] rounded-3xl p-8 text-white shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Announcements</h3>
                <p className="font-semibold text-sm mb-1">Subject: Annual Company Retreat — Save the Date!</p>
                <p className="text-sm">Message:</p>
                <p className="text-sm mt-1 leading-relaxed">
                  We are excited to announce that the 2026 Annual Company Retreat will be held on August 12–14, 2026 at Green Valley Resort, Munnar.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-[#0077B6] rounded-3xl p-8 text-white shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-center">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="bg-[#00B4D8] bg-opacity-30 rounded-md px-4 py-2 text-sm font-medium">Attendance : &nbsp; 94%</div>
                  <div className="bg-[#00B4D8] bg-opacity-30 rounded-md px-4 py-2 text-sm font-medium">Leave Requests : <span className="text-yellow-400">pending</span></div>
                  <div className="bg-[#00B4D8] bg-opacity-30 rounded-md px-4 py-2 text-sm font-medium">Payroll Status : 50,000</div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Tasks */}
            <div className="bg-[#0077B6] rounded-3xl p-8 text-white shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Tasks</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="bg-[#90E0EF] bg-opacity-50 grow rounded-md px-4 py-2 text-sm text-gray-800">System Maintenance: Update servers, monitor performance, verify backups.</div>
                  <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#90E0EF] bg-opacity-50 grow rounded-md px-4 py-2 text-sm text-gray-800">Application Development: Write/test code, enhance features, document workflows.</div>
                  <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#90E0EF] bg-opacity-50 grow rounded-md px-4 py-2 text-sm text-gray-800">Network Security: Monitor firewalls, assess vulnerabilities, enforce policies.</div>
                  <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Notifications */}
          <div className="bg-[#0077B6] rounded-3xl p-8 text-white shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-6 text-center">Notifications</h3>
            <div className="space-y-4">
              <div className="bg-[#90E0EF] bg-opacity-70 rounded-xl p-4 text-gray-900 relative">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
                <p className="font-bold text-sm mb-1">Upcoming Performance Review</p>
                <p className="text-xs">Your quarterly performance review is scheduled for July 20, 2026</p>
              </div>
              <div className="bg-[#90E0EF] bg-opacity-70 rounded-xl p-4 text-gray-900 relative">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
                <p className="font-bold text-sm mb-1">New Policy Update</p>
                <p className="text-xs">A new remote work policy has been published. Please review it in the Announcements section.</p>
              </div>
              <div className="bg-[#90E0EF] bg-opacity-70 rounded-xl p-4 text-gray-900 relative">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
                <p className="font-bold text-sm mb-1">Leave Request Approved</p>
                <p className="text-xs">Your leave request from July 10–12 has been approved by HR.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}