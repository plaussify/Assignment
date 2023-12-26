import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import PieChart from './Pie.png'
import { RiCheckboxBlankFill } from "react-icons/ri";
import Dark from './chart-dark.png'
import Light from './chart-light.png'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Boxes = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 lg:flex-row gap-x-4 '>

      {/* TWO LEFT DIVS */}
      <div  className='flex flex-col w-[99%] sm:w-[80%] lg:w-[48%] gap-y-2 '>

        <div className='flex flex-col w-full h-24 bg-white border rounded-md '>
              <div className='flex flex-row items-center justify-between w-full h-12 px-4 border-b-[2px] text-Medium text-[11px] font-semibold border-[#F6F7F9]  pt-2'>
                <span>ACTIVE STUDENTS</span>
                <span>ACTIVE COACHES</span>
              </div>


              <div className='flex flex-row items-center justify-between w-full h-10 px-10 text-black font-[500] text-[22px] '>
                <span>5000</span>
                <span className='pr-3'>5</span>
              </div>
        </div>


        <div className='flex flex-col w-full bg-white border rounded-md'>
              <div className='flex flex-row items-center justify-between w-full h-12 px-4 border-b-[2px] text-Dark text-[14px] sm:text-[17px] font-semibold border-[#F6F7F9]  '>
                <span>FEE PAYMENT SUMMARY</span>
                <div className=' flex flex-row items-center border-Light border h-9 text-black font-[400]  overflow-hidden '>
                  <span className='px-1 sm:px-3 text-[15px] '>Last 30 days</span>
                  <span className='flex items-center h-full px-2 border-l border-Light text-Medium'><RiArrowDropDownLine /></span>
                </div>
              </div>

              <div className='h-[270px] pt-2'>
                    <img src={PieChart} className='object-contain w-full h-full'  alt="" />
              </div>

              <div className='flex flex-col lg:flex-row  items-center justify-between w-full  px-4 border-b-[2px] text-Dark text-[17px] font-semibold border-[#F6F7F9] pt-7'>


                <div className='text-center w-[50%] flex flex-col items-center pb-2'>
                 <div className='flex flex-row items-center text-[12px] text-Medium tracking-wider'>
                  <RiCheckboxBlankFill className='text-Dark text-[15px] mr-2' />
                  AMOUNT RECIEVED
                 </div>
                 
                 <div>
                  <span className='text-black text-[26px]'>₹ 624,000 <p className='inline-block text-[16px]'>by 400 students</p></span>
                 </div>
                </div>

                <div className='text-center w-[50%] flex flex-col items-center pb-2'>
                 <div className='flex flex-row items-center text-[12px] text-Medium tracking-wider'>
                  <RiCheckboxBlankFill className='text-Orange text-[15px] mr-2' />
                  AMOUNT PENDING
                 </div>
                 
                 <div>
                  <span className='text-black text-[26px]'>₹ 334,000 <p className='inline-block text-[16px]'>by 123 students</p></span>
                 </div>
                </div>
               
               
              </div>

              <div>

              </div>


              

{/* 
              <div className='flex flex-row items-center justify-between w-full h-10 px-10 text-black font-[500] text-[22px] '>
                <span>5000</span>
                <span className='pr-3'>5</span>
              </div> */}
        </div>

      </div>



      {/* TWO RIGHT DIVS */}
      <div  className='flex flex-col w-[99%] sm:w-[80%] lg:w-[48%]'>

        <div className='flex flex-col w-full px-4 bg-white border rounded-md min-h-24'>
      <div className='flex flex-row items-center justify-between w-full h-12   text-Medium text-[11px] font-semibold  pt-2'>
        <span>QUICK ACTIONS</span>   
      </div>


      <div className='flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5 lg:justify-between w-full text-black  text-[22px] '>
       <button className='px-[17px] py-[7.7px]  text-[14px] text-center text-white rounded-md bg-Dark '>
        +{"  "}Add New Student
        </button>

        <button className='px-[17px] py-[7.7px]  text-[14px] text-center text-white rounded-md bg-Dark '>
        Collect Fees
        </button>

        <button className='px-[17px] py-[7.7px]  text-[14px] text-center text-white rounded-md bg-Dark '>
        +{"  "}Add New Enquiry
        </button>
      </div>
        </div>

        <div className='flex flex-col w-full mt-2 bg-white border rounded-md'>
              <div className='flex flex-row items-center justify-between w-full h-12 px-4 border-b-[2px] text-Dark text-[11px] sm:text[17px] font-semibold border-[#F6F7F9]  '>
                <span>MONTH-ON-MONTH GROWTH</span>

                <div className='flex flex-row items-center gap-x-9'>
                <div className=' flex flex-row items-center border-Light border h-9 text-black font-[400]  overflow-hidden '>
                  <span className='px-1 sm:px-3 text-[15px]  '>Last 3 months</span>
                  <span className='flex items-center h-full px-2 border-l border-Light text-Medium'><RiArrowDropDownLine /></span>
                </div>

                <FaRegArrowAltCircleDown className='text-[30px] hidden md:block' />
                </div>

              </div>

              <div className='h-[270px] pt-2 flex flex-row gap-x-10'>
                    <div className='w-[45%]'>
                      <span className='px-4 text-lg text-Medium'>Revenue</span>
                    <img src={Dark} className='object-contain w-full h-full'  alt="" />
                    </div>

                    <div className='w-[45%] h-full border-l border-Light'>
                      <span className='px-4 text-lg text-Medium'>Students</span>
                    <img src={Light} className='object-contain w-full h-full'  alt="" />
                    </div>
                    
              </div>

              <div className='flex flex-row  items-center justify-between w-full  px-4 border-b-[2px] text-Dark text-[17px] font-semibold border-[#F6F7F9] pt-7'>


                <div className='text-center w-[50%] flex flex-col items-center mt-5 pb-7'>
                 <div className='flex flex-row items-center text-[12px] text-Medium tracking-wider'>
                  <RiCheckboxBlankFill className='text-Dark text-[15px] mr-2' />
                  FEE RECIEVED
                 </div>

                </div>

                <div className='text-center w-[50%] flex flex-col items-center mt-5 pb-7'>
                 <div className='flex flex-row items-center text-[12px] text-Medium tracking-wider'>
                  <RiCheckboxBlankFill className='text-Medium text-[15px] mr-2' />
                  ACTIVE STUDENTS
                 </div>
                </div>

              </div>


        </div>


      </div>
    </div>
  )
}

export default Boxes