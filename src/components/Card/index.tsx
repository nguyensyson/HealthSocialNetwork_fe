import { Avatar } from "@mui/material";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuRepeat2 } from "react-icons/lu";
import { PiShareNetworkBold } from "react-icons/pi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

interface PostCardProps {
  username: string;
  timeAgo: string;
  text: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  replies: number;
  share: number;
}

const HomeCard: React.FC<PostCardProps> = ({
  username,
  timeAgo,
  text,
  imageUrl,
  likes,
  comments,
  replies,
  share,
}) => {
  return (
    <div className=" text-white p-4 border-b border-[rgb(45,45,45)]">
      <div className="flex items-start space-x-3 h-auto">
        <div style={{ height: 100 }}>
            <Avatar
            alt="User Avatar"
            src="https://i.pravatar.cc/40"
            sx={{ width: 40, height: 40 }}
            />
            <div className="w-full h-full my-3 flex justify-center items-center">
                <div className="h-full w-0.5 bg-[rgb(45,45,45)]"></div>
            </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span>
                <span className="font-semibold">{username}</span>
                <span className="mx-2 text-sm text-neutral-400">{timeAgo}</span>
            </span>
            <MdOutlineMoreHoriz />
          </div>

          <p className="text-sm mt-1 whitespace-pre-line">{text}</p>

          {imageUrl && (
            <div className="mt-3">
              <img
                src={imageUrl}
                alt="Post visual"
                className="rounded-lg border border-neutral-700"
              />
            </div>
          )}

          <div className="flex items-center space-x-6 mt-3 text-neutral-400 text-sm">
            <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
              <FaRegHeart size={18} />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
              <FaRegComment size={18} />
              <span>{comments}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
              <LuRepeat2 size={18} />
              <span>{replies}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
              <PiShareNetworkBold size={18} />
              <span>{share}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
