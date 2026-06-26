"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// We will import the server action we are about to create
import { registerUser } from './actions'; 

export default function Register() {
  const [role, setRole] = useState('employee');
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    
    // Add the role to the form data manually
    formData.append("role", role);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    // Call the Server Action directly! No 'fetch' needed.
    const result = await registerUser(formData);

    if (result.success) {
      router.push("/login");
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#03045E] flex items-center justify-center p-6 font-sans">
      <div className="bg-[#0077B6] rounded-[40px] p-8 md:p-10 w-full max-w-md shadow-2xl text-white">
        
        <div className="flex gap-8 mb-8 font-bold tracking-wide text-sm">
          <button type="button" onClick={() => setRole('employee')} className={`pb-1 ${role === 'employee' ? 'border-b-2 border-white' : 'text-white/70 hover:text-white'}`}>EMPLOYEE</button>
          <button type="button" onClick={() => setRole('manager')} className={`pb-1 ${role === 'manager' ? 'border-b-2 border-white' : 'text-white/70 hover:text-white'}`}>MANAGER</button>
        </div>

        {error && <div className="bg-red-500/20 border border-red-500 text-white px-4 py-2 rounded-md mb-4 text-sm text-center">{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
             <label className="text-sm text-[#CAF0F8] ml-1">Enter the Full Name</label>
             <input name="fullName" type="text" className="w-full bg-white rounded-md px-4 py-2 text-gray-900 outline-none" required />
          </div>
          <div className="space-y-1">
             <label className="text-sm text-[#CAF0F8] ml-1">Enter the {role === 'employee' ? 'Email' : 'email'}</label>
             <input name="email" type="email" className="w-full bg-white rounded-md px-4 py-2 text-gray-900 outline-none" required />
          </div>
          <div className="space-y-1">
             <label className="text-sm text-[#CAF0F8] ml-1">Enter the password</label>
             <input name="password" type="password" className="w-full bg-white rounded-md px-4 py-2 text-gray-900 outline-none" required />
          </div>
          <div className="space-y-1">
             <label className="text-sm text-[#CAF0F8] ml-1">Confirm password</label>
             <input name="confirmPassword" type="password" className="w-full bg-white rounded-md px-4 py-2 text-gray-900 outline-none" required />
          </div>

          <div className="pt-4 flex justify-center">
            <button type="submit" disabled={loading} className="bg-[#03045E] text-white font-semibold rounded-2xl py-2.5 px-12 hover:bg-opacity-90 transition-all disabled:opacity-50">
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          <div className="text-center pt-4">
            <Link href="/login" className="text-sm text-[#CAF0F8] hover:text-white transition-colors">already have account?</Link>
          </div>
        </form>
      </div>
    </main>
  );
}