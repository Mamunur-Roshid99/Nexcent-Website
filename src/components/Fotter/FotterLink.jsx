import React from 'react'
import Company from './Company';
import Link from './Link';

const FotterLink = () => {
  return (
    <article className="bg-[#263238] w-full h-[328px] flex items-center justify-center">
      <div className="w-[90%] mx-auto flex justify-between">
        <Company />
        <Link />
      </div>
    </article>
  );
}

export default FotterLink
