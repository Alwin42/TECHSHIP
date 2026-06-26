"use client";
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react'; // NextAuth hook for logging in[cite: 3]
import { useRouter } from 'next/navigation'; // For redirecting to dashboard[cite: 3]

export default function Login() {
  const [role, setRole] = useState('employee'); //[cite: 3]
  const [error, setError] = useState(""); // State for error messages[cite: 3]
  const [loading, setLoading] = useState(false); // State for button loading[cite: 3]
  const router = useRouter(); //[cite: 3]

  const handleSubmit = async (e) => { //[cite: 3]
    e.preventDefault(); //[cite: 3]
    setLoading(true); //[cite: 3]
    setError(""); //[cite: 3]

    // Grab the values from the form inputs[cite: 3]
    const email = e.target.email.value; //[cite: 3]
    const password = e.target.password.value; //[cite: 3]

    // Call NextAuth's signIn function[cite: 3]
    const res = await signIn("credentials", { //[cite: 3]
      email, //[cite: 3]
      password, //[cite: 3]
      redirect: false, // We handle the redirect manually so we can show errors[cite: 3]
    }); //[cite: 3]

    if (res?.error) { //[cite: 3]
      // If the backend threw an error (like "Invalid password"), display it[cite: 3]
      setError(res.error); //[cite: 3]
      setLoading(false); //[cite: 3]
    } else { //[cite: 3]
      // Success! Send the user to the dashboard[cite: 3]
      router.push("/dashboard"); //[cite: 3]
      router.refresh(); // Forces Next.js to update the session state globally[cite: 3]
    }
  };

  return (
    <main className="min-h-screen bg-[#03045E] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-[#90E0EF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Welcome Text */}
        <div className="hidden md:block text-white pl-4 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#CAF0F8] text-xs font-bold tracking-widest uppercase backdrop-blur-md">
            Authentication
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            WELCOME TO <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CAF0F8] to-[#00B4D8]">WORK FORCE</span>
          </h1>
          <p className="text-blue-200/60 text-lg max-w-md font-light pt-2">
            Sign in to access your dashboard, manage tasks, and connect with your team.
          </p>
        </div>

        {/* Right Side: Glassmorphism Login Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 w-full max-w-md mx-auto shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] text-white">
          
          <div className="flex gap-8 mb-8 font-bold tracking-wide text-sm border-b border-white/10 pb-4">
            <button
              type="button"
              onClick={() => setRole('employee')}
              className={`pb-4 -mb-4 transition-colors ${role === 'employee' ? 'border-b-2 border-[#00B4D8] text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              EMPLOYEE
            </button>
            <button
              type="button"
              onClick={() => setRole('manager')}
              className={`pb-4 -mb-4 transition-colors ${role === 'manager' ? 'border-b-2 border-[#00B4D8] text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              MANAGER
            </button>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl mb-6 text-sm text-center backdrop-blur-sm">
              {error}
            </div>
          )}

          {/* Replaced onSubmit with our new handleSubmit function[cite: 3] */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#CAF0F8] ml-1">Email Address</label>
              <input 
                name="email"
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#CAF0F8] ml-1">Password</label>
              <input 
                name="password"
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white/10 transition-all" 
                required 
              />
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm text-[#00B4D8] hover:text-[#90E0EF] transition-colors font-medium">
                Forgot password?
              </Link>
            </div>

            <div className="pt-2">
              {/* Disable button while loading[cite: 3] */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-linear-to-r from-[#00B4D8] to-[#0077B6] text-white font-bold rounded-xl py-3.5 hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all disabled:opacity-50 disabled:hover:shadow-none"
              >
                {loading ? "Authenticating..." : "Sign In"}
              </button>
            </div>

            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <Link href="/register" className="text-[#CAF0F8] hover:text-white font-bold transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </form>
          
        </div>
      </div>
    </main>
  );
}