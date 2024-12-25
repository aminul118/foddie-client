import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";

const MainLayout = () => {
  const { darkMode } = useTheme();
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
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={`${darkMode ? "text-white " : "text-black/75"}`}
    >
      <Navbar />
      <div className="min-h-[calc(100vh-304px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
