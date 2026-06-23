import React , { useState } from 'react';

function AdvCounter()
{
    const [count , setCount ] = useState(0);
    const [ step , setStep] =  useState(1);
    const [history , setHistory] = useState([]);

    const recordHistory = (actionMessage) => {
        setHistory([actionMessage,...history]);
    };
    const handleIncrement = () => 
    {
        const newTotal = count + step;
        setCount(newTotal);
        recordHistory('incremented by '+ step)
    };

    const handleDecrement = () =>
    {
        const newTotal = count - step ;
        setCount(newTotal);
        recordHistory('decrement by ' + step)
    };

    const handleReset = () =>
    {
        setCount(0);
        setStep(1);
        recordHistory('Rest to 0');

    };

    const clearHistory = () =>
    {
        setHistory([]);
    };

    return (
        
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      
      
      <div className="text-center mb-8">
        <h2 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-2">Current Count</h2>
        <span className="text-6xl font-black text-gray-800">{count}</span>
      </div>

      
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
        <label className="font-bold text-gray-700">Custom Step:</label>
        <input 
          type="number" 
          
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="w-20 p-2 border border-gray-300 rounded text-center font-bold outline-none focus:border-blue-500"
        />
      </div>

      
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button 
          onClick={handleDecrement}
          className="bg-red-100 text-red-700 font-bold py-3 rounded-lg hover:bg-red-200 transition-colors"
        >
          - Decrement
        </button>
        <button 
          onClick={handleReset}
          className="bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
        <button 
          onClick={handleIncrement}
          className="bg-green-100 text-green-700 font-bold py-3 rounded-lg hover:bg-green-200 transition-colors"
        >
          + Increment
        </button>
      </div>

      
      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Action History</h3>
          <button onClick={clearHistory} className="text-sm text-blue-600 hover:underline">
            Clear Log
          </button>
        </div>
        
        
        <div className="h-48 overflow-y-auto bg-gray-50 rounded-lg border border-gray-200 p-2">
          {history.length === 0 ? (
            <p className="text-gray-400 text-center italic mt-4">No actions taken yet.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {history.map((log, index) => (
                <li key={index} className="bg-white p-2 rounded border border-gray-100 text-sm shadow-sm text-gray-700">
                  {log}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </div>
  );
}

export default AdvCounter;