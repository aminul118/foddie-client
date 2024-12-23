import Marquee from "react-fast-marquee";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Company XYZ",
    review:
      "This service exceeded all my expectations! I highly recommend it to everyone looking for quality and professionalism.",
    rating: 5,
    image: "https://i.ibb.co.com/0rdytD1/aminul.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Marketing Director",
    review:
      "Fantastic experience from start to finish. The team was very supportive and delivered outstanding results!",
    rating: 4,
    image: "https://i.ibb.co.com/0rdytD1/aminul.png",
  },
  {
    id: 3,
    name: "Alice Brown",
    designation: "Freelancer",
    review:
      "Incredible attention to detail and very professional approach. I will definitely use their services again.",
    rating: 5,
    image: "https://i.ibb.co.com/0rdytD1/aminul.png",
  },
  {
    id: 4,
    name: "Michael Johnson",
    designation: "Entrepreneur",
    review:
      "Professional and efficient service! Highly satisfied with the results.",
    rating: 4,
    image: "https://i.ibb.co.com/0rdytD1/aminul.png",
  },
  {
    id: 5,
    name: "Michael Johnson",
    designation: "Entrepreneur",
    review:
      "Professional and efficient service! Highly satisfied with the results.",
    rating: 4,
    image: "https://i.ibb.co.com/0rdytD1/aminul.png",
  },
];

const CustomerReview = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto text-center ">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#FF354D] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Hear genuine feedback from our valued customers about their experience
          with us.
        </p>

        {/* Review Cards Marquee */}
        <Marquee pauseOnHover speed={40}>
          <div className="flex ">
            {reviews.map((review, i) => (
              <div key={i} className="flex-1 ml-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col items-start w-80 md:w-96 mx-auto h-72">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-4xl text-[#FF354D] mb-4" />

                  {/* Review Text */}
                  <p className="text-gray-700 flex-grow mb-4">
                    {review.review}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#FF354D]"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{review.name}</h4>
                      <p className="text-sm text-gray-500">
                        {review.designation}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mt-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default CustomerReview;
