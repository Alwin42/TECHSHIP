export const metadata = { title: 'Departments' };

export default function Departments() {
  // Mock data for our departments
  const departments = [
    {
      id: 'dept-eng',
      name: 'Engineering',
      manager: 'Sarah Chen',
      employeeCount: 450,
      description: 'Responsible for product development, infrastructure, and technical innovation.',
      icon: '💻'
    },
    {
      id: 'dept-hr',
      name: 'Human Resources',
      manager: 'Michael Chang',
      employeeCount: 24,
      description: 'Handles recruitment, employee well-being, benefits, and company culture.',
      icon: '🤝'
    },
    {
      id: 'dept-sales',
      name: 'Sales',
      manager: 'David Rodriguez',
      employeeCount: 120,
      description: 'Drives revenue growth through client acquisition and account management.',
      icon: '📈'
    },
    {
      id: 'dept-mktg',
      name: 'Marketing',
      manager: 'Emily Johnson',
      employeeCount: 65,
      description: 'Manages brand presence, advertising campaigns, and market research.',
      icon: '🎯'
    },
    {
      id: 'dept-finance',
      name: 'Finance',
      manager: 'Robert Taylor',
      employeeCount: 30,
      description: 'Oversees company budgeting, financial planning, and accounting.',
      icon: '📊'
    },
    {
      id: 'dept-support',
      name: 'Customer Support',
      manager: 'Lisa Wong',
      employeeCount: 250,
      description: 'Provides 24/7 assistance and resolves client inquiries and issues.',
      icon: '🎧'
    }
  ];

  return (
    <div className="space-y-8">
      {/* --- Page Header --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-400">Departments</h1>
          <p className="text-gray-500 mt-1">Manage and view organizational departments.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors text-sm font-medium shadow-sm">
          + Add Department
        </button>
      </div>
      
      {/* --- Department Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div 
            key={dept.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full"
          >
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
                {dept.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  {dept.employeeCount} Employees
                </p>
              </div>
            </div>
            
            {/* Card Body */}
            <p className="text-gray-600 text-sm mb-6 grow">
              {dept.description}
            </p>
            
            {/* Card Footer */}
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">
                  Department Head
                </span>
                <span className="font-medium text-gray-900 text-sm">
                  {dept.manager}
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium group-hover:translate-x-1 transition-transform">
                View &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}