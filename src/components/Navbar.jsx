import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import useAuth from "../hooks/useAuth";
import logo from "../../public/foddie.svg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [userInfo, setUserInfo] = useState([]);

  // console.log(user?.email);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await logOut();
    toast.success("Sign Out successfully");
    navigate("/login");
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/users?${user?.email}`).then((res) => {
      // console.log(res.data);
      setUserInfo(res?.data);
    });
  }, [user?.email]);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/foods">All Foods</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>{" "}
      </li>
    </>
  );
  const adminLinks = (
    <>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>

      <li>
        <button onClick={handleSignOut} className="mt-3">
          <GoSignOut /> Logout
        </button>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 h-20 flex">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/">
            <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* If user exit then show user profile and dashboard else show login button */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL || userInfo.photo}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {adminLinks}
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
