import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Heading from "../../../components/Heading";
import { FaUser, FaUtensils } from "react-icons/fa6";
import { IoFastFoodSharp, IoFastFoodOutline } from "react-icons/io5";
const Dashboard = () => {
  const admin = true;
  return (
    <header>
      <nav className="w-80 bg-slate-800 h-screen px-3 py-8">
        <Heading heading="Dashboard" />
        <div className="divider"></div>
        <ul className="space-y-3">
          {admin ? (
            <>
              <li>
                <NavLink to="/dashboard/added-foods" className="btn w-full">
                  <IoFastFoodSharp /> All Foods
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-food" className="btn w-full">
                  <FaUtensils /> Add Food
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/my-orders" className="btn w-full">
                  <IoFastFoodOutline /> My Orders
                </NavLink>
              </li>
            </>
          )}
          {/* Shared Links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/dashboard" className="btn w-full">
              <FaUser /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="btn w-full">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Dashboard;
