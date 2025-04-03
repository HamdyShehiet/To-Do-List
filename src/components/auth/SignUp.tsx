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
  users : User [];
  setUsers : React.Dispatch<React.SetStateAction<User[]>>;
}

function SignUp({users, setUsers} : UsersProps) {
  const navigate = useNavigate()
  const [show, setShow] = useState<boolean>(false);
  const [formInputs, setFormInputs] = useState<FormInputs>({
    username: "",
    email: "",
    password: "",
  });

  function signUp() {
    if(!formInputs.username && !formInputs.email && !formInputs.password){
      return;
    }
    const newUser = {
        id: uuidv4(),
        username: formInputs.username,
        email: formInputs.email,
        password: formInputs.password,
        tasks: [],
    }
    const userExist = users?.some((user : User)=> user.email === formInputs.email)
    if(userExist){
      toast.warning("this email are Used")
    }else{
      setUsers([...users, newUser])
      navigate("/login")
      toast.success("Task Added Successfully");
      setFormInputs({
        username: "",
        email: "",
        password: "",
      })
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
              className="block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
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
              value={formInputs.email}
              onChange={(e) => {
                setFormInputs({ ...formInputs, email: e.target.value });
              }}
              placeholder="Enter your email"
              className="block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="block text-base font-medium text-gray-900">
              Password
            </label>
            <input
              type={show ? "text" : "password" }
              name="password"
              id="password"
              value={formInputs.password}
              onChange={(e) => {
                setFormInputs({ ...formInputs, password: e.target.value });
              }}
              placeholder="Enter your password"
              className="block w-full p-2 text-base font-medium shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
            />
            <span onClick={()=>setShow(prev => !prev)}>show</span>
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
