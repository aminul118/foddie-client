import { toast } from "react-toastify";
import google from "../../src/assets/logos/google.svg";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/");
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
