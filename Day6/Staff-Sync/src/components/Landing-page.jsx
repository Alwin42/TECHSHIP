import React from 'react';
// 1. Import Link from React Router
import { Link } from 'react-router-dom';

function LandingPage() {
  return(
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-gray-600 text-6xl mt-4 font-bold">Staff Sync</h1>
      <div className="grid grid-cols-2 mt-4">
        
        <div className="bg-amber-50 shadow-2xl mt-2 p-6 w-200 h-100 rounded-md">
          <h1 className="text-5xl text-gray-700">The Modern</h1>
          <h1 className="text-5xl text-gray-700">Employee Management </h1>
          <h1 className="text-5xl text-gray-700">System</h1>
          
          {/* 2. Wrap your button in a Link tag pointing to the dashboard */}
          <Link to="/dashboard">
            <button className="bg-black text-white font-bold mt-9 rounded-lg p-3 w-50 hover:bg-gray-800 transition-colors">
              Explore Dashboard
            </button>
          </Link>
        </div>

        <div className=" mt-2 p-6 w-200 h-100 items-center justify-center rounded-md">
          <img src="/image.png" className="w-100 h-auto" alt="image of employees"></img>
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage;