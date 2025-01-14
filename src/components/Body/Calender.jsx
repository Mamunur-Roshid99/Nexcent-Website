import React from 'react'

const Calender = () => {
  return (
    <article className="w-full h-[433px] flex items-center justify-center">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* img */}
        <div className="w-[45%]">
          <img src="/src/images/pana.svg" alt="" />
        </div>
        {/* description */}
        <div className="w-[55%] flex flex-col gap-8">
          {/* desc text */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl">
              How to design your site footer likex <br /> we did
            </h2>
            <p className="text-[#717171] font-normal text-sm">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          {/* button */}
          <button className="bg-[#4CAF4F] w-[151px] text-white py-3 px-8 rounded">
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}

export default Calender
