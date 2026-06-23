import React, { useState, useEffect } from 'react';

function Dashboard() {
  
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('staffSyncData');
    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }
    return [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '', employeeId: '', dept: '', address: '', skill: '', year: ''
  });

  
  useEffect(() => {
    localStorage.setItem('staffSyncData', JSON.stringify(employees));
  }, [employees]);

  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.employeeId) return; 
    setEmployees([...employees, formData]);
    
    setFormData({ name: '', employeeId: '', dept: '', address: '', skill: '', year: '' });
  };

  const handleDeleteEmployee = (idToDelete) => {
    setEmployees(employees.filter((emp) => emp.employeeId !== idToDelete));
  };

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        
        <div className="flex flex-col gap-8">
          
          <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-bold text-black">
              Employee Count: <span className="font-mono bg-black text-white px-3 py-1 ml-2 rounded">{employees.length}</span>
            </h2>
          </div>

          <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold text-black mb-6 border-b-2 border-black pb-2">Add Employee</h2>
            <form onSubmit={handleAddEmployee} className="flex flex-col gap-4">
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold text-sm">Name :</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="col-span-2 border border-black p-2 outline-none focus:ring-2 focus:ring-black" required/>
              </div>
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold text-sm">Employee ID :</label>
                <input type="text" name="employeeId" value={formData.employeeId} onChange={handleInputChange} className="col-span-2 border border-black p-2 outline-none focus:ring-2 focus:ring-black" required/>
              </div>
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold text-sm">Dept :</label>
                <input type="text" name="dept" value={formData.dept} onChange={handleInputChange} className="col-span-2 border border-black p-2 outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold text-sm">Address :</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="col-span-2 border border-black p-2 outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold text-sm">Skill :</label>
                <input type="text" name="skill" value={formData.skill} onChange={handleInputChange} className="col-span-2 border border-black p-2 outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold text-sm">Joined Year :</label>
                <input type="text" name="year" value={formData.year} onChange={handleInputChange} className="col-span-2 border border-black p-2 outline-none focus:ring-2 focus:ring-black" />
              </div>
              <button type="submit" className="mt-6 bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition-colors border-2 border-black">
                Add
              </button>
            </form>
          </div>
        </div>

    
        <div className="flex flex-col gap-8">
          
          <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <input 
              type="text" 
              placeholder="Search employee..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-b-2 border-black p-2 text-lg outline-none focus:border-gray-500 placeholder-gray-400 font-bold" 
            />
          </div>

          <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1">
            <h2 className="text-xl font-bold text-black mb-6 border-b-2 border-black pb-2">Employee Details</h2>
            <div className="flex flex-col gap-4">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <div key={index} className="flex flex-col border border-gray-300 p-4 rounded bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xl">{emp.name}</span>
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded font-mono">{emp.employeeId}</span>
                    </div>
                    <div className="text-sm text-gray-700 grid grid-cols-2 gap-1 mb-4">
                      <p><strong>Dept:</strong> {emp.dept}</p>
                      <p><strong>Skill:</strong> {emp.skill}</p>
                      <p><strong>Joined:</strong> {emp.year}</p>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button className="bg-white text-black border-2 border-black px-4 py-1 font-bold hover:bg-gray-200 transition-colors">
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteEmployee(emp.employeeId)}
                        className="bg-black text-white border-2 border-black px-4 py-1 font-bold hover:bg-gray-800 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic text-center py-4">No employees found.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;