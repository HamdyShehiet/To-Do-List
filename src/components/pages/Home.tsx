import Header from "../layouts/Header";
import TaskForm from "../utils/TaskForm";
import TaskList from "../utils/TaskList";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { TasksContext, Todo } from "../../context/TasksContext";
import TasksSummary from "../utils/TasksSummary";

function Home() {
  const [tasks, setTasks] = useState<Todo[]>(JSON.parse(localStorage.getItem("Tasks") || "[]"));

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <TasksContext.Provider value={{ tasks, setTasks }}>
        <main>
          <section className="py-8">
            <div className="container grid grid-cols-1 xl:grid-cols-[26rem,_51.5rem] justify-center xl:justify-between items-start gap-2 mx-auto px-2">
              <div>
                <TaskForm />
                <TasksSummary />
              </div>
              <TaskList />
            </div>
          </section>
        </main>
      </TasksContext.Provider>
    </>
  );
}

export default Home;
