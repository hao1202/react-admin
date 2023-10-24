import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
const Primary = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Primary;
