import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import log from "../assets/log.png";
import toast from "react-hot-toast";
export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Required"),
    username: yup.string().min(3, "Minimum 3 characters").required("Required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
      .required("Required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      phone: values.phone,
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    toast.success("Registration successful!");
    resetForm();
    navigate("/login");
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div
          className=" bg-cover h-full"
          style={{ backgroundImage: `url(${log})` }}
        >
          <div className="container mx-auto px-4 flex flex-col pt-50 justify-center gap-4 mb-12 pl-15">
            <h1 className="font-light text-xl text-white mb-2">
              Welcome to DriveRight Academy
            </h1>
            <h6 className="font-medium text-md text-white">
              Your journey to confident driving starts here.
              <br />
              Create your account to unlock personalized lessons,
              <br /> expert guidance, and flexible scheduling that fits your
              life
            </h6>
          </div>
          <div className=" flex">
            <ul className="text-white md:text-lg text-md space-y-4 list-disc pl-14 md:mb-0 mb-25 ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"
                  />
                </svg>
                <p>
                  {" "}
                  Learn from certified instructors with real-world experience
                </p>
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
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                  />
                </svg>
                <p> Choose lesson times that work for you</p>
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
                    stroke-width="1.5"
                    d="M11.467 20.82a.88.88 0 0 0 1.066 0C14.168 19.593 19 15.586 19 11.016v-4.93a.514.514 0 0 0-.457-.515a12.05 12.05 0 0 1-5.582-2.046l-.61-.417a.62.62 0 0 0-.702 0l-.61.417a12.05 12.05 0 0 1-5.582 2.046a.514.514 0 0 0-.457.515v4.93c0 4.57 4.832 8.577 6.467 9.802"
                  />
                </svg>
                <p> Track your progress and aim for a first-time pas</p>
              </div>
            </ul>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", password: "", username: "", phone: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="container mx-auto flex flex-col gap-4 items-center mt-20">
            <h2 className="font-medium text-2xl">Ready to Begin?</h2>
            <p className="text-sm mb-5 text-center">
              Sign up today and take the first step toward safe, confident driving.
            </p>
            <p className="mr-[40%] font-bold font-sans">Username</p>
            <Field
              name="username"
              type="text"
              className="w-[50%] input rounded-lg focus:outline-none"
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-600"
            />
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
            <p className="mr-[35%] font-bold font-sans">Phone Number</p>
            <Field
              name="phone"
              className="w-[50%] input rounded-lg focus:outline-none"
              placeholder="Enter your phone number"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-600"
            />
            <div className="flex items-start gap-2 px-4">
              <Field
                type="checkbox"
                name="terms"
                id="terms"
                className="mt-1 accent-blue-600 w-4 h-4"
              />
              <label htmlFor="terms" className="leading-5">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-blue-500 underline hover:text-blue-700 "
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-red-500 text-xs"
            />
            <button
              type="submit"
              className="w-[50%] bg-gradient-to-r from-blue-500 to-orange-400  text-white rounded-lg px-3 py-1.5 mt-4 font-bold cursor-pointer font-sans"
            >
              Create Account
            </button>
            <div className="flex gap-2">
              <p className="text-gray-600 dark:text-gray-400 mb-7">
                Already have an account?
              </p>
              <a
                href="/login"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400"
              >
                Sign In
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
