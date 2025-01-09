import SocialLogin from "../../components/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthenticationLottie from "../../components/AuthenticationLottie";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false); // Toggle Password Visibility
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();
  // console.log(location);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    const pass = form.password.value;

    // console.log({ email, pass });

    try {
      const result = await login(email, pass);
      // console.log(result);

      {
        location.state ? navigate(location.state) : navigate("/");
      }
      toast.success("Login sucessfully!");
    } catch (err) {
      // console.log("ERROR:", err.message);
      setErrorMsg(err?.message);
    }
  };

  return (
    <section className="grid lg:grid-cols-2 items-center container mx-auto min-h-[calc(100vh-304px)]">
      <Helmet>
        <title>Login || Foddie</title>
      </Helmet>
      <AuthenticationLottie />
      <form
        onSubmit={handleLogin}
        className="card-body max-w-2xl  rounded-lg lg:shadow-lg"
        data-aos="fade-right"
      >
        <h1 className="text-5xl font-bold py-6">Login</h1>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>

        {/* Password */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg w-full"
            required
          />
          {/*  Eye Toggle Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-14 text-gray-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <p className="text-red-500">{errorMsg}</p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <SocialLogin />
        <p className="text-center py-6">
          Have not an account?
          <Link to="/register" className="text-blue-500 hover:underline ml-2">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
