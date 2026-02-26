import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-slate-900">CareerHub</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/builder" className="text-slate-600 hover:text-slate-900">Resume Builder</Link>
              <Link href="/jobs" className="text-slate-600 hover:text-slate-900">Jobs</Link>
              <Link href="/portfolio" className="text-slate-900 font-medium">Portfolio</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Professional Portfolio</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcase your projects and professional achievements to potential employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">E-commerce Platform</h3>
                <p className="text-slate-600 mb-4">A full-stack e-commerce solution with payment processing and inventory management.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">MongoDB</span>
                </div>
                <button className="w-full py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Add New Project
          </button>
        </div>
      </main>
    </div>
  );
}