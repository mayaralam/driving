import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex mb-5 items-center gap-3 text-white shadow-md">
            <svg
              className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-xl pb-2.5 "
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
            <h2 className="text-xl font-bold text-white mb-2">DriveSchool</h2>
          </div>
          <p className="text-sm mb-4">
            Empowering drivers with knowledge, skills, and confidence for a
            lifetime of safe driving.
          </p>

          {/* {/* <div className="flex space-x-3"> */}

          <div className="flex items-center gap-2 mt-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M19.02 4.975A9.93 9.93 0 0 0 2.07 12A9.935 9.935 0 0 0 12 21.935a10 10 0 0 0 3.8-.75a10.2 10.2 0 0 0 3.22-2.16a9.934 9.934 0 0 0 0-14.05m-.7 13.34a8.92 8.92 0 0 1-5.32 2.57v-6.56h1.88a1 1 0 0 0 0-2H13v-2.74a1 1 0 0 1 1-1h1.2a1 1 0 0 0 0-2h-1.7a2.5 2.5 0 0 0-2.5 2.5v3.24H9.13a1 1 0 1 0 0 2H11v6.56a8.919 8.919 0 1 1 9.26-5.47a9.1 9.1 0 0 1-1.94 2.9"
                />
              </svg>{" "}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
              </svg>{" "}
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="#fff"
                    stroke-width="2"
                    d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                  />
                  <circle cx="16.5" cy="7.5" r="1.5" fill="#fff" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path fill="#fff" fill-opacity="0" d="M12 11L12 12L12 13z">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"
                  />
                  <set
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    to="1"
                  />
                </path>
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-white" to="../about">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Instructors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <Link className="hover:text-white" to="../contact">
                Contact
              </Link>
            </li>{" "}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Beginner's License
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Defensive Driving
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Highway Confidence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Parallel Parking Pro
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Custom Programs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Driving Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Safety Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                DMV Requirements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Downloads
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">© 2025 DriveSchool. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
