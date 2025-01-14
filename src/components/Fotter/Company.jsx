import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Company = () => {
  return (
    <div className="w-[40%] flex flex-col gap-5">
      <img src="/src/images/Logo.png" alt="" className="w-[40%]" />
      <div className="flex flex-col gap-2 text-[#F5F7FA] font-normal text-sm">
        <p>Copyright © 2020 Nexcent ltd.</p>
        <p>All rights reserved</p>
      </div>
      <div className="flex items-center gap-4 text-gray-400 text-xl">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Company
