import TaskForm from "../utils/TaskForm";
import TaskList from "../utils/TaskList";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import TasksSummary from "../utils/TasksSummary";
import { TasksContext, Todo } from "../../context/TasksContext";

function Home() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState<Todo[]>(JSON.parse(localStorage.getItem("Tasks") || "[]"));

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("LoggedInUser")
    if(!loggedInUser){
      navigate("/signup")
    }
  },[navigate])

  
  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks }}>
          <section className="py-8">
            <div className="container grid grid-cols-1 xl:grid-cols-[26rem,_51.5rem] justify-center xl:justify-between items-start gap-2 mx-auto px-2">
              <div>
                <TaskForm />
                <TasksSummary />
              </div>
              <TaskList />
            </div>
          </section>
      </TasksContext.Provider>
    </>
  );
}

export default Home;
