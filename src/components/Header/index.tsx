import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { SiThreads } from "react-icons/si";
import { HiHome } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import './index.css'
import NewPost from "../NewPost";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [showModal, setShowModal] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-black text-white px-4 py-2 sticky top-0 z-50 flex justify-center items-center">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-3/4">

          <div className="flex items-center space-x-2">
            <span className="font-bold text-3xl text-white">
              <Link to="/">
                <SiThreads />
              </Link>
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 font-medium">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-md nav-item transition-colors text-2xl ${
                  isActive("/") ? "active" : "" }`}
              >
                <HiHome />
              </motion.div>
            </Link>
            
            <Link to="/search">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-md nav-item transition-colors text-2xl ${
                  isActive("/search") ? "active" : "" }`}
              >
                <RiSearch2Line />
              </motion.div>
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-1 rounded-md nav-item transition-colors text-3xl active`}
              onClick={() => setShowModal(true)}
            >
              <IoMdAdd />
            </motion.div>

            <Link to="/notification">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-md nav-item transition-colors text-2xl ${
                  isActive("/notification") ? "active" : "" }`}
              >
                <FaRegHeart />
              </motion.div>
            </Link>
            
            <Link to="/profile">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-md nav-item transition-colors text-2xl ${
                  isActive("/profile") ? "active" : "" }`}
              >
                <FaRegUser />
              </motion.div>
            </Link>
            
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
              <Link to="/logout">
                <MenuItem>Logout</MenuItem>
              </Link>
            </Menu>
          </div>
        </div>
      </header>

      <NewPost open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
