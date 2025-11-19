import Nav from "../components/nav";
import Footer from "../components/footer";
import us from "../assets/us.png";
import { useNavigate } from "react-router-dom";
export default function about() {
  const navigate = useNavigate();
  const testimonials = [
    {
      quote:
        "The instructors were incredibly patient and knowledgeable. I passed my test on the first try thanks to their excellent teaching methods and supportive environment.",
      name: "Sarah  Mounir",
      course: "Beginner's License",
      color: "bg-red-100 text-red-700",
    },
    {
      quote:
        "As someone who had been driving for years, this course completely changed my perspective on road safety. The defensive driving techniques are invaluable.",
      name: "Amr El-Kholy",
      course: "Defensive Driving",
      color: "bg-blue-100 text-blue-700",
    },
    {
      quote:
        "I used to be terrified of highway driving. Now I feel completely confident merging, changing lanes, and navigating busy freeways. Life-changing!",
      name: "Emily Rodriguez",
      course: "Highway Confidence",
      color: "bg-green-100 text-green-700",
    },
    {
      quote:
        "Finally mastered parallel parking! The instructor's tips and techniques made it so much easier than I thought possible. Highly recommend this course.",
      name: "Michael Mitchell",
      course: "Parallel Parking Pro",
      color: "bg-purple-100 text-purple-700",
    },
    {
      quote:
        "From someone who was nervous about driving, I now feel completely prepared and confident. The structured lessons and practical experience were perfect.",
      name: "Lisa Taylor",
      course: "Beginner's License",
      color: "bg-pink-100 text-pink-700",
    },
    {
      quote:
        "Best investment I've made for my driving skills. The course content is modern, engaging, and directly applicable to real-world situations.",
      name: "Lara Mohammed",
      course: "Defensive Driving",
      color: "bg-orange-100 text-orange-700",
    },
  ];
  const TestimonialCard = ({ quote, name, course, color }) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
        <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
        <p className="text-gray-700 text-sm mb-4">"{quote}"</p>

        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${color}`}
          >
            {initials}
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-sm">{name}</p>
            <p className="text-gray-500 text-xs">{course}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div
        className="h-135 bg-cover bg-center"
        style={{ backgroundImage: `url(${us})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-58 text-2xl font-light text-white text-shadow-lg/30">
            About DriveRight Academy
          </h3>
          <h2 className="text-xl text-white text-shadow-lg/30">
            Empowering confident, safe drivers since 2008
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-3 px-4">
        <section className="md:max-w-6xl max-w-xl flex md:flex-row flex-col px-4 py-10 space-y-8 gap-22 items-center">
          <div>
            <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              Founded in 2008, our driving school was born from a simple
              mission: to create confident, safe drivers who are prepared for
              the challenges of modern roads. What started as a single
              instructor with a passion for teaching has grown into one of the
              region's most trusted driving schools.
              <br />
              <br />
              Over the years, we've helped thousands of students achieve their
              driving goals, from nervous first-timers to experienced drivers
              looking to enhance their skills. Our approach combines traditional
              teaching methods with modern technology and a deep understanding
              of how people learn.
              <br />
              <br />
              Today, our team of certified instructors continues to set the
              standard for driver education, maintaining our reputation for
              excellence and our commitment to every student's success.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md w-md md:w-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-800 text-sm md:text-base">
                To provide exceptional driver education that builds confidence,
                promotes safety, and prepares students for a lifetime of
                responsible driving.
              </p>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-800 text-sm md:text-base">
                To be the leading driving school recognized for our commitment
                to safety, innovation in teaching methods, and outstanding
                student outcomes.
              </p>
            </div>
          </div>
        </section>
        <div className="items-center flex flex-col gap-4 mt-12">
          <div className="flex items-center gap-3 bg-green-50 text-green-600 px-3 py-0 rounded-full w-fit shadow-md">
            <span className="font-medium text-sm">Student Success Stories</span>
          </div>
          <div className="flex items-center gap-1.5">
            <h1 className="text-md">What Our </h1>
            <h1 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400">
              Students Say
            </h1>
          </div>
          <p className="text-md text-gray-600 dark:text-gray-300 ">
            Real feedback from real students who have transformed their driving
            skills with our programs.
          </p>
        </div>

        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </section>
        <div className="w-full bg-gradient-to-r from-blue-100 to-orange-100 py-10 px-6 rounded-xl shadow-md text-center mb-7">
          <h3 className="text-md font-semibold text-gray-800 mb-3">
            Still exploring your options?
          </h3>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Our dedicated advisors are here to guide you through every step —
            from choosing the right course to building your confidence behind
            the wheel. Let’s find the perfect path for your driving journey
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="cursor-pointer bg-white text-black text-sm rounded-md px-6 py-2 font-medium hover:bg-blue-100 transition"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
