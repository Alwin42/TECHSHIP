"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
    
    formData.append("role", role);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    const result = await registerUser(formData);

    if (result.success) {
      router.push("/login");
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#03045E] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#90E0EF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        
        <div className="text-center mb-8">
           <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#CAF0F8] to-[#00B4D8] tracking-tight mb-2">
             Create Account
           </h1>
           <p className="text-blue-200/60 font-light text-sm">Join Work Force to streamline your management.</p>
        </div>

        {/* Glassmorphism Form Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] text-white">
          
          <div className="flex gap-8 mb-8 font-bold tracking-wide text-sm border-b border-white/10 pb-4">
            <button type="button" onClick={() => setRole('employee')} className={`pb-4 -mb-4 transition-colors ${role === 'employee' ? 'border-b-2 border-[#00B4D8] text-white' : 'text-white/50 hover:text-white/80'}`}>EMPLOYEE</button>
            <button type="button" onClick={() => setRole('manager')} className={`pb-4 -mb-4 transition-colors ${role === 'manager' ? 'border-b-2 border-[#00B4D8] text-white' : 'text-white/50 hover:text-white/80'}`}>MANAGER</button>
          </div>

          {error && <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl mb-6 text-sm text-center backdrop-blur-sm">{error}</div>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
               <label className="text-sm font-medium text-[#CAF0F8] ml-1">Full Name</label>
               <input name="fullName" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" required />
            </div>
            
            <div className="space-y-2">
               <label className="text-sm font-medium text-[#CAF0F8] ml-1">Email Address</label>
               <input name="email" type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" required />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                 <label className="text-sm font-medium text-[#CAF0F8] ml-1">Password</label>
                 <input name="password" type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" required />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium text-[#CAF0F8] ml-1">Confirm</label>
                 <input name="confirmPassword" type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" required />
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={loading} className="w-full bg-linear-to-r from-[#00B4D8] to-[#0077B6] text-white font-bold rounded-xl py-3.5 hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all disabled:opacity-50 disabled:hover:shadow-none">
                {loading ? "Registering..." : "Create Account"}
              </button>
            </div>

            <div className="text-center pt-4 border-t border-white/10 mt-6">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-[#CAF0F8] hover:text-white font-bold transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </form>

        </div>
      </div>
    </main>
  );
}