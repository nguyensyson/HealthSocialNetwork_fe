import { Avatar } from "@mui/material"


const Home = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 border-b border-[rgb(45,45,45)] w-full">
        <Avatar
          alt="User Avatar"
          src="https://i.pravatar.cc/40"
          sx={{ width: 40, height: 40 }}
        />

        <input
          placeholder="What's new?"
          className="bg-transparent flex-grow mx-3 text-gray-400 h-full"
        />

        <button
          className="text-white border border-[rgb(45,45,45)] rounded-xl px-4 py-2"
        >
          Post
        </button>
      </div>
    </>
  )
}

export default Home
