"use client";
import { useState } from "react";
import Link from "next/link";
import { addEmployee } from "./actions"; 
import LogoutButton from "@/app/dashboard/employee/LogoutButton"; 

export default function AddEmployeePage() {
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setLoading(true); 
    setError(""); 

    const formData = new FormData(e.target); 
    const result = await addEmployee(formData); 

    if (result && !result.success) { 
      setError(result.error); 
      setLoading(false); 
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white p-8 relative overflow-hidden"> 
      
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#03045E] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      <nav className="relative z-10 flex justify-center gap-8 text-sm md:text-base font-bold mb-12 pt-8 tracking-wide uppercase"> 
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">HOME</Link> 
        <Link href="/dashboard/manager" className="text-gray-400 hover:text-white transition-colors">DASHBOARD</Link> 
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">PROFILE</Link> 
        <LogoutButton /> 
      </nav>

      <div className="max-w-3xl mx-auto relative z-10"> 
        
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Add New <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CAF0F8] to-[#00B4D8]">Employee</span>
          </h1>
          <p className="text-gray-400 text-sm">Enter the details below to provision a new team member.</p>
        </header>

        {error && ( 
          <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl mb-6 text-center font-medium backdrop-blur-sm"> 
            {error} 
          </div> 
        )}

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative">
          
          <form onSubmit={handleSubmit}> 
            
            <div className="md:absolute top-10 right-14 mb-8 md:mb-0 flex justify-end"> 
              <button 
                type="submit"  
                disabled={loading} 
                className="bg-linear-to-r from-[#00B4D8] to-[#0077B6] text-white px-8 py-3 rounded-xl text-lg font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all disabled:opacity-50" 
              >
                {loading ? "Processing..." : "Add Employee"}  
              </button>
            </div>

            <div className="space-y-6 md:mt-16 mt-8"> 
              
              {[
                { label: "Employee ID", name: "employeeId", type: "text", placeholder: "EMP001" },
                { label: "Full Name", name: "fullName", type: "text", placeholder: "Jane Doe" },
                { label: "Email", name: "email", type: "email", placeholder: "jane@company.com" },
                { label: "Phone", name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                { label: "Department", name: "department", type: "text", placeholder: "Engineering" },
                { label: "Designation", name: "designation", type: "text", placeholder: "Senior Developer" },
                { label: "Salary", name: "salary", type: "number", min: "0", placeholder: "75000" },
                { label: "Join Date", name: "joinDate", type: "date", placeholder: "" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"> 
                  <label className="text-sm font-medium w-32 shrink-0 text-gray-300">{field.label}</label> 
                  <input 
                    name={field.name} 
                    type={field.type} 
                    min={field.min} 
                    placeholder={field.placeholder}
                    required 
                    className="grow bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" 
                  />
                </div>
              ))}

            </div>
          </form>

        </div>
      </div>
    </main>
  );
}