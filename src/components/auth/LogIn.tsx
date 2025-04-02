import { useState } from "react";
import { Link } from "react-router";

interface FormInputs {
  email: string;
  password: string;
}

function LogIn() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    email: "",
    password: "",
  });

  function LogIn() {
    console.log(formInputs);
  }
  return (
    <section>
      <div className="container min-h-[85vh] mx-auto flex items-center justify-center font-[poppins]">
        <form onSubmit={(e) => e.preventDefault()} method="post" className="grid gap-4 max-w-[34rem] w-full p-6 rounded-md border shadow-sm  bg-white">
          <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Login</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="block text-base font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setFormInputs({ ...formInputs, email: e.target.value });
              }}
              placeholder="Enter your email"
              className="block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="block text-base font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setFormInputs({ ...formInputs, password: e.target.value });
              }}
              placeholder="Enter your password"
              className="block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
              required
            />
          </div>
          <input
            type="submit"
            onClick={LogIn}
            value="LogIn"
            className="w-full mt-2 font-medium text-base bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-700 transition duration-300 "
          />

          <p className="mt-1 text-center text-base">
            <span className="font-normal">Don’t have an Account ?</span>
            <Link to="/signup" className="ml-2 font-medium underline hover:text-indigo-700">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LogIn;
