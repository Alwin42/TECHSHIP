"use client";
import { useState } from "react";
import Link from "next/link";

export default function EmployeeDirectory({ employees }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  
  const departments = ["All", ...new Set(employees.map(emp => emp.department))];

  
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = 
      emp.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDept = selectedDept === "All" || emp.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg">
        <h2 className="text-xl font-bold flex items-center gap-2 text-white">
          Employee Directory
        </h2>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="appearance-none text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-[#00B4D8] transition-colors cursor-pointer text-white"
            >
              {departments.map(dept => (
                <option key={dept} value={dept} className="bg-black outline-none rounded-lg text-white">{dept}</option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00B4D8] pointer-events-none text-xs">▼</span>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name or ID..." 
              className="bg-white/5 border border-white/10 text-white font-medium rounded-full pl-10 pr-4 py-2.5 outline-none w-64 placeholder:text-gray-500 focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">🔍</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {filteredEmployees.length === 0 ? (
          <div className="bg-white/5 border border-white/10 border-dashed rounded-[40px] text-center py-24 text-gray-400 backdrop-blur-sm">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">👥</div>
            <p className="text-2xl font-bold mb-2 text-white">No employees found.</p>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((emp) => (
              <div key={emp._id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl relative group hover:-translate-y-2 hover:bg-white/10 hover:border-[#00B4D8]/30 transition-all duration-300">
                
                <button className="absolute top-5 right-5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-full p-2 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>

                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-[#00B4D8] to-[#03045E] rounded-full flex items-center justify-center text-white shadow-lg font-bold text-xl ring-2 ring-white/10">
                    {emp.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{emp.fullName}</h3>
                    <p className="text-[#90E0EF] text-sm font-medium">{emp.designation}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-sm text-gray-300">
                  <div className="flex justify-between"><span className="text-gray-500">ID</span> <span className="font-medium text-white">{emp.employeeId}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Email</span> <span className="font-medium text-white truncate max-w-37">{emp.email}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Phone</span> <span className="font-medium text-white">{emp.phone}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Dept</span> <span className="font-medium text-white bg-white/10 px-2 py-0.5 rounded text-xs">{emp.department}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Salary</span> <span className="font-medium text-white">₹{emp.salary?.toLocaleString()}</span></div>
                </div>

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
    </>
  );
}