import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
    <div className="p-8 border border-[#333] bg-[rgb(24,24,24)] rounded-2xl flex justify-center items-center">
        <div className="w-full max-w-sm">
            <div className="space-y-4">
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
                <button
                    className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                    Log in
                </button>
            </div>
            <div className="flex justify-between items-center mt-6">
                <Link to="/register" className="text-[#777] text-sm hover:underline">
                    Register
                </Link>
                <a href="#" className="text-[#777] text-sm hover:underline">
                    Forgot password?
                </a>
            </div>
        </div>
    </div>
      
    </div>
  );
};

export default Login;
