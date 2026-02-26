import Link from "next/link";

export default function JobsPage() {
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
              <Link href="/jobs" className="text-slate-900 font-medium">Jobs</Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900">Portfolio</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Find Your Dream Job</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover opportunities tailored to your skills and experience. Connect your resume to apply seamlessly.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
            <input
              type="text"
              placeholder="City or remote"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
            <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Job Listings */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Senior Frontend Developer</h3>
                  <p className="text-slate-600 mt-1">Tech Innovations Inc. • San Francisco, CA • Full-time</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Next.js</span>
                  </div>
                  <p className="text-slate-500 mt-3 line-clamp-2">
                    We're looking for an experienced frontend developer to join our dynamic team building cutting-edge web applications...
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-slate-900 font-medium">$120k - $150k</span>
                  <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}