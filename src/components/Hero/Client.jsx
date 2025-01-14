import React from 'react'

const Client = () => {
  return (
    <section className="bg-[#ffffff] w-full">
      <div className="w-[90%] mx-auto flex flex-col gap-4">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-[#4D4D4D] text-4xl font-semibold">Our Clients</h1>
          <p className="text-[#717171] text-base font-normal">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className='flex justify-between h-24 items-center'>
          <img src="/src/images/Logo (2).svg" alt="" />
          <img src="/src/images/Logo (3).svg" alt="" />
          <img src="/src/images/Logo (4).svg" alt="" />
          <img src="/src/images/Logo (5).svg" alt="" />
          <img src="/src/images/Logo (6).svg" alt="" />
          <img src="/src/images/Logo (7).svg" alt="" />
          <img src="/src/images/Logo (8).svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Client
