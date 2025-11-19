import Nav from "../components/nav";
import { Toaster, toast } from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { FaCheckCircle, FaBolt } from "react-icons/fa";
import contactus from "../assets/contactus.jpg";
import Footer from "../components/footer";
export default function contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Booked successfully!");
  };
  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      label: "Call Us",
      value: "(555) 123-4567",
      color: "bg-blue-100",
    },
    {
      icon: <FaEnvelope />,
      label: "Email Us",
      value: "info@drivingschool.com",
      color: "bg-blue-200",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Visit Us",
      value: "123 Main Street, Your City, ST 12345",
      color: "bg-blue-300",
    },
    {
      icon: <FaClock />,
      label: "Hours",
      value: "Mon–Sat: 8am–8pm, Sun: 10am–6pm",

      color: "bg-gradient-to-r from-blue-500 to-orange-400",
    },
  ];
  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Certified Instructors",
      description:
        "All our instructors are fully licensed and experienced professionals",
      color: "text-green-600",
    },
    {
      icon: <FaClock />,
      title: "Flexible Scheduling",
      description: "Choose lesson times that work with your busy schedule",
      color: "text-blue-600",
    },
    {
      icon: <FaBolt />,
      title: "High Pass Rate",
      description: "95% of our students pass their test on the first attempt",
      color: "text-yellow-500",
    },
  ];
  return (
    <>
      <Nav />
      <Toaster position="top-center" />
      <div
        className="h-66 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactus})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-25 text-2xl font-light text-white text-shadow-lg/30">
            Get in Touch
          </h3>
          <h2 className="text-xl text-white text-shadow-lg/30">
            We're here to answer your questions and help you start your journey
          </h2>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-orange-400">
        <div className="container mx-auto flex flex-col items-center gap-3 px-4 pt-7">
          <section className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-8">
              <section className=" py-10 px-4">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Start Your Driving Journey Today
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    {contactItems.map((item, index) => (
                      <div
                        key={index}
                        className={`rounded-lg p-4 shadow-md transition-transform duration-300 hover:translate-x-2 ${item.color}`}
                      >
                        <div className="text-xl text-blue-700 mb-2">
                          {item.icon}
                        </div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-600">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  Get Started Today
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                    // defaultValue="(555) 123-4567"
                  />
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm">
                    <option>Beginner's License</option>
                    <option>Defensive Driving</option>
                    <option>Highway Confidence</option>
                    <option>Parallel Parking Pro</option>
                  </select>
                  <textarea
                    placeholder="Message (Optional)"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-800 transition"
                  >
                    Book Your First Lesson
                  </button>
                </form>
                <p className="text-xs text-center text-gray-500 mt-4">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container mx-auto px-4 items-center flex flex-col mt-5">
        <p className="text-md text-gray-600 dark:text-gray-300 ">
          Why Choose DriveRight Academy?
        </p>
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2"
              >
                <div
                  className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-xl ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
