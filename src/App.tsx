import Home from "./components/pages/Home";
import LogIn from "./components/auth/LogIn";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import SignUp from "./components/auth/SignUp";
import { Todo } from "./context/TasksContext";
import { ToastContainer } from "react-toastify";
import Header from "./components/layouts/Header";
import NotFound from "./components/pages/NotFound";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  tasks: Todo[];
}

function App() {
  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("Users") || "[]"));

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <Header />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
          <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />
          <Route path="/login" element={<LogIn users={users} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
