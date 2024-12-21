import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-304px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
