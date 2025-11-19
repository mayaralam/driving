import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import log from "../assets/log.png";
import { BsCheck2Circle } from "react-icons/bs";
export default function Login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .test("is-valid", "Enter a valid email or phone number", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup.string().required("Required"),
  });

  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => (u.email === email || u.phone === email) && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      toast.success("Login successful!");
      resetForm();
      navigate("/");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div
          className=" bg-cover h-screen"
          style={{ backgroundImage: `url(${log})` }}
        >
          <div className="container mx-auto px-4 flex flex-col pt-55 justify-center gap-4 mb-12 pl-15">
            <h1 className="font-light text-xl text-white">
              Welcome Back to DriveRight Academy
            </h1>
            <h6 className="font-medium text-md text-white">
              Your journey to becoming a confident driver continues here.
              <br /> Log in to access your lessons, track your progress, and
              <br /> schedule your next session.
            </h6>
          </div>
          <div className=" flex">
            <ul className="text-white text-sm space-y-4 list-disc pl-14 ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M10.5 15.25A.74.74 0 0 1 10 15l-3-3a.75.75 0 0 1 1-1l2.47 2.47L19 5a.75.75 0 0 1 1 1l-9 9a.74.74 0 0 1-.5.25"
                  />
                  <path
                    fill="#fff"
                    d="M12 21a9 9 0 0 1-7.87-4.66a8.7 8.7 0 0 1-1.07-3.41a9 9 0 0 1 4.6-8.81a8.7 8.7 0 0 1 3.41-1.07a8.9 8.9 0 0 1 3.55.34a.75.75 0 1 1-.43 1.43a7.6 7.6 0 0 0-3-.28a7.4 7.4 0 0 0-2.84.89a7.5 7.5 0 0 0-2.2 1.84a7.42 7.42 0 0 0-1.64 5.51a7.4 7.4 0 0 0 .89 2.84a7.5 7.5 0 0 0 1.84 2.2a7.42 7.42 0 0 0 5.51 1.64a7.4 7.4 0 0 0 2.84-.89a7.5 7.5 0 0 0 2.2-1.84a7.42 7.42 0 0 0 1.64-5.51a.75.75 0 1 1 1.57-.15a9 9 0 0 1-4.61 8.81A8.7 8.7 0 0 1 12.93 21z"
                  />
                </svg>
                <p>Expert instructors with years of experience</p>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                  />
                </svg>
                <p>Flexible scheduling to fit your lifestyle</p>
              </div>

              <div className="flex items-center gap-2">
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
                    stroke-width="2"
                    d="m9 12l2 2l4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806a3.42 3.42 0 0 1 4.438 0a3.42 3.42 0 0 0 1.946.806a3.42 3.42 0 0 1 3.138 3.138a3.42 3.42 0 0 0 .806 1.946a3.42 3.42 0 0 1 0 4.438a3.42 3.42 0 0 0-.806 1.946a3.42 3.42 0 0 1-3.138 3.138a3.42 3.42 0 0 0-1.946.806a3.42 3.42 0 0 1-4.438 0a3.42 3.42 0 0 0-1.946-.806a3.42 3.42 0 0 1-3.138-3.138a3.42 3.42 0 0 0-.806-1.946a3.42 3.42 0 0 1 0-4.438a3.42 3.42 0 0 0 .806-1.946a3.42 3.42 0 0 1 3.138-3.138"
                  />
                </svg>
                <p>95% first-time pass rate</p>
              </div>
            </ul>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          <Form className="container mx-auto flex flex-col gap-4 justify-center items-center mt-20">
            <h2 className="font-medium text-2xl">Student Portal Login</h2>
            <p className="text-sm mb-5 text-center">
              Access your driving lessons and progress
            </p>
            <p className="mr-[44%] font-bold font-sans">Email</p>
            <Field
              name="email"
              type="email"
              className="w-[50%] input rounded-lg focus:outline-none"
              placeholder="you@example.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
            <p className="mr-[40%] font-bold font-sans">Password</p>
            <Field
              name="password"
              type="password"
              className="w-[50%] input rounded-lg focus:outline-none"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
            <button
              type="submit"
              className="w-[50%] bg-gradient-to-r from-blue-500 to-orange-400 text-white rounded-lg px-3 py-1.5 mt-4 font-bold cursor-pointer font-sans"
            >
              Sign In
            </button>
            <div className="flex gap-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Don’t have an account?
              </p>
              <a
                href="/register"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400 text-sm"
              >
                Sign up for lessons
              </a>
            </div>
            <div className="bg-blue-100 border border-blue-200 text-gray-600 p-2 rounded-md max-w-xl mx-auto my-6">
              <p className="text-xs font-medium">
                <span className="text-blue-900 font-medium text-xs">
                  New students:
                </span>{" "}
                Check your email for login credentials sent after <br />
                registration.
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
