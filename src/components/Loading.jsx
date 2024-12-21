import Lottie from "lottie-react";
import loading from "../assets/lottie/loading-spiner.json";
const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-304px)] flex justify-center">
      <Lottie className="w-28" animationData={loading} />
    </div>
  );
};

export default Loading;
