import { toast } from "react-toastify";
import google from "../../src/assets/logos/google.svg";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    await googleLogin();
    {
      location.state ? navigate(location.state) : navigate("/");
    }
    toast.success("Login sucessfully!");
  };

  return (
    <div>
      <div className="divider">Or</div>
      <button onClick={handleGoogleLogin} className="btn w-full">
        <img className="w-10 " src={google} alt="" /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
