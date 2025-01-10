import SocialLogin from "../../components/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationLottie from "../../components/AuthenticationLottie";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useAuth();
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle Password Visibility
  const navigate = useNavigate();

  //  Real-time Password Validation
  const handleValidPassword = (e) => {
    const password = e.target.value;
    setPassword(password);

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!regex.test(password)) {
      if (password.length < 6) {
        setPasswordError("Password must be at least 6 characters.");
      } else if (!/[A-Z]/.test(password)) {
        setPasswordError(
          "Password must contain at least one uppercase letter."
        );
      } else if (!/[a-z]/.test(password)) {
        setPasswordError(
          "Password must contain at least one lowercase letter."
        );
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setPasswordError(
          "Password must contain at least one special character."
        );
      } else {
        setPasswordError("");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;
    const newUser = {
      name,
      email,
      photo,
    };

    // console.log({ email, pass, name, photo });

    // Final Validation Check
    if (passwordError || pass.length === 0) {
      // console.log("Password validation failed:", passwordError);
      return;
    }

    try {
      const result = await createUser(email, pass);
      // console.log(result);

      // Make sure to check for `result.user` before using it
      const user = result.user;

      // Update user profile after registration
      await updateUserProfile(name, photo);

      // Update user state with the profile info
      setUser({ ...user, displayName: name, photoURL: photo });

      // Send the new user's info to your backend API
      await axios
        .post(`${import.meta.env.VITE_BASE_URL}/users`, newUser)
        .then((res) => {
          // console.log(res.data);
          if (res.data?.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "Registration Successful!",
              icon: "success",
            });
          }
          navigate("/login");
        });
    } catch (err) {
      // console.log("ERROR:", err);
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <section className="grid lg:grid-cols-2 items-center container mx-auto min-h-[calc(100vh-304px)]">
      <Helmet>
        <title>Register || Foddie</title>
      </Helmet>
      <AuthenticationLottie />
      <form
        onSubmit={handleRegister}
        className="card-body max-w-2xl rounded-lg lg:shadow-lg"
        data-aos="fade-left"
      >
        <h1 className="text-5xl font-bold py-6">Register</h1>

        {/* Name */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Enter Photo URL"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>

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
            onChange={handleValidPassword}
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Enter your password"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg w-full"
            required
          />
          {/* Eye Toggle Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-14 text-gray-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            disabled={passwordError || !password}
          >
            Register
          </button>
        </div>
        <SocialLogin />
        <p className="text-center py-6">
          Have an account?
          <Link to="/login" className="text-blue-500 hover:underline ml-2">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
