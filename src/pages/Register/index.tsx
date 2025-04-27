import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
    <div className="p-8 border border-[#333] bg-[rgb(24,24,24)] rounded-2xl flex justify-center items-center">
        <div className="w-full max-w-sm">
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-[#777] placeholder-[#777] focus:outline-none"
                />
                <textarea
                    placeholder="bio"
                    className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-[#777] placeholder-[#777] focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Username, phone or email"
                    className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-[#777] placeholder-[#777] focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-[#777] placeholder-[#777] focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-[#777] placeholder-[#777] focus:outline-none"
                />
                <button
                    className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                    Register
                </button>
            </div>
        </div>
    </div>
      
    </div>
  );
};

export default Register;
