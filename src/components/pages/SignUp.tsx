import { useState } from "react";

export interface FormInputs {
  username: string;
  email: string;
  password: string;
}

function SignUp() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    username: "",
    email: "",
    password: "",
  });

  function signUp() {
    console.log(formInputs);
  }
  return (
    <section>
      <div className="container h-[85vh] mx-auto flex items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()} method="post" className="grid gap-4 max-w-[34rem] w-full px-6 py-8 rounded-md border shadow-sm  bg-white">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="block text-base font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => {
                setFormInputs({ ...formInputs, username: e.target.value });
              }}
              placeholder="Enter your username"
              className="block w-full  px-4 py-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
              required
            />
          </div>

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
              className="block w-full  px-4 py-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
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
              className="block w-full px-4 py-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
              required
            />
          </div>
          <input
            type="submit"
            onClick={signUp}
            value="SignUp"
            className="w-full mt-2 font-medium text-base bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-700 transition duration-300 "
          />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
