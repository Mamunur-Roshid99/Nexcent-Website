import React from 'react'

import { FaLocationArrow } from "react-icons/fa";

const Link = () => {
  return (
    <div className="w-[60%] flex justify-between">
      {/* col1 */}
      <div className="flex flex-col gap-4">
        <h5 className="text-[#FFFFFF] text-xl font-semibold">Company</h5>
        <div className="flex flex-col gap-3 text-[#F5F7FA] font-normal text-sm">
          <a href="#">About us</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
        </div>
      </div>

      {/* col2 */}
      <div className="flex flex-col gap-4">
        <h5 className="text-[#FFFFFF] text-xl font-semibold">Support</h5>
        <div className="flex flex-col gap-3 text-[#F5F7FA] font-normal text-sm">
          <a href="#">Help center</a>
          <a href="#">Terms of service</a>
          <a href="#">Legal</a>
          <a href="#">Privacy policy</a>
          <a href="#">Status</a>
        </div>
      </div>

      {/* col3 */}
      <div className="flex flex-col gap-6">
        <h5 className="text-[#FFFFFF] font-semibold text-xl">
          Stay up to date
        </h5>
        <div className="flex items-center bg-[#515b60] h-10 rounded relative">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full h-full rounded bg-transparent text-[#D9DBE1] text-sm pl-5 border-0"
          />
          <FaLocationArrow className="absolute right-2 text-[#FFFFFF]" />
        </div>
      </div>
    </div>
  );
}

export default Link
