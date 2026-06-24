export default function Home() {
  return (
    <div className="grid grid-cols-1 mt-9 items-center justify-center">
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold m-4">Next-Gen Solutions</h2>
        <p className="text-lg font-medium mt-4">"Innovating Tomorrow, Today"</p>
        <p className="text-lg font-light mt-4 max-w-2xl mx-auto">
          At NextGen Solutions, we empower businesses with cutting‑edge technology and forward‑thinking strategies to thrive in the digital era.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 m-8 items-center max-w-5xl mx-auto">
        <div className="p-9 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop"
            alt="Technology background"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        <div className="text-lg">
          <h2 className="text-2xl font-bold mb-4">Our Features</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>IT Consulting — Guiding organizations through digital transformation.</li>
            <li>Cloud Solutions — Secure, scalable, and future‑ready infrastructure.</li>
            <li>Cybersecurity — Protecting your business from evolving threats.</li>
            <li>Custom Software — Tailored applications built to fit your needs.</li>
          </ul>
        </div>
      </div>

      <div>
        <button>About Us</button>
        <button>Service</button>
        <button>Contact</button>
      </div>
    </div>
  );
}