"use client";
import { useState } from "react";

export default function ToggleSwitch() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex items-center gap-4 mb-8 text-xl font-bold">
      <span className="w-16 transition-all">{isActive ? "Active" : "Away"}</span>
      
      <button 
        type="button"
        onClick={() => setIsActive(!isActive)}
        className={`flex items-center rounded-full w-20 h-8 relative cursor-pointer transition-colors duration-300 outline-none ${
          isActive ? "bg-[#03045E]" : "bg-white/20"
        }`}
      >
        <span className={`absolute text-xs text-white left-2.5 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>ON</span>
        <span className={`absolute text-xs text-white right-2.5 transition-opacity duration-300 ${!isActive ? "opacity-100" : "opacity-0"}`}>OFF</span>
        
        <div 
          className={`w-6 h-6 rounded-full absolute top-1 transition-all duration-300 shadow-md ${
            isActive ? "bg-[#00B4D8] left-13" : "bg-gray-300 left-1"
          }`}
        ></div>
      </button>
    </div>
  );
}