import StatCard from '@/components/StatCard';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="flex flex-1 gap-5 items-center">
        <h1 className="text-2xl font-medium">Welcome user , </h1>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </header>

      {/* Statistics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Employees" value="1,240" trend="+12% this month" />
        <StatCard title="Active Departments" value="24" trend="Stable" />
        <StatCard title="Pending Reports" value="8" trend="-2 from yesterday" />
      </section>

      {/* Recent Activities */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-800 font-bold mb-4">Recent Activities</h2>
        <ul className="space-y-3 text-gray-600">
          <li>• Sarah Jenkins updated the Q3 Marketing Report.</li>
          <li>• New employee onboarded in Engineering.</li>
          <li>• System maintenance scheduled for Friday.</li>
        </ul>
      </section>
    </div>
  );
}