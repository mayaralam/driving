import { Link, useNavigate } from "react-router-dom";
export default function nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="../schools">Schools</Link>
              </li>
              <li>
                <Link to="../about">About Us</Link>
              </li>
              <li>
                <Link to="../contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className=" flex items-center">
            <svg
            className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-xl "
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="45"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M355.975 292.25a24.82 24.82 0 1 0 24.82-24.81a24.84 24.84 0 0 0-24.82 24.81m-253-24.81a24.81 24.81 0 1 1-24.82 24.81a24.84 24.84 0 0 1 24.81-24.81zm-76.67-71.52h67.25l-13.61 49.28l92-50.28h57.36l1.26 34.68l32 14.76l11.74-14.44h15.62l3.16 16c137.56-13 192.61 29.17 192.61 29.17s-7.52 5-25.93 8.39c-3.88 3.31-3.66 14.44-3.66 14.44h24.2v16h-52v-27.48c-1.84.07-4.45.41-7.06.47a40.81 40.81 0 1 0-77.25 23h-204.24a40.81 40.81 0 1 0-77.61-17.67c0 1.24.06 2.46.17 3.67h-36z"
              />
            </svg>
            <a className="btn btn-ghost text-lg">
              DriveRight Academy
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="../schools">Schools</Link>
            </li>
            <li>
              <Link to="../about">About Us</Link>
            </li>
            <li>
              <Link to="../contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 items-center">
          <svg
            className="dark:text-gray-300 text-gray-600 rounded-xl hidden md:flex"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z"
              stroke-width="1"
            />
          </svg>
          <p className="text-xs md:text-md dark:text-gray-300 text-gray-600 hidden md:flex">(555) 123-4567</p>
          <a
            onClick={() => navigate("/schools")}
            className="btn py-2 px-4 cursor-pointer bg-gradient-to-r from-blue-500 to-orange-400  text-white bg-black dark:text-black dark:bg-white rounded-lg"
          >
            Book a Lesson
          </a>
        </div>
      </div>
    </>
  );
}
