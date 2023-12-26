import React from "react";
import { FaChartSimple } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrScheduleNew } from "react-icons/gr";
import { FaSchool } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
const SideBar = ({ isOpen }) => {
  return (
    <div className={`xl:block w-[290px] h-[calc(100vh-80px)] bg-Dark pt-10 pl-5 transition-all duration-300 ${isOpen ? ' absolute left-0 transition-all duration-700' : 'absolute xl:relative left-[-390px] xl:left-0 transition-all duration-700'} `}>
      {/* Main Menu */}

      <div className="flex flex-col font-semibold text-md gap-y-6">
        <div className="font-bold text-white ">Main Menu</div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
          <FaChartSimple className="text-[27px]" />
          <p>Dashboard</p>
        </div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
          <FaSchool className="text-[27px]" />
          <p>Academy Management</p>
        </div>

   
      </div>


      {/* More */}

      <div className="flex flex-col mt-20 font-semibold text-md gap-y-6">
        <div className="font-bold text-white ">More</div>
        {/* SEARCH DIV */}
        <div className="mt-4 w-[215px] h-[40px] rounded-full bg-white flex justify-center items-center">
         
        <IoSearch className="text-xl text-Medium"/>
        <input type="text" className="text-center text-[14px] outline-none" placeholder="Search students by name" />
        </div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
          <FaChartSimple className="text-[27px]" />
          <p>Students</p>
        </div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
        <FaMoneyBillTransfer  className="text-[27px]" />
          <p>Fee Payment</p>
        </div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
           <FaUsers  className="text-[27px]" />
          <p>Enquiries</p>
        </div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
        <IoPersonSharp className="text-[27px]" />
          <p>Coaches</p>
        </div>

        <div className="flex flex-row items-center font-semibold text-white gap-x-4">
        <GrScheduleNew  className="text-[27px]" />
          <p>Schedule</p>
        </div>

   
      </div>
    </div>
  );
};

export default SideBar;
