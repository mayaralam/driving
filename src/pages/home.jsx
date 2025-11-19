import Nav from "../components/nav";
import up from "../assets/up.png";
import foot from "../assets/foot.png";
import bcg from "../assets/bcg.png";
import { FaLocationArrow } from "react-icons/fa6";
import { TbParkingCircle } from "react-icons/tb";
import { TbTrafficLights } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import { GoCheck } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheckIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  LightBulbIcon,
  CloudIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Footer from "../components/footer";
export default function home() {
  const navigate = useNavigate();
  const features = [
    {
      icon: "🎓",
      title: "98% Pass Rate",
      description: "First-time success",
    },
    {
      icon: "🛡️",
      title: "Certified Experts",
      description: "Licensed instructors",
    },
    {
      icon: "🏅",
      title: "10+ Years",
      description: "Experience",
    },
  ];

  const tabs = ["Safety First", "Traffic Rules", "Weather Tips"];

  const content = {
    "Safety First": [
      {
        title: "Defensive Driving",
        description:
          "Always anticipate potential hazards and maintain safe distances",
        icon: ShieldCheckIcon,
        tips: [
          "Keep a safe distance from other vehicles",
          "Scan the road ahead for hazards",
          "Avoid aggressive driving behaviors",
        ],
      },
      {
        title: "Visual Awareness",
        description: "Maintain 360° awareness of your surroundings",
        icon: EyeIcon,
        tips: [
          "Check mirrors frequently",
          "Be aware of blind spots",
          "Stay alert to road signs and signals",
        ],
      },
      {
        title: "Emergency Response",
        description: "Know how to react in critical situations",
        icon: ExclamationTriangleIcon,
        tips: [
          "Know emergency contact numbers",
          "Keep a first aid kit in your car",
          "Stay calm and follow safety protocols",
        ],
      },
      {
        title: "Pedestrian Safety",
        description: "Always prioritize pedestrian safety",
        icon: UsersIcon,
        tips: [
          "Slow down near crosswalks",
          "Make eye contact with pedestrians",
          "Never block pedestrian paths",
        ],
      },
    ],
    "Traffic Rules": [
      {
        title: "Speed Limits",
        description: "Respect posted speed limits in all zones",
        icon: LightBulbIcon,
        tips: [
          "Residential: 25-35 mph",
          "Highway: 55-70 mph",
          "School zones: 15-25 mph",
        ],
      },
      {
        title: "Right of Way",
        description: "Understand who goes first at intersections",
        icon: FaLocationArrow,
        tips: [
          "Yield to vehicles on the right",
          "Stop signs: first to stop, first to go",
          "Emergency vehicles always have priority",
        ],
      },
      {
        title: "Parking Rules",
        description: "Master proper parking techniques",
        icon: TbParkingCircle,
        tips: [
          " Park within designated spaces",
          "No parking near fire hydrants (15 ft)",
          "Parallel park with proper spacing",
        ],
      },
      {
        title: "Signal Usage",
        description: "Communicate your intentions clearly",
        icon: TbTrafficLights,
        tips: [
          "Signal 100 feet before turns",
          "Use hazard lights when stopped",
          "Signal before changing lanes",
        ],
      },
    ],
    "Weather Tips": [
      {
        title: "Wet Conditions",
        description: "Adjust driving for rain and wet roads",
        icon: IoCarSportOutline,
        tips: [
          "Reduce speed by 10-15 mph",
          "Increase following distance",
          "Avoid puddles and standing water",
        ],
      },
      {
        title: "Winter Driving",
        description: "Navigate ice and snow safely",
        icon: ExclamationTriangleIcon,
        tips: [
          "Accelerate and brake gently",
          "Keep emergency kit in car",
          "Clear all windows before driving",
        ],
      },
      {
        title: "Night Driving",
        description: "Stay safe when visibility is reduced",
        icon: EyeIcon,
        tips: [
          "Use high beams on empty roads",
          "Dim lights for oncoming traffic",
          "Keep windshield clean",
        ],
      },
      {
        title: "Fog & Low Visibility",
        description: "Drive safely in reduced visibility",
        icon: FaRegClock,
        tips: [
          "Use fog lights, not high beams",
          "Follow road markings",
          "Pull over if visibility is too low",
        ],
      },
    ],
  };

  const Card = ({ title, description, icon: Icon, tips }) => {
    const [showTips, setShowTips] = useState(false);

    return (
      <div
        className={`bg-white shadow-md rounded-lg p-4 transition-all duration-500 ease-in-out overflow-hidden ${
          showTips ? "min-h-[320px]" : "min-h-[240px]"
        }`}
        onMouseEnter={() => setShowTips(true)}
        onMouseLeave={() => setShowTips(false)}
        onTouchStart={() => setShowTips(true)}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-blue-700 bg-gray-200 rounded-md p-1.5" />
        </div>
        <h3 className="text-md font-medium text-black mt-1.5">{title}</h3>

        <p className="text-gray-600 mt-2">{description}</p>
        <span className="inline-block text-blue-500 hover:underline mt-2 cursor-pointer">
          Tap or hover for tips →
        </span>
        <div
          className={`transition-all duration-500 ease-in-out ${
            showTips ? "opacity-100 mt-4" : "opacity-0 h-0"
          }`}
        >
          {showTips && (
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const [activeTab, setActiveTab] = useState("Safety First");

  const courses = [
    {
      title: "Beginner's License",
      paragraph:
        "Perfect for first-time drivers. Learn the fundamentals of safe driving from scratch.",
      duration: "6–8 weeks",
      lessons: 20,
      icon: <IoMdClock />,
      icon2: <MdOutlinePeopleOutline />,
      features: [
        "Theory lessons included",
        "15 hours behind the wheel",
        "DMV test preparation",
        "Free study materials",
      ],
      price: "$499",
    },
    {
      title: "Defensive Driving",
      paragraph:
        "Advanced techniques to help you anticipate and avoid potential hazards on the road.",
      duration: "3–4 weeks",
      lessons: 12,
      icon: <IoMdClock />,
      icon2: <MdOutlinePeopleOutline />,
      features: [
        "Advanced safety techniques",
        "Emergency response training",
        "Weather condition practice",
        "Certificate of completion",
      ],
      price: "$299",
      popular: true,
    },
    {
      title: "Highway Confidence",
      paragraph:
        "Master highway and freeway driving with confidence and proper merging techniques.",
      duration: "2 weeks",
      lessons: 8,
      icon: <IoMdClock />,
      icon2: <MdOutlinePeopleOutline />,
      features: [
        "Highway entry & exit practice",
        "Lane changing mastery",
        "High-speed navigation",
        "Real highway experience",
      ],
      price: "$199",
    },
    {
      title: "Parallel Parking Pro",
      paragraph:
        "Become an expert at parallel parking and master all parking techniques.",
      duration: "1 week",
      lessons: 4,
      icon: <IoMdClock />,
      icon2: <MdOutlinePeopleOutline />,
      features: [
        "Parallel parking focus",
        "Angle parking practice",
        "Tight space maneuvering",
        "Unlimited practice time",
      ],
      price: "$99",
    },
  ];

  const CourseCard = ({
    title,
    duration,
    lessons,
    features,
    price,
    popular,
    icon,
    icon2,
    paragraph,
  }) => (
    <div
      className={`bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl ${
        popular ? "border-2 border-blue-500" : ""
      }`}
    >
      {popular && (
        <div className="text-xs font-semibold text-white bg-orange-500 px-2 py-1 rounded-full w-fit mb-3">
          Most Popular
        </div>
      )}
      <h3 className="text-md font-light text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 mb-5">{paragraph}</p>
      <div className="flex items-center gap-1 mb-2">
        <div className="w-5 h-5 text-blue-600">{icon}</div>
        <p className="text-sm text-gray-600">Duration: {duration}</p>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <div className="w-5 h-5 text-blue-600">{icon2}</div>
        <p className="text-sm text-gray-600 mb-2"> Lessons: {lessons}</p>
      </div>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        {features.map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div className="text-green-800">
              <GoCheck />
            </div>
            <p>{feature}</p>
          </div>
        ))}
      </ul>
      <div className="flex flex-col justify-between items-center gap-2 mt-10">
        <span className="text-blue-600 font-bold mb-3">
          Starting at {price}
        </span>
        <button
          onClick={() => toast.success(`You enrolled in: ${title}`)}
          className="cursor-pointer bg-blue-600 text-white px-3 py-1 w-full rounded-md text-sm hover:bg-blue-700 transition"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div
        className="relative h-[130vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bcg})` }}
      >
        <Nav />
        <Toaster position="top-center" />
        <div className="container mx-auto px-4 absolute inset-0  grid md:grid-cols-2 grid-cols-1 items-center py-4 mt-25 text-black">
          <div>
            <div className="flex mb-5 items-center gap-3 bg-gradient-to-r from-blue-500 to-orange-400 text-white px-3 py-0 rounded-full w-fit shadow-md">
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 128 128"
              >
                <path
                  fill="none"
                  stroke="#2f2f2f"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="m52 109.22l4.22-10.55"
                />
                <path
                  fill="#2f2f2f"
                  d="M74.52 109.22a2.102 2.102 0 0 1-1.88-3.05L83.2 85.06a2.1 2.1 0 0 1 2.83-.94c1.04.52 1.47 1.79.94 2.83l-10.56 21.11c-.37.74-1.12 1.16-1.89 1.16"
                />
                <path
                  fill="#ed6c30"
                  d="M86.67 90.22c-2.04 0-4.45 1.49-5.36 3.31l-3.02 6.04c-.91 1.82-3.33 3.31-5.36 3.31H55c-2.04 0-3.71-1.67-3.71-3.71v-3.14c0-2.04-1.58-3.18-3.52-2.54L1.91 111.73c-2.85 1.59-1.73 5.93 1.54 5.93H105.3c2.04 0 3.01-1.51 2.15-3.36l-9.56-20.71c-.85-1.85-3.22-3.36-5.26-3.36h-5.96z"
                />
                <path
                  fill="#ed6c30"
                  d="M128 83.18c0-1.93-1.58-3.51-3.51-3.51h-7.76c-1.93 0-4.13 1.45-4.89 3.23l-9.9 23.1c-.76 1.77.2 3.23 2.13 3.23h20.42c1.93 0 3.51-1.58 3.51-3.51z"
                />
                <path
                  fill="#fcc21b"
                  d="M128 88.11h-10.56l2.12-4.22H128zm0 8.45h-10.56l2.12-4.23H128zm0 8.44h-10.56l2.12-4.22H128z"
                />
                <circle cx="26.67" cy="111.33" r="12.67" fill="#2f2f2f" />
                <circle cx="26.67" cy="111.33" r="8.44" fill="#78a3ad" />
                <circle cx="102.67" cy="111.33" r="12.67" fill="#2f2f2f" />
                <circle cx="102.67" cy="111.33" r="8.44" fill="#78a3ad" />
              </svg>
              <span className="font-medium text-md">
                Your Journey Starts Here
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl mb-7">Master the Road with</h1>
              <h1 className="text-xl mb-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400">
                Confidence
              </h1>
            </div>
            <h6 className="text-md text-gray-500 mb-10">
              Experience modern driving education with interactive lessons,
              expert instructors, and a proven track record of success. We don't
              just teach you to pass the test—we prepare you for a lifetime of
              safe driving.
            </h6>
            <div className="flex gap-5 text-white mt-6 items-center pb-10">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 px-4 py-2 font-bold cursor-pointer rounded-lg flex items-center justify-center gap-4"
              >
                Start Learning Today
              </button>
              <button
                onClick={() => navigate("/schools")}
                className="opacity-100 shadow-2xl px-4 py-1.5 bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400  border-2 border-blue-600 font-bold cursor-pointer rounded-lg"
              >
                View Schools
              </button>
            </div>
            <div className="flex justify-center items-center gap-8 mb-12 mr-0 md:mr-34">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div>
                    <div className=" flex items-center justify-center text-3xl mb-4 ">
                      {feature.icon}
                    </div>{" "}
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="  text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="rounded-2xl ml-0 md:ml-25" src={up} />
        </div>
      </div>
      <div className="container mx-auto px-4 items-center flex flex-col gap-4 mt-12">
        <div className="flex items-center gap-3 bg-blue-50 text-blue-600 px-3 py-0 rounded-full w-fit shadow-md">
          <span className="font-medium text-sm">Interactive Learning</span>
        </div>
        <div className="flex items-center gap-1.5">
          <h1 className="text-md">Traffic & Driving</h1>
          <h1 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400">
            Guidelines
          </h1>
        </div>
        <p className="text-md text-gray-600 dark:text-gray-300 mb-7">
          Explore essential driving rules and safety tips in an engaging,
          interactive way. Hover over each card to reveal detailed tips and best
          practices.
        </p>

        <div className="min-h-[60vh] p-6">
          <div className="flex justify-center mb-6 space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content[activeTab].map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 text-orange-600 px-3 py-0 rounded-full w-fit shadow-md">
          <span className="font-medium text-sm">Our Programs</span>
        </div>
        <div className="flex items-center gap-1.5">
          <h1 className="text-md">Choose Your</h1>
          <h1 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400">
            Learning Path
          </h1>
        </div>
        <p className="text-md text-gray-600 dark:text-gray-300 mb-2">
          We offer comprehensive driving courses tailored to your needs, from
          complete beginners to advanced skill development.
        </p>
      </div>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-7 text-gray-800 dark:text-gray-300">
          Choose Your Driving Course
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 min-h-[60vh] mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div
          className="w-full bg-cover bg-center text-white py-16 px-6"
          style={{ backgroundImage: `url(${foot})` }}
        >
          <div className="max-w-4xl mx-auto text-center p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Driving Journey?
            </h2>
            <p className="text-lg mb-6">
              Book your first lesson today and take the first step towards
              driving independence.
              <br />
              <span className="text-orange-300 ">
                Limited slots available this month!
              </span>
            </p>
            <div className="flex justify-center items-center gap-5 mb-8">
              <button
                onClick={() => navigate("/about")}
                className="min-w-fit bg-blue-600 text-white hover:bg-blue-700 transition px-6 py-2 rounded-md font-semibold border border-blue-600 cursor-pointer flex items-center justify-center gap-4"
              >
                More Info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="m14 16l4-4m0 0l-4-4m4 4H6"
                  />
                </svg>
              </button>
              <button
                onClick={() => navigate("/schools")}
                className="min-w-fit opacity-90 shadow-2xl bg-transparent text-blue-400 border-2 border-blue-400 px-7 py-2.5 font-bold cursor-pointer rounded-lg"
              >
                Book Your First Lesson
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl text-white mt-12">5000+</h3>
                <p className="text-sm text-gray-200">Students Trained</p>
              </div>
              <div>
                <h3 className="text-3xl text-white mt-12">15+</h3>
                <p className="text-sm text-gray-200">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl text-white mt-12">95%</h3>
                <p className="text-sm text-gray-200">Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
