import React from "react";
import { IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { SiThreads } from "react-icons/si";
import { HiHome } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import './index.css'

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-black text-white px-4 py-2 sticky top-0 z-50 flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-3/4">

        <div className="flex items-center space-x-2">
          <span className="font-bold text-3xl text-white">
            <SiThreads />
          </span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-md nav-item transition-colors text-2xl"
          >
            <HiHome />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-md nav-item transition-colors text-2xl"
          >
            <RiSearch2Line />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-md nav-item transition-colors text-2xl"
          >
            <FaRegHeart />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-md nav-item transition-colors text-2xl"
          >
            <FaRegUser />
          </motion.div>
        </nav>

        {/* Right: Avatar dropdown */}
        <div>
          <IconButton onClick={handleMenuClick} size="small">
            <Avatar alt="User" src="https://i.pravatar.cc/300" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 150,
              },
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
