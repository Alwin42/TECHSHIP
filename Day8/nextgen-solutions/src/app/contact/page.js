export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-4 tracking-tight flex items-center justify-center gap-3">
            <span>📞</span> Contact Us
          </h1>
          <p className="text-lg text-gray-300">
            We would love to hear from you. Reach out to us for any inquiries or to discuss your next big project.
          </p>
        </div>

        {/* --- Main Layout Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info & Locations */}
          <div className="space-y-8">
            
            {/* Direct Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <p className="flex items-center text-lg text-gray-700">
                  <span className="mr-4 text-xl">📧</span> 
                  <a href="mailto:info@nextgensolutions.com" className="hover:text-blue-600 transition-colors">
                    info@nextgensolutions.com
                  </a>
                </p>
                <p className="flex items-center text-lg text-gray-700">
                  <span className="mr-4 text-xl">📞</span> 
                  <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h2>
              <ul className="space-y-6">
                <li className="flex items-start text-lg text-gray-700">
                  <span className="mr-4 text-xl">📍</span> 
                  <div>
                    <strong className="block text-gray-900">Bangalore, India</strong>
                    <span className="text-sm text-gray-500">Asia-Pacific Headquarters</span>
                  </div>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <span className="mr-4 text-xl">📍</span> 
                  <div>
                    <strong className="block text-gray-900">San Francisco, USA</strong>
                    <span className="text-sm text-gray-500">North America Hub</span>
                  </div>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <span className="mr-4 text-xl">📍</span> 
                  <div>
                    <strong className="block text-gray-900">London, UK</strong>
                    <span className="text-sm text-gray-500">European Office</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h2>
            <form className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}