import React from 'react'

import { FaArrowRight } from "react-icons/fa";

const Customer = () => {
  return (
    <article className="bg-[#F5F7FA] h-[390px] w-full flex items-center justify-center">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* img */}
        <div className="w-[40%]">
          <img src="/src/images/image 9.svg" alt="" />
        </div>

        {/* text */}
        <div className="w-[60%] flex flex-col gap-8">
          {/* dsec */}
          <div className="flex flex-col gap-2">
            <p className="font-medium text-base text-[#717171]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5 className="text-[#4CAF4F] font-semibold text-xl">Tim Smith</h5>
            <span className="text-[#89939E] font-normal text-base">
              British Dragon Boat Racing Association
            </span>
          </div>
          {/* logo */}
          <div className="flex items-center gap-8 justify-between">
            {/* logoimg */}
            <div className="flex items-center gap-10">
              <img src="/src/images/Logo (9).svg" alt="" />
              <img src="/src/images/Logo (10).svg" alt="" />
              <img src="/src/images/Logo (11).svg" alt="" />
              <img src="/src/images/Logo (12).svg" alt="" />
              <img src="/src/images/Logo (13).svg" alt="" />
              <img src="/src/images/Logo (14).svg" alt="" />
            </div>
            {/* more details */}
            <div className="text-[#4CAF4F] font-semibold text-sm flex items-center justify-center gap-2">
              <p>Meet all customers</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Customer
