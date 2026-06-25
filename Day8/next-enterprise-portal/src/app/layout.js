import './globals.css';
import Navigation from '@/components/Navigation';


export const metadata = {
  title: {
    template: '%s | EnterpriseApp',
    default: 'Dashboard | EnterpriseApp',
  },
  description: 'Internal portal for employee and department management.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50 text-gray-900">
        <Navigation />
        <main className="flex-1 p-8 overflow-y-auto h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}