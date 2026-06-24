export default function Services() {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- Header --- */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-6 tracking-tight flex items-center justify-center gap-3">
            <span>⚙️</span> Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Empowering your business with cutting-edge technology and tailored strategies.
          </p>
        </section>

        {/* --- Services Grid --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* IT Consulting */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              IT Consulting
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help organizations modernize their operations, streamline workflows, and adopt future‑proof technologies.
            </p>
          </div>

          {/* Cloud Solutions */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              Cloud Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From migration to management, we design cloud ecosystems that are secure, scalable, and cost‑effective.
            </p>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              Cybersecurity
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our proactive defense strategies safeguard your data, networks, and reputation against cyber threats.
            </p>
          </div>

          {/* Custom Software Development */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              Custom Software Development
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We build bespoke applications that align perfectly with your business goals.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}