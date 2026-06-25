import Link from 'next/link';

export default function Navigation() {
  const links = [
    
    { name: 'Dashboard', path: '/' },
    { name: 'Employees', path: '/employees' },
    { name: 'Departments', path: '/departments' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="w-64 bg-black border-amber-50 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8 text-gray-400">EnterpriseApp</h1>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.path} className="block hover:text-gray-400 transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}