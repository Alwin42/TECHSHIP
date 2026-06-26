import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12 lg:p-24 font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0077c0] tracking-tight">
            Work Force
          </h1>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-normal leading-snug">
              Empowering Teams, <br className="hidden md:block" />
              Simplifying Management
            </h2>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Work Force is your all-in-one employee management solution — designed to streamline HR processes, boost productivity, and create a connected workplace.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-4 text-xl font-medium text-black">
            <Link href="/login" className="flex items-center gap-1 hover:text-[#0077c0] transition-colors">
              Login <span className="text-2xl leading-none">↗</span>
            </Link>
            
            <Link href="/register" className="flex items-center gap-1 hover:text-[#0077c0] transition-colors">
              Register <span className="text-2xl leading-none">↗</span>
            </Link>

            <Link href="/about" className="hover:text-[#0077c0] transition-colors w-full sm:w-auto mt-2 sm:mt-0 block">
              About us
            </Link>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="relative w-full aspect-video lg:aspect-square flex justify-center items-center">
           {/* Placeholder for your illustration. 
             Save your exported image to the 'public' folder (e.g., public/hero.png) 
             and swap this div with the Image component below.
           */}
           <div className="w-full h-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-500 p-6 text-center">
             <svg className="w-12 h-12 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
             <p>Export your illustration and place it here</p>
           </div>

           {/* <Image
             src="/hero.png"
             alt="Work Force Productivity Illustration"
             fill
             className="object-contain"
             priority
           /> 
           */}
        </div>

      </div>
    </main>
  );
}