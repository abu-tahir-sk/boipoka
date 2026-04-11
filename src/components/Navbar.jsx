import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h2 className="text-[26px]  font-bold">Books Vibe</h2>
      </div>
      <nav>
        <ul className="flex justify-center items-center  gap-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded"
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
                  ? "text-[#23BE0A] font-semibold border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded"
                  : "text-[#131313]/80 text-[18px] "
              } to="/pages-to-read">
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold border bg-[#23BE0A]/3 border-[#23BE0A] p-2 rounded"
                  : "text-[#131313]/80 text-[18px] "
              } to="/listed-books">
              Listed Books
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
