import React, { useState } from "react";

const tabs = ["Threads", "Replies", "Reposts"];

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Threads");

  return (
    <div className="min-h-screen  text-white font-sans p-4">
      
      <div className="max-w-2xl mx-auto pt-6">
        <div className="flex justify-between items-start">
          
          <div>
            <h1 className="text-2xl font-bold">Sỹ Sơn</h1>
            <p className="text-[rgb(119,119,119)]">@siusonw</p>

            <div className="flex items-center mt-3 space-x-2 text-[rgb(119,119,119)] text-sm">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/30?img=1"
                  alt="follower1"
                  className="w-6 h-6 rounded-full border-2 border-black"
                />
                <img
                  src="https://i.pravatar.cc/30?img=2"
                  alt="follower2"
                  className="w-6 h-6 rounded-full border-2 border-black"
                />
              </div>
              <span>14 followers</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex space-x-2 mt-2">
              <button className="p-1 rounded-full hover:bg-gray-700">
                <i className="fas fa-chart-bar"></i>
              </button>
              <button className="p-1 rounded-full hover:bg-gray-700">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full py-2 border border-[rgb(45,45,45)] rounded-full text-white hover:bg-gray-800 transition">
            Edit profile
          </button>
        </div>

        <div className="mt-6 flex justify-around border-b border-[rgb(45,45,45)] text-[rgb(119,119,119)] text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                activeTab === tab
                  ? "text-white border-b-2 border-white font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "Threads" && <div>Here are your threads...</div>}
          {activeTab === "Replies" && <div>Here are your replies...</div>}
          {activeTab === "Reposts" && <div>Here are your reposts...</div>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
