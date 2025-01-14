import React, { useState } from 'react'
import { CoummunityData } from './CoummunityData';

const Coummunity = () => {

    const [coummunityData, setCoummunityData] = useState(CoummunityData)

  return (
    <section className="bg-[#ffffff] w-full">
      <div className="w-[90%] mx-auto flex flex-col gap-4">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-[#4D4D4D] text-4xl font-semibold">
            Manage your entire community <br /> in a single system
          </h2>
          <p className="text-[#717171] text-base font-normal">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className='flex justify-between'>
            {
               coummunityData.map((data) => {
                const {img, title, desc} = data
                return (
                  <div
                    key={data.id}
                    className="w-[299px] h-[260px] bg-[#FFFFFF] shadow-lg rounded-lg flex flex-col gap-2 py-6 px-8 text-center"
                  >
                    <div className="flex flex-col gap-4 items-center justify-center">
                      <div>
                        <img src={img} alt="" />
                      </div>
                      <h2 className="text-[28px] font-bold text-[#4D4D4D]">
                        {title}
                      </h2>
                    </div>
                    <p className="text-sm font-normal text-[#717171]">{desc}</p>
                  </div>
                );
               }) 
            }
        </div>
      </div>
    </section>
  );
}

export default Coummunity
