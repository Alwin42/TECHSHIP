export const metadata = { title: 'Analytics Reports' };

export default function Reports() {
  
  const kpis = [
    { id: 1, title: 'Total Revenue (Q3)', value: '$845,230', trend: '+14.5%', isPositive: true },
    { id: 2, title: 'Customer Retention', value: '92.4%', trend: '+2.1%', isPositive: true },
    { id: 3, title: 'Server Downtime', value: '4.2 hrs', trend: '-1.5%', isPositive: false },
    { id: 4, title: 'New Hires', value: '48', trend: '+12', isPositive: true },
  ];

  
  const departmentMetrics = [
    { id: 'eng', name: 'Engineering', efficiency: 94, budgetUsed: 88 },
    { id: 'sales', name: 'Sales', efficiency: 82, budgetUsed: 95 },
    { id: 'mktg', name: 'Marketing', efficiency: 78, budgetUsed: 65 },
    { id: 'hr', name: 'Human Resources', efficiency: 91, budgetUsed: 72 },
  ];

  
  const monthlyData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 70 },
    { month: 'May', value: 65 },
    { month: 'Jun', value: 85 },
    { month: 'Jul', value: 100 },
  ];

  return (
    <div className="space-y-8">
      {/* --- Page Header --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-200">Analytics & Reports</h1>
          <p className="text-gray-500 mt-1">Comprehensive overview of company performance.</p>
        </div>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg transition-colors text-sm font-medium shadow-sm flex items-center gap-2">
          <span>📥</span> Export PDF
        </button>
      </div>

      {/* --- KPI Cards Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium mb-2">{kpi.title}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
              <span className={`text-sm font-medium ${kpi.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- Left Column: CSS Bar Chart --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Growth (YTD)</h2>
          
          {/* Chart Container */}
          <div className="h-64 flex items-end justify-between gap-2 pt-10">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex flex-col items-center w-full group">
                {/* Tooltip (shows on hover) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded mb-2 whitespace-nowrap">
                  {data.value}%
                </div>
                {/* The Bar */}
                <div 
                  className="w-full bg-blue-100 hover:bg-blue-600 transition-colors rounded-t-md"
                  style={{ height: `${data.value}%` }}
                ></div>
                {/* Label */}
                <span className="text-xs text-gray-500 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Column: Department Metrics --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Department Efficiency</h2>
          
          <div className="space-y-6">
            {departmentMetrics.map((dept) => (
              <div key={dept.id}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{dept.name}</span>
                  <span className="text-sm text-gray-500">{dept.efficiency}%</span>
                </div>
                {/* Background Track */}
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  {/* Fill Bar */}
                  <div 
                    className={`h-2.5 rounded-full ${dept.efficiency > 90 ? 'bg-green-500' : dept.efficiency > 80 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                    style={{ width: `${dept.efficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}