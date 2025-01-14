import React, { useState } from 'react'

import { FaArrowRight } from "react-icons/fa";
import { CoummintyData } from './CoummintyData';

const Coumminty = () => {

    const [coummintyData, setCoummintyData] = useState(CoummintyData)

  return (
    <article className="bg-[#FFFFFF] w-full h-[506px]">
      <div className="w-[90%] mx-auto flex flex-col gap-4">
        {/* text */}
        <div className="flex flex-col gap-2 text-center w-[700px] mx-auto">
          <h3 className="text-[#4D4D4D] font-semibold text-4xl">
            Caring is the new marketing
          </h3>
          <p className="text-[#717171] font-normal text-base">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who is joining the
            community, read about how our community are increasing their
            membership income and lot is more.
          </p>
        </div>

        {/* card */}
        <div className='flex w-full justify-between'>
          {coummintyData.map((item) => {
            const { img, text, desc } = item;
            return (
              <div
                key={item.id}
                className="w-[368px] h-[366px] flex items-center justify-center flex-col relative"
              >
                <img src={img} alt="" className="h-[286px]" />
                <div className="bg-[#F5F7FA] flex flex-col gap-4 p-4 w-[317px] h-[176px] rounded-lg shadow-lg absolute bottom-[-40px]">
                  <h4 className="text-[#717171] text-center font-semibold text-xl">
                    {text}
                  </h4>
                  <p className="flex items-center justify-center text-[#4CAF4F] text-lg gap-2">
                    {desc} <FaArrowRight />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Coumminty
