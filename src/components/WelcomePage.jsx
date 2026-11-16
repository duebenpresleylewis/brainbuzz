import React from 'react';

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300 px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-sm">
        <div className="mb-6 rounded-xl bg-amber-50 px-4 py-5 text-3xl font-black text-orange-700 shadow-md">
          <h1>Welcome to BrainBuzz</h1>
        </div>

        <p className="mb-8 text-lg font-semibold leading-relaxed text-orange-50">
          Discover the power of brain training with a fast, fun quiz challenge designed to sharpen your thinking.
        </p>

        <button
          type="button"
          className="rounded-full bg-red-500 px-6 py-3 text-lg font-bold text-white shadow-lg transition duration-200 hover:bg-red-600 active:scale-95"
          onClick={onStart}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;