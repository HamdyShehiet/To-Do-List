import { useEffect, useState } from "react";

function Header() {

  const [isDark, setIsDark] = useState<boolean>(()=>{
    const theme : string | null = localStorage.getItem("theme")
    return theme === "dark" ;
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  useEffect(()=>{
    const theme : string | null = localStorage.getItem("theme")
    if(theme === "dark"){
        setIsDark(true)
        document.documentElement.classList.add("dark")
      }else{
          setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
    
  },[])

  return (
    <>
      <header className="bg-white shadow py-6 font-[Poppins] dark:bg-gray-800">
        <div className="container flex justify-between items-center mx-auto px-4">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <h1 className="text-[1.35rem] font-bold text-gray-900 dark:text-white">TaskFlow</h1>
          </div>
          <button onClick={()=>toggleTheme()} className="text-xl text-gray-900 hover:text-gray-500 dark:text-yellow-500 dark:hover:text-yellow-600">{ isDark ? <i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>}</button>
        </div>
      </header>
    </>
  );
}

export default Header;
