import { Link } from "react-router-dom";

const HeroTitle = ({ heading, details }) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl lg:text-5xl max-w-xl font-bold">{heading}</h1>
      <p className="max-w-lg mx-auto">{details}</p>

      <Link to="/foods" className="btn-warning btn w-36 rounded-full">
        Click me
      </Link>
    </div>
  );
};

export default HeroTitle;
