import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-[#F5F7FA] w-full h-[84px] flex items-center justify-center">
      <nav className="w-[90%] mx-auto flex items-center gap-14 justify-between">
        {/* logo */}
        <div>
          <img src="/src/images/Logo (1).svg" alt="image" />
        </div>

        {/* navigation links */}
        <div>
          <ul className="flex gap-12 font-normal text-base text-[#18191F]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="flex gap-[14px]">
          <button className="bg-[#F5F7FA] py-2 px-4 font-medium text-[14px] text-[#4CAF4F]">
            Login
          </button>
          <button className="bg-[#4CAF4F] py-2 px-4 font-medium text-[14px] text-[#FFFFFF] rounded-md duration-300 hover:bg-[#409443]">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
