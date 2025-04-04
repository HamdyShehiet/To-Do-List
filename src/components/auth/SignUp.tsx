import { useState } from "react";
import { User } from "../../App";
import { Link, useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

interface FormInputs {
  username: string;
  email: string;
  password: string;
}

interface UsersProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

function SignUp({ users, setUsers }: UsersProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputsErrors, setInputsErrors] = useState<FormErrors>({});
  const [formInputs, setFormInputs] = useState<FormInputs>({
    username: "",
    email: "",
    password: "",
  });


  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formInputs.username.trim()) {
      newErrors.username = "Username Is Required";
    } else if (formInputs.username.trim().length < 3) {
      newErrors.username = "Username Must be 3 Characters at least";
    }

    if (!formInputs.email.trim()) {
      newErrors.email = "Email Is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInputs.email)) {
      newErrors.email = "Not Valid Email";
    }

    if (!formInputs.password.trim()) {
      newErrors.password = "Password Is Required";
    } else if (formInputs.password.trim().length < 8) {
      newErrors.password = "Your Password Is Weak";
    }

    setInputsErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function signUp() {
    if (!validateForm()) {
      return;
    }

    const newUser = {
      id: uuidv4(),
      username: formInputs.username,
      email: formInputs.email,
      password: formInputs.password,
      tasks: [],
    };

    const userExist = users?.some((user: User) => user.email === formInputs.email);
    if (!userExist) {
      setUsers([...users, newUser]);
      navigate("/login");
      toast.success("SignUp Successfully");
      setFormInputs({
        username: "",
        email: "",
        password: "",
      });
    } else {
      toast.warning("This email has already been used.");
    }
  }

  return (
    <section>
      <div className="container min-h-[85vh] mx-auto flex items-center justify-center font-[poppins]">
        <form onSubmit={(e) => e.preventDefault()} method="post" className="grid gap-4 max-w-[34rem] w-full p-6 rounded-md border shadow-sm  bg-white">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">SignUp</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="block text-base font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formInputs.username}
              onChange={(e) => {
                setFormInputs({ ...formInputs, username: e.target.value });
              }}
              placeholder="Enter your username"
              className={`${inputsErrors.username ? "border-red-600" : ""} block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border  border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed`}
            />
            {inputsErrors.username && <span className="text-xs text-red-600">{inputsErrors.username}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="block text-base font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formInputs.email}
              onChange={(e) => {
                setFormInputs({ ...formInputs, email: e.target.value });
              }}
              placeholder="Enter your email"
              className={`${inputsErrors.email ? "border-red-600" : ""} block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed`}
            />
            {inputsErrors.email && <span className="text-xs text-red-600">{inputsErrors.email}</span>}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label htmlFor="password" className="block text-base font-medium text-gray-900">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formInputs.password}
              onChange={(e) => {
                setFormInputs({ ...formInputs, password: e.target.value });
              }}
              placeholder="Enter your password"
              className={`${inputsErrors.password ? "border-red-600" : ""} block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed`}
              />
            {inputsErrors.password && <span className="text-xs text-red-600">{inputsErrors.password}</span>}
            <button onClick={() => setShowPassword((prev) => !prev)} className={`absolute ${inputsErrors.password ? "right-3 bottom-8" : "right-3 bottom-2" }  cursor-pointer text-gray-800`}>
              {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
            </button>
          </div>

          <input
            type="submit"
            onClick={signUp}
            value="SignUp"
            className="w-full mt-2 font-medium text-base bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-700 transition duration-300 "
          />

          <p className="mt-1 text-center text-base">
            <span className="font-normal">Already have account?</span>
            <Link to="/login" className="ml-2 font-medium underline hover:text-indigo-700">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
