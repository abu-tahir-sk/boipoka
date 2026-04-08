import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const MainLayout = () => {
      return (
            <div className="max-w-7xl mx-auto">
                  <Navbar/>
                 <div className="">  <Outlet/></div>
            </div>
      );
};

export default MainLayout;