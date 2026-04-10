import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h2 className="text-[26px]  font-bold">Books Vibe</h2>
      </div>
      <nav>
        <ul className="flex justify-center items-center  gap-6">
          <li className="text-[#23BE0A] font-bold border-2 border-[#23BE0A] p-2 rounded"><NavLink to="/">Home</NavLink></li>
          <li className="text-[#23BE0A] font-bold border-2 border-[#23BE0A] p-2 rounded"><NavLink to="/l">Listed Books</NavLink></li>
          <li className="text-[#23BE0A] font-bold border-2 border-[#23BE0A] p-2 rounded"><NavLink to="/p">Pages to Read</NavLink></li>
          
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-3">
        <button className="bg-[#23BE0A] text-white py-2 px-3 rounded font-semibold">Sign In</button>{" "}
        <button className="bg-[#59C6D2] text-white py-2 px-3 rounded font-semibold">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
