import Link from 'next/link';

export const metadata = { title: 'Employees' };

export default function EmployeeListing() {
  
  const employees = [
    { id: '1', name: 'Alice Smith', role: 'Software Engineer' },
    { id: '2', name: 'Bob Jones', role: 'Product Manager' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Directory</h1>
      <div className="bg-white rounded-xl text-gray-900 shadow-sm border border-gray-100 overflow-hidden">
        {employees.map((emp) => (
          <div key={emp.id} className="p-4 border-b last:border-0 flex justify-between items-center">
            <div>
              <p className="font-bold">{emp.name}</p>
              <p className="text-gray-500 text-sm">{emp.role}</p>
            </div>
            {/* Navigation to Dynamic Route */}
            <Link href={`/employees/${emp.id}`} className="text-blue-600 hover:underline">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}