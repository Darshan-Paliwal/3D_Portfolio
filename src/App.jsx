export default function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-4">
        <h1 className="text-5xl font-bold">Hello, I'm Darshan 👋</h1>
        <p className="mt-4 text-lg">Web Developer | Freelancer</p>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto">
          I build modern, responsive websites using React, Tailwind, and
          JavaScript. Passionate about creating clean UIs and smooth user
          experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p>A modern personal portfolio made with React & Tailwind.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">E-commerce Demo</h3>
            <p>Responsive online shop with product listings and cart.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
            <p>Simple blog with posts, categories, and comments.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">📧 darshan@example.com</p>
        <a
          href="mailto:darshan@example.com"
          className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Send Email
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Darshan. All rights reserved.
      </footer>
    </div>
  );
}
