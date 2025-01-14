import React, { useState } from 'react'
import { AchivementData } from './AchivementData';

const Achivement = () => {

    const [achivementData, setAchivementData] = useState(AchivementData)

  return (
    <article id='product' className="bg-[#F5F7FA] w-full h-[288px] flex items-center justify-center">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* text */}
        <div className="w-[50%] flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">
            Helping a local <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="font-normal text-base text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* counts */}
        <div className="w-[50%] grid grid-cols-2 gap-10">
          {achivementData.map((item, index) => {
            const { img, number, text } = item;
            return (
              <div key={index} className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src={img} alt="" />
                </div>
                {/* counts */}
                <div>
                  <h3 className="text-[#4D4D4D] font-bold text-3xl">
                    {number}
                  </h3>
                  <p className="text-[#717171] font-normal text-base">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Achivement
