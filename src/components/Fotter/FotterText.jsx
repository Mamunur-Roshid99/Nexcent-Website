import React from 'react'

import { FaArrowRight } from "react-icons/fa";

const FotterText = () => {
  return (
    <article className="bg-[#F5F7FA] w-full h-[300px]">
      <div className="w-[90%] mx-auto flex flex-col gap-8 text-center py-8 items-center justify-center">
        <h4 className="text-[#263238] text-6xl leading-[72px] font-semibold">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h4>
        <button className="bg-[#4CAF4F] flex items-center justify-center gap-2 py-3 px-8 text-white text-sm rounded">
          Get a Demo <FaArrowRight />
        </button>
      </div>
    </article>
  );
}

export default FotterText
