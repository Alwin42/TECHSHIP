
import Link from 'next/link';
export default function EmployeeDetails({ params }) {
  
  return (
    <div>
      <Link href="/employees" className="text-gray-200 hover:text-gray-600 mb-4 inline-block">
        &larr; Back to Directory
      </Link>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Profile</h1>
        <p className="text-lg text-gray-900">Viewing details for Employee ID: <span className="font-mono text-blue-600">{params.id}</span></p>
        
        <div className="mt-8 space-y-4">
          <div className="p-4 bg-gray-50 text-gray-900 rounded-lg">Performance Reviews...</div>
          <div className="p-4 bg-gray-50  text-gray-900 rounded-lg">Equipment Assigned...</div>
        </div>
      </div>
    </div>
  );
}