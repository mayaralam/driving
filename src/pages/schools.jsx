import Nav from "../components/nav";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";
import l5 from "../assets/l5.jpg";
import l6 from "../assets/l6.jpg";
import l7 from "../assets/l7.jpg";
import l8 from "../assets/l8.jpg";
import l9 from "../assets/l9.jpg";
import { FaCalendarCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import Footer from "../components/footer";
export default function schools() {
  const SchoolCard = ({
    name,
    image,
    location,
    phone,
    rating,
    services,
    price,
    lessons,
  }) => {
    const pricePerLesson = (price / lessons).toFixed(2);
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <img src={image} alt={name} className="w-full h-50 object-cover  transition-transform duration-300 ease-in-out hover:scale-105" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 mb-1">{location}</p>
          <p className="text-sm text-gray-600 mb-1">📞 {phone}</p>
          <p className="text-sm text-yellow-600 font-medium mb-1">
            ⭐ {rating}
          </p>
         <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-blue-600 font-semibold">
            Total: ${price} • Per Lesson: ${pricePerLesson}
          </p>
          <FaCalendarCheck
            className="text-blue-600 cursor-pointer hover:text-blue-800 transition"
            size={20}
            title="Book this school"
            onClick={() => toast.success(`Booking requested for: ${name}`)}
          />
        </div>

          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          
        </div>
      </div>
    );
  };
  const schools = [
    {
      name: "Taky Car Driving School",
      image: l4,
      location: "6th Plot, 7th District, El Sherouk, Cairo",
      phone: "Not available",
      rating: "3.0",
      services: [
        "City Driving",
        "Parking Practice",
        "Highway Training",
        "Modern Vehicles",
      ],
      price: 300,
      lessons: 15,
    },
    {
      name: "Alex Drive Center",
      image: l5,
      location: "Smouha, Alexandria",
      phone: "(03) 3456-7890",
      rating: "4.8",
      services: [
        "Fast Courses",
        "Coastal Road Training",
        "Flexible Scheduling",
      ],
      price: 400,
      lessons: 10,
    },

    {
      name: "Smart Drive Academy",
      image: l6,
      location: "Nasr City, Cairo",
      phone: "(02) 1234-5678",
      rating: "4.7",
      services: [
        "Intensive Courses",
        "Night Driving",
        "Traffic Test Prep",
        "Theory & Practice",
      ],
      price: 480,
      lessons: 16,
    },
    {
      name: "El Gomhoria Driving School",
      image: l7,
      location: "Downtown, Cairo",
      phone: "(02) 2345-6789",
      rating: "4.5",
      services: ["Manual & Automatic", "Senior Drivers", "Simulation Test"],
      price: 360,
      lessons: 12,
    },
    {
      name: "Direxiona",
      image: l8,
      location: "Online Platform – Egypt",
      phone: "Via Website",
      rating: "4.6",
      services: [
        "Women Drivers",
        "Public Road Practice",
        "Mirror Use",
        "Gear Shifting",
      ],
      price: 420,
      lessons: 14,
    },

    {
      name: "Delta Driving Institute",
      image: l9,
      location: "Tanta, Gharbia",
      phone: "(040) 4567-8901",
      rating: "4.4",
      services: ["Beginner Training", "Weekend Courses", "Full Theory Support"],
      price: 350,
      lessons: 14,
    },
    {
      name: "Premier Driving Academy",
      image: l1,
      location: "Downtown District, 123 Main Street, Suite 100",
      phone: "(555) 123-4567",
      rating: "4.8 (142 reviews)",
      services: ["Manual & Automatic", "Highway Driving", "Parking Skills"],
      price: 450,
      lessons: 20,
    },
    {
      name: "Safe Roads Driving School",
      image: l2,
      location: "Northside, 456 Oak Avenue, Building B",
      phone: "(555) 234-5678",
      rating: "4.9 (198 reviews)",
      services: ["Teen Drivers", "Senior Refresher", "Road Test Prep"],
      price: 399,
      lessons: 12,
    },
    {
      name: "Express Drive Training",
      image: l3,
      location: "West End, 789 Maple Road, Unit 5",
      phone: "(555) 345-6789",
      rating: "4.7 (87 reviews)",
      services: ["Intensive Courses", "Weekend Classes", "Flexible Hours"],
      price: 375,
      lessons: 10,
    },
  ];
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 items-center">
        <h2 className="text-lg mt-7 text-center">
          Find Your Perfect Driving School
        </h2>
        <p className="text-sm dark:text-gray-300 text-gray-500 text-center mt-2">
          Browse through our selection of certified driving schools in your area
        </p>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-300 text-gray-800">
            Compare Driving Schools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <SchoolCard key={index} {...school} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
