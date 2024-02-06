import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='fixed '>
      <div className="w-[250px] h-[100vh] pt-[50px] flex flex-col pl-[25px] bg-[url('./src/assets/bg-book2.jpg')] ">
        <Link
          to="/books"
          className="text-aliceblue text-2xl no-underline bg-slate-700 p-[20px] bg- border-white border-8 border-inherit w-[200px] mb-[10px]"
        >
          Books
        </Link>
        <Link
          to="/authors"
          className="text-aliceblue text-2xl no-underline bg-slate-700 p-[20px] border-white border-8 border-inherit w-[200px] mb-[10px]"
        >
          Authors
        </Link>
        <Link
          to="/categories"
          className="text-aliceblue text-2xl no-underline bg-slate-700 p-[20px] border-white border-8 border-inherit w-[200px]"
        >
          Categories
        </Link>
      </div>
      <div className="bg-gradient-to-r from-yellow-950 to-amberg-500 w-[10px]"></div>
    </div>
  );
}