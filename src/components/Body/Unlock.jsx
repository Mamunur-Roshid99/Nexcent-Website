import React from 'react'

const Unlock = () => {
  return (
    <article className="w-full h-[433px] flex items-center justify-center">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* img */}
        <div className="w-[45%]">
          <img src="/src/images/rafiki.svg" alt="" />
        </div>
        {/* description */}
        <div className="w-[55%] flex flex-col gap-8">
          {/* desc text */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl">
              The unseen of spending three <br /> years at Pixelgrade
            </h2>
            <p className="text-[#717171] font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          {/* button */}
          <button className="bg-[#4CAF4F] w-[151px] text-white py-3 px-8 rounded">Learn More</button>
        </div>
      </div>
    </article>
  );
}

export default Unlock
