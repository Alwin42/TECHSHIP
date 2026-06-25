'use client'; // This directive tells Next.js to render this on the client side

import { useState } from 'react';

export default function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true);

  const handleToggle = () => {
    setEmailAlerts(!emailAlerts);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">User Preferences</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 font-bold mb-4">Notifications</h2>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">Email Alerts</p>
            <p className="text-sm text-gray-500">Receive daily digest emails.</p>
          </div>
          
          <button 
            onClick={handleToggle}
            className={`w-14 h-8 rounded-full transition-colors flex items-center px-1 ${emailAlerts ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full transition-transform ${emailAlerts ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>
    </div>
  );
}