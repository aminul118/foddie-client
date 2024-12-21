import google from "../../src/assets/logos/google.svg";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">Or</div>
      <button className="btn w-full">
        <img className="w-10 " src={google} alt="" /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
