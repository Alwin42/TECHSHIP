"use client";
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react'; // NextAuth hook for logging in
import { useRouter } from 'next/navigation'; // For redirecting to dashboard

export default function Login() {
  const [role, setRole] = useState('employee');
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State for button loading
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Grab the values from the form inputs
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Call NextAuth's signIn function
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // We handle the redirect manually so we can show errors
    });

    if (res?.error) {
      // If the backend threw an error (like "Invalid password"), display it
      setError(res.error);
      setLoading(false);
    } else {
      // Success! Send the user to the dashboard
      router.push("/dashboard");
      router.refresh(); // Forces Next.js to update the session state globally
    }
  };

  return (
    <main className="min-h-screen bg-[#03045E] flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Welcome Text */}
        <div className="hidden md:block text-white pl-4">
          <h1 className="text-4xl lg:text-5xl font-bold leading-relaxed tracking-wider">
            WELCOME TO <br /> WORK FORCE
          </h1>
        </div>

        {/* Right Side: Login Card */}
        <div className="bg-[#0077B6] rounded-[40px] p-8 md:p-10 w-full max-w-md mx-auto shadow-2xl text-white">
          
          <div className="flex gap-8 mb-8 font-bold tracking-wide text-sm">
            <button
              type="button"
              onClick={() => setRole('employee')}
              className={`pb-1 ${role === 'employee' ? 'border-b-2 border-white' : 'text-white/70 hover:text-white'}`}
            >
              EMPLOYEE
            </button>
            <button
              type="button"
              onClick={() => setRole('manager')}
              className={`pb-1 ${role === 'manager' ? 'border-b-2 border-white' : 'text-white/70 hover:text-white'}`}
            >
              MANAGER
            </button>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-white px-4 py-2 rounded-md mb-4 text-sm text-center">
              {error}
            </div>
          )}

          {/* Replaced onSubmit with our new handleSubmit function */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-sm text-[#CAF0F8] ml-1">Enter the e-mail</label>
              {/* Added name="email" */}
              <input 
                name="email"
                type="email" 
                className="w-full bg-white rounded-md px-4 py-2.5 text-gray-900 border-none outline-none focus:ring-2 focus:ring-[#90E0EF]" 
                required 
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-[#CAF0F8] ml-1">Enter the password</label>
              {/* Added name="password" */}
              <input 
                name="password"
                type="password" 
                className="w-full bg-white rounded-md px-4 py-2.5 text-gray-900 border-none outline-none focus:ring-2 focus:ring-[#90E0EF]" 
                required 
              />
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm text-[#CAF0F8] hover:text-white transition-colors">
                Forgot password?
              </Link>
            </div>

            <div className="pt-4 flex justify-center">
              {/* Disable button while loading */}
              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#03045E] text-white font-semibold rounded-2xl py-2.5 px-12 hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="text-center pt-6">
              <Link href="/register" className="text-sm text-[#CAF0F8] hover:text-white transition-colors">
                Don't have account
              </Link>
            </div>
          </form>
          
        </div>
      </div>
    </main>
  );
}