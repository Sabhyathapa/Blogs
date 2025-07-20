import React from "react";

const Header = () => (
  <header className="w-full bg-white shadow-sm flex items-center justify-between px-8 py-4">
    <div className="font-serif text-2xl font-light">Narrate</div>
    <nav className="flex-1 flex justify-center">
      <ul className="flex space-x-8 text-gray-700 font-light">
        <li><a href="#" className="hover:text-black">All</a></li>
        <li><a href="#" className="hover:text-black">Future</a></li>
        <li><a href="#" className="hover:text-black">Technology</a></li>
        <li><a href="#" className="hover:text-black">Trends</a></li>
        <li><a href="#" className="hover:text-black">Web3</a></li>
      </ul>
    </nav>
    <button className="bg-black text-white px-5 py-2 rounded-lg font-light hover:bg-gray-800">Subscribe</button>
  </header>
);

export default Header; 