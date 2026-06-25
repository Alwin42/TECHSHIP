export default function StatCard({ title, value, trend }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-gray-900 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold mt-2 text-gray-800">{value}</p>
      <span className="text-green-500 text-sm font-medium mt-2 inline-block">{trend}</span>
    </div>
  );
}