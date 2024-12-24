import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/foods">All Foods</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a target="_blank">
              <FaXTwitter />
            </a>
            <a target="_blank">
              <FaFacebookF />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Foddy
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
