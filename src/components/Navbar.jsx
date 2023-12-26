import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.png";
const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="h-[80px] flex justify-between items-center px-5 md:px-10 ">
      {/* DIV FOR LOGO AND NAME */}
      <div className="flex flex-row items-center justify-between">
        <img
          src={logo}
          className="object-cover w-[150px] mr-20"
          alt="logo"
        />
        <div className="hidden xl:block ">
          <h1 className="text-4xl  leading-[50px]">Welcome Cynthia,</h1>
          <p className="text-[19px]">Here is a summary of your business</p>
        </div>
      </div>

      {/* DIV FOR POFILES AND NOTIFICATIONS */}

      <div className="flex flex-row items-center justify-between">

        <div className="h-[60px] w-[60px] rounded-full hidden sm:flex justify-center items-center bg-[#ECEAEB] mr-2">
          <IoSettingsOutline className="h-[35px] w-[35px] text-gray-700" />
        </div>

        <div className="h-[60px] w-[60px] rounded-full hidden sm:flex justify-center items-center bg-[#ECEAEB]">
          <MdNotificationAdd className="h-[35px] w-[35px]"/>
        </div>

        <div className="flex flex-row items-center justify-between ml-0 2xl:ml-36">
        <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center overflow-hidden bg-[#ECEAEB] mr-5">
         <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "className="h-[100%]" alt="" />
        </div>

        <div className="hidden xl:block">
          <h1 className="text-2xl">Cynthia John</h1>
          <p className="text-[15px] text-end">cj@example.com</p>
        </div>
        </div>

        <button onClick={toggleSidebar}><GiHamburgerMenu className="text-[30px] block xl:hidden ml-10" /></button>
      </div>

      
    </div>
  );
};

export default Navbar;
