export default function About() {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto space-y-20">
        
        
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            <span className="font-semibold text-blue-600">Our Story: </span> 
            Founded with a vision to bridge innovation and practicality, NextGen Solutions has grown into a trusted partner for enterprises worldwide.
          </p>
        </section>

        {/* --- Mission & Vision Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4">
              {/* Optional: You can replace this SVG with a real icon library later */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To deliver transformative technology solutions that drive growth, efficiency, and resilience.
            </p>
          </div>

          <div className="bg-gray-200 p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              A world where businesses harness technology to unlock limitless potential.
            </p>
          </div>
        </section>

        {/* --- Leadership Team --- */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-300 mb-12">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CEO Card */}
            <div className="bg-gray-200 p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                AM
              </div>
              <h3 className="text-xl font-bold text-gray-900">Arjun Mehta</h3>
              <p className="text-blue-600 font-medium mb-4">CEO</p>
              <p className="text-gray-600">Visionary strategist with 20+ years in IT.</p>
            </div>

            {/* CTO Card */}
            <div className="bg-gray-200 p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                SC
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sophia Chen</h3>
              <p className="text-blue-600 font-medium mb-4">CTO</p>
              <p className="text-gray-600">Expert in cloud architecture and AI.</p>
            </div>

            {/* COO Card */}
            <div className="bg-gray-200 p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                DR
              </div>
              <h3 className="text-xl font-bold text-gray-900">David Ramirez</h3>
              <p className="text-blue-600 font-medium mb-4">COO</p>
              <p className="text-gray-600">Operations leader focused on scalability and client success.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}