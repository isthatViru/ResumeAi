import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-10">
      
      {/* Heading Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to the{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Interview Preparation Platform
          </span>
        </h1>

        <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto">
          Get ready for your next interview with AI-powered personalized
          feedback, resume analysis, and interview strategies.
        </p>
      </section>

      {/* Main Container */}
      <section className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                💼
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Job Description
                </h2>
                <p className="text-zinc-400 text-sm">
                  Paste the target role details
                </p>
              </div>
            </div>

            <label
              htmlFor="jobDescription"
              className="block mb-3 text-sm font-medium text-zinc-300"
            >
              Enter Job Description
            </label>

            <textarea
              id="jobDescription"
              placeholder="Paste complete job description here..."
              className="w-full h-[400px] bg-zinc-900 border border-zinc-700 rounded-2xl p-5 outline-none resize-none focus:border-cyan-500 transition-all"
            ></textarea>
          </div>

          {/* Right Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl">
                👤
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Your Profile
                </h2>
                <p className="text-zinc-400 text-sm">
                  Upload resume or describe yourself
                </p>
              </div>
            </div>

            {/* Upload Resume */}
            <div className="mb-8">
              <label className="block mb-3 text-sm font-medium text-zinc-300">
                Upload Resume
              </label>

              <label className="border-2 border-dashed border-zinc-700 hover:border-cyan-500 transition-all rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer bg-zinc-900/50">
                
                <div className="text-5xl mb-4">📄</div>

                <p className="font-semibold text-lg">
                  Click to upload resume
                </p>

                <p className="text-zinc-500 text-sm mt-2">
                  PDF or DOCX • Max 5MB
                </p>

                <input
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="border-t border-zinc-700"></div>

              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-zinc-900 px-4 text-zinc-400 text-sm">
                OR
              </span>
            </div>

            {/* Self Description */}
            <div>
              <label className="block mb-3 text-sm font-medium text-zinc-300">
                Self Description
              </label>

              <textarea
                placeholder="Describe your skills, experience, tech stack, and achievements..."
                className="w-full h-40 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 outline-none resize-none focus:border-purple-500 transition-all"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-cyan-500/20">
              Generate Interview Report
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-zinc-500 text-sm">
        © 2026 Interview Preparation Platform • AI Powered
      </footer>
    </main>
  );
};

export default Home;