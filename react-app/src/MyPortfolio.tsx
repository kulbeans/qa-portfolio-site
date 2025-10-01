// MyPortfolio Component

export default function MyPortfolio() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen pl-[50px]">
      {/* Header */}
      <header className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Nurul Syafiqah Ab Latip</h1>
        <p className="mt-2 text-lg">Aspiring Software Testing Engineer | From Front-End to QA</p>
        <div className="mt-6 flex justify-center gap-6">
          <button
            className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition"
            onClick={() => window.open('/resume.pdf', '_self')}
          >
            Download Resume
          </button>
          <button
            className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition"
            onClick={() => window.open('https://github.com/kulbeans', '_blank')}
          >
            View GitHub
          </button>
        </div>
      </header>

      {/* About Me */}
    <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I’m transitioning from front-end development and marketing into software testing. With my coding background,
          attention to detail, and strong documentation skills, I design and execute test cases, identify bugs, and build
          automation to ensure product quality.
        </p>
      </section>

      {/* Projects */}
    <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Manual Testing */}
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Manual Testing</h3>
            <p className="mb-4">E-commerce checkout flow testing with test plans, cases, and bug reports.</p>
            <a href="#" className="text-blue-600 hover:underline">View Artifacts →</a>
          </div>
          {/* API Testing */}
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">API Testing</h3>
            <p className="mb-4">Postman collection testing OpenWeatherMap API for response validation.</p>
            <a href="#" className="text-blue-600 hover:underline">View Collection →</a>
          </div>
          {/* Automation Testing */}
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="mb-4">Cypress scripts automating login and form submissions with GitHub repo.</p>
            <a href="#" className="text-blue-600 hover:underline">View Repo →</a>
          </div>
        </div>
      </section>

      {/* Documentation Samples */}
    <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Documentation Samples</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">Test Plan (PDF)</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Test Cases (Excel)</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Bug Reports (PDF)</a></li>
        </ul>
      </section>

      {/* Contact */}
    <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>Let’s connect! Reach me on LinkedIn, GitHub, or via email.</p>
        <div className="mt-4 space-x-4">
          <p><a href="mailto:your.email@example.com" className="underline">Email</a> |
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="underline"> LinkedIn</a> |
          <a href="https://github.com/yourgithub" target="_blank" className="underline"> GitHub</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
