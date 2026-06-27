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

           {<Image
             src="/work.png"
             alt="Work Force Productivity Illustration"
             fill
             className="object-contain"
             priority
           /> 
           }
        </div>

      </div>
    </main>
  );
}