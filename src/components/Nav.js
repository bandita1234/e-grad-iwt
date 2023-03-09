import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between px-16 h-16 items-center bg-emerald-100 text-xl shadow-lg">
        <div className="">
          <ul className="flex space-x-14">
            <li className=""><a href="/exam" >e-Exam</a>
             </li>
            <li className="">Openforum</li>
            <li className="">e-Repository</li>
            <li className="">My wall</li>
          </ul>
        </div>
        <div className="bg-emerald-300 px-10 py-2 rounded">
            <button><a href="/signup" >Register</a></button>
          </div>
        </div>
      </div>
  );
};

export default Nav;
