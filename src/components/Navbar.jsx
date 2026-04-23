import { useState } from "react";
import { NavLink } from "react-router";
import { MdClose } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center md:block">
        <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className=" md:hidden text-3xl cursor-pointer">{
          isMenuOpen ? <MdClose /> : <AiOutlineMenuFold />}</div>
        <h2 className="text-[26px]  font-bold">Books Vibe</h2>
      </div>
      <nav>
        <ul className={`md:flex justify-center items-center  gap-6 absolute md:static bg-white w-full left-0 py-4 md:py-0 transition-all duration-300 ${isMenuOpen ? "top-[60px]" : "top-[-200px]"}`}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive  
                  ? "text-[#23BE0A] font-semibold  md:border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded block md:flex"
                  : "text-[#131313]/80 text-[18px] "
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold  md:border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded block md:flex"
                  : "text-[#131313]/80 text-[18px] "
              } to="/pages-to-read">
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold  md:border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded block md:flex"
                  : "text-[#131313]/80 text-[18px] "
              } to="/listed-books">
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold  md:border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded block md:flex"
                  : "text-[#131313]/80 text-[18px] "
              } to="/read-list">
             Stored Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-3">
        <button className="bg-[#23BE0A] hover:bg-green-600  py-2   font-semibold rounded-lg shadow-md 
   text-white 
  px-4 
   focus:outline-none  
  active:translate-y-px
  ">
          Sign In
        </button>{" "}
        <button className="bg-[#59C6D2] hover:bg-cyan-500  py-2  rounded font-semibold shadow-md 
   text-white 
  px-4 
   focus:outline-none  
  active:translate-y-px">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
