import React from 'react'

export default function underProgress() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold animate-bounce">🚧 Under Construction 🚧</h1>
        <p className="text-xl font-medium">
          The <span className="text-yellow-300 font-semibold">Resume Genie</span> is brewing some magic! 🧙‍♂️✨
        </p>
        <p className="text-lg">
          This project is currently <span className="underline decoration-wavy decoration-yellow-400">under progress</span>.
        </p>
        <p className="italic text-sm">Stay tuned for something amazing... 🎯</p>
        <div className="mt-6">
          <a
            href="/Projects"
            className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-xl transition duration-300"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    </div>
  )
}
