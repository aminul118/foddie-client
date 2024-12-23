import Lottie from "lottie-react";
import img from "../assets/lottie/newsLetter.json";

const NewsLetterForm = () => {
  return (
    <section className="py-12">
      <div className="w-full rounded-xl sm:p-5 border  ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Animation Section */}
          <div className="w-full sm:w-4/5 lg:w-1/2">
            <Lottie animationData={img} className="max-w-full" />
          </div>

          {/* Text and Form Section */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <b className="text-xl sm:text-2xl block">Stay Updated</b>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase text-[#FF354D] leading-tight mt-2">
              Join Our Newsletter
            </h1>
            <p className="text-base sm:text-lg mt-4 sm:mt-6 text-gray-600">
              Receive weekly updates on design trends, case studies, and expert
              tips delivered straight to your inbox.
              <b> Don’t miss out!</b>
            </p>

            {/* Subscription Form */}
            <form className="relative mt-6 sm:mt-10 w-full sm:w-4/5 mx-auto lg:mx-0">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="py-3 px-4 pr-32 border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-[#FF354D] w-full"
                required
              />
              <button
                type="submit"
                className="py-3 px-6 h-full absolute top-0 right-0 hover:bg-[#ea253c] bg-[#FF354D] text-white "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterForm;
