import { Avatar } from "@mui/material"
import HomeCard from "../../components/Card"
import { useState } from "react";
import NewPost from "../../components/NewPost";


const Home = () => {
  const [showModal, setShowModal] = useState(false);

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
          onClick={() => setShowModal(true)}
        >
          Post
        </button>

        <NewPost open={showModal} onClose={() => setShowModal(false)} />
      </div>

      <HomeCard
        username="sujjeee"
        timeAgo="28m"
        text="[SQL performance] Làm sao tối ưu truy vấn trên 1 table có 1 triệu bản ghi ?
Khỏi phải giới thiệu về câu hỏi này nữa, đây là câu hỏi muôn thuở khi đi phỏng vấn phần lớn ae sẽ gặp phải khi phỏng vấn rank junior-middle
Vậy có những cách tối ưu nào cho câu hỏi trên ?
Dưới đây là những cách của mình ! Ae còn cách nào thì góp ý thêm nhé !"
        imageUrl="https://random-image-pepebigotes.vercel.app/api/random-image"
        likes={1}
        comments={2}
        replies={1}
        share={1}
       />

      <HomeCard
        username="sujjeee"
        timeAgo="28m"
        text="[SQL performance] Làm sao tối ưu truy vấn trên 1 table có 1 triệu bản ghi ?
Khỏi phải giới thiệu về câu hỏi này nữa, đây là câu hỏi muôn thuở khi đi phỏng vấn phần lớn ae sẽ gặp phải khi phỏng vấn rank junior-middle
Vậy có những cách tối ưu nào cho câu hỏi trên ?
Dưới đây là những cách của mình ! Ae còn cách nào thì góp ý thêm nhé !"
        imageUrl="https://random-image-pepebigotes.vercel.app/api/random-image"
        likes={1}
        comments={2}
        replies={1}
        share={1}
       />

      <HomeCard
        username="sujjeee"
        timeAgo="28m"
        text="
Khỏi phải giới thiệu về câu hỏi này nữa, đây là câu hỏi muôn thuở khi đi phỏng vấn phần lớn ae sẽ gặp phải khi phỏng vấn rank junior-middle
Vậy có những cách tối ưu nào cho câu hỏi trên ?"
        imageUrl="https://random-image-pepebigotes.vercel.app/api/random-image"
        likes={1}
        comments={2}
        replies={1}
        share={1}
       />
    </>
  )
}

export default Home
