import React from 'react'

import { SlOptions } from "react-icons/sl";

const Schedule = () => {
  return (
    <div  className='flex flex-col w-full lg:w-[94%]    bg-white px-4 gap-y-7' >

    <div className='flex flex-row items-center justify-between w-full h-16 px-2  border-b-[2px] border-[#F6F7F9] rounded-md'>

      <span className='text-Dark text-[17px] font-semibold'>
        UPCOMING SCHEDULE
      </span>

      <div className='flex-row items-center justify-center hidden md:flex gap-x-1 md:gap-x-4'>
      <button className='w-[135px] py-[5px]  text-[17px] font-semibold text-center text-white rounded-xl bg-Dark '>
       All
      </button>

      <button className='w-[135px] py-[5px]  text-[17px] font-semibold text-center text-white rounded-xl bg-Light '>
       Classes
      </button>

      <button className='w-[135px] py-[5px]  text-[17px] font-semibold text-center text-white rounded-xl bg-Light '>
       Meetings
      </button>

      <button className='w-[135px] py-[5px]  text-[17px] font-semibold text-center text-white rounded-xl bg-Light '>
       Events
      </button>
      </div>

      <span>
        <SlOptions className='text-[40px] text-Dark' />
      </span>
    </div>


    <div className='flex flex-row items-center justify-between px-4'>
          {/* LEFT SIDE */}
            <div className='flex flex-col items-start justify-between lg:flex-row'>
              <div className='flex flex-col items-start justify-between lg:flex-row'>
                <div>
                <input type="checkbox" className="mr-2" />
                <div className="inline-flex h-[35px] w-[35px] rounded-xl text-[18px] text-white  font-semibold  justify-center items-center bg-Light mr-2">
                 C
                </div>
                </div>
                <span className='inline-block text-[14px] sm:text-[16px]'>Fri, 01 Sep</span>

              </div>

              <div className=' lg:pl-12 text-[14px] sm:text-[16px]'> 3:00 PM - 4:00 PM</div>
            </div>

            {/* CENTER */}
            <span className='mx-2 font-semibold text-end text-Dark'>Beginners Badminton Class</span>

            {/* RIGHT SIDE */}
            <div className='text-end'>
              <p className='inline-block mr-0 lg:mr-9 text-Medium '>Jonas K and 15+ more</p>
              <a href="/" className='inline-block font-semibold text-blue-500'>View</a>
            </div>
    </div>



    <div className='flex flex-row items-center justify-between px-4'>
          {/* LEFT SIDE */}
            <div className='flex flex-col items-start justify-between lg:flex-row'>
              <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div>
                <input type="checkbox" className="mr-2" />
                <div className="inline-flex h-[35px] w-[35px] rounded-xl text-[18px] text-white  font-semibold  justify-center items-center bg-Light mr-2">
                 C
                </div>
                </div>
                <span className='inline-block text-[14px] sm:text-[16px]'>Fri, 01 Sep</span>

              </div>

              <div className=' lg:pl-12 text-[14px] sm:text-[16px]'> 6:00 PM - 7:30 PM</div>
            </div>

            {/* CENTER */}
            <span className='mx-2 font-semibold text-end text-Dark'>Intermediate Badminton Class</span>

            {/* RIGHT SIDE */}
            <div className='text-end'>
              <p className='inline-block mr-0 lg:mr-9 text-Medium '>Jk Arjun and 25+ more</p>
              <a href="/" className='inline-block font-semibold text-blue-500'>View</a>
            </div>
    </div>


    <div className='flex flex-row items-center justify-between px-4'>
          {/* LEFT SIDE */}
            <div className='flex flex-col items-start justify-between lg:flex-row'>
              <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div>
                <input type="checkbox" className="mr-2" />
                <div className="inline-flex h-[35px] w-[35px] rounded-xl text-[18px] text-white  font-semibold  justify-center items-center bg-Light mr-2">
                 C
                </div>
                </div>
                <span className='inline-block text-[14px] sm:text-[16px]'>Fri, 01 Sep</span>

              </div>

              <div className=' lg:pl-12 text-[14px] sm:text-[16px]'> 6:00 AM - 7:30 AM</div>
            </div>

            {/* CENTER */}
            <span className='mx-2 font-semibold text-end text-Dark'>Staff Meeting</span>

            {/* RIGHT SIDE */}
            <div className='text-end'>
              <p className='inline-block mr-0 lg:mr-9 text-Medium '>John and 5+ more</p>
              <a href="/" className='inline-block font-semibold text-blue-500'>View</a>
            </div>
    </div>


    <div className='flex flex-row items-center justify-between px-4'>
          {/* LEFT SIDE */}
            <div className='flex flex-col items-start justify-between lg:flex-row'>
              <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div>
                <input type="checkbox" className="mr-2" />
                <div className="inline-flex h-[35px] w-[35px] rounded-xl text-[18px] text-white  font-semibold  justify-center items-center bg-Light mr-2">
                 C
                </div>
                </div>
                <span className='inline-block text-[14px] sm:text-[16px]'>Fri, 01 Sep</span>

              </div>

              <div className=' lg:pl-12 text-[14px] sm:text-[16px]'> 6:00 AM - 7:30 AM</div>
            </div>

            {/* CENTER */}
            <span className='mx-2 font-semibold text-end text-Dark'>Yoga Competition @ Academy</span>

            {/* RIGHT SIDE */}
            <div className='text-end'>
              <p className='inline-block mr-0 lg:mr-9 text-Medium '>Jeil K 125+ more</p>
              <a href="/" className='inline-block font-semibold text-blue-500'>View</a>
            </div>
    </div>


  </div>
  )
}
 
export default Schedule
