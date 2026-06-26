import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 lg:p-24 font-sans flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full">
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">
          About Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column*/}
          <div className="bg-linear-to-b from-[#00B4D8] to-[#0077B6] rounded-3xl p-8 md:p-10 text-white shadow-lg space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-bold">Our Story:</span> Work Force was created to solve the challenges of modern HR management. From small businesses to large enterprises, we help organizations manage people with efficiency and care.
            </p>
            
            <p>
              <span className="font-bold">Mission:</span> To simplify employee management through technology, empowering businesses to focus on growth and innovation.
            </p>
            
            <p>
              <span className="font-bold">Vision:</span> A workplace where every employee feels valued, supported, and connected.
            </p>
            
            <div>
              <p className="font-bold mb-2">Core Values:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Innovation — Constantly evolving to meet modern needs.</li>
                <li>Transparency — Clear processes and open communication.</li>
                <li>Efficiency — Saving time and reducing complexity.</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full aspect-square flex justify-center items-center">
             {/* 
               Save your exported image to the 'public' folder (e.g., public/about-illustration.png) 
               and swap this div with the Image component below.
             */}
             <div className="w-full h-3/4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-500 p-6 text-center">
               <svg className="w-12 h-12 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               <p>Export your illustration and place it here</p>
             </div>

             {/* <Image
               src="/about-illustration.png"
               alt="About Us Illustration"
               fill
               className="object-contain"
             /> */}
          </div>

        </div>
      </div>
    </main>
  );
}