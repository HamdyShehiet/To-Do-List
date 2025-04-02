import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Header from "./components/layouts/Header";

function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
