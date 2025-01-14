import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-[#F5F7FA] w-full h-[500px] ">
      <div className="w-[90%] mx-auto flex flex-col gap-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[22px]">
            <h2 className="font-semibold text-6xl leading-[72px]">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h2>
            <p className="font-normal text-[16px] text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="bg-[#4CAF4F] w-32 h-12 rounded text-[#FFFFFF] duration-300 hover:bg-[#409443]">
              Register
            </button>
          </div>

          <div>
            <img src="/src/images/Illustration.svg" alt="Illustration" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="/src/images/Dot.svg" alt="Dot" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection
