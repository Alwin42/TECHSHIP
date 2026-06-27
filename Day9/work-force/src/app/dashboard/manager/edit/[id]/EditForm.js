"use client";
import { useState } from "react";
import { updateEmployee } from "./actions";

export default function EditForm({ employee }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const result = await updateEmployee(employee._id, formData);

    if (result && !result.success) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto relative z-10">
      
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Edit <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CAF0F8] to-[#00B4D8]">Employee</span>
        </h1>
        <p className="text-gray-400 text-sm">Update the details for {employee.fullName}.</p>
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
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

          <div className="space-y-6 md:mt-16 mt-8">
            {[
              { label: "Employee ID", name: "employeeId", type: "text", defaultValue: employee.employeeId },
              { label: "Full Name", name: "fullName", type: "text", defaultValue: employee.fullName },
              { label: "Email", name: "email", type: "email", defaultValue: employee.email },
              { label: "Phone", name: "phone", type: "tel", defaultValue: employee.phone },
              { label: "Department", name: "department", type: "text", defaultValue: employee.department },
              { label: "Designation", name: "designation", type: "text", defaultValue: employee.designation },
              { label: "Salary", name: "salary", type: "number", min: "0", defaultValue: employee.salary },
              { label: "Join Date", name: "joinDate", type: "date", defaultValue: employee.joiningDate },
            ].map((field) => (
              <div key={field.name} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <label className="text-sm font-medium w-32 shrink-0 text-gray-300">{field.label}</label>
                <input 
                  name={field.name}
                  type={field.type}
                  min={field.min}
                  defaultValue={field.defaultValue}
                  required
                  className="grow bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" 
                />
              </div>
            ))}
          </div>

        </form>
      </div>
    </div>
  );
}