import { Route, Routes } from "react-router"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import SignUp from "./components/pages/SignUp"
import LogIn from "./components/pages/LogIn"

function App() {

  return (
    <>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
    
    </>
  )
}

export default App
