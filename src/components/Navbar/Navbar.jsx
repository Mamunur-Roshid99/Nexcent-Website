import { useEffect, useState } from 'react';

const Navbar = () => {

   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(()=> {
    const handleScrolled = () => {
      if(window.pageYOffset > 0) {
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    }
   }, [])

  return (
    <header
      className={`fixed w-full ${
        isScrolled && "shadow-md"
      } bg-[#F5F7FA] h-[84px] flex items-center justify-center`}
    >
      <nav className="w-[90%] mx-auto flex items-center gap-14 justify-between">
        {/* logo */}
        <div>
          <img src="/src/images/Logo (1).svg" alt="image" />
        </div>

        {/* navigation links */}
        <div>
          <ul className="flex gap-12 font-normal text-base text-[#18191F]">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#feature">Feature</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#testimoinal">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
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
