import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
      return (
            <div className="max-w-7xl mx-auto">
                  <Navbar/>
                 <div className="min-h-[calc(100vh-254.5px)]">  <Outlet/></div>
                 <Footer/>
            </div>
      );
};

export default MainLayout;