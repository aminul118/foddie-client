import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;

    // Check if environment variables are set
    const serviceId = import.meta.env.VITE_ServiceId;
    const templateId = import.meta.env.VITE_TemplateId;
    const publicKey = import.meta.env.VITE_PublicKey;

    console.log({ serviceId, templateId, publicKey });

    if (!serviceId || !templateId || !publicKey) {
      Swal.fire({
        title: "Error",
        text: "Email service is not configured properly. Please check environment variables.",
        icon: "error",
      });
      return;
    }
    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, form, publicKey).then(
      (result) => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
        });
        form.reset();
      },
      (error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
        // console.error("EmailJS Error:", error.text);
      }
    );
  };

  return (
    <section className="w-full min-h-[calc(100vh-304px)] flex items-center justify-center ">
      <Helmet>
        <title>Contact || Foddie</title>
      </Helmet>
      <div className="w-full max-w-6xl rounded-xl p-6 lg:p-10  ">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2  p-6 rounded-md shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FF354D] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions? Feel free to drop us a message, and we'll get back
              to you shortly.
            </p>
            <form onSubmit={handleContact} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full py-3 px-4 border rounded-md outline-none focus:ring-2 focus:ring-[#FF354D]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 border rounded-md outline-none focus:ring-2 focus:ring-[#FF354D]"
                required
              />
              <textarea
                name="text"
                placeholder="Your Message"
                rows={5}
                className="w-full py-3 px-4 border rounded-md outline-none focus:ring-2 focus:ring-[#FF354D]"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#FF354D] text-white font-semibold rounded-md hover:bg-[#ea253c] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full lg:w-1/2  p-6 rounded-md ">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FF354D] mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              Reach out to us through any of the following channels:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#FF354D] text-2xl" />
                <div>
                  <h4 className="font-semibold">Our Address</h4>
                  <p>123 Main Street, Dhaka, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#FF354D] text-2xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+880 123 456 789</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#FF354D] text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@example.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
