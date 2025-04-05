import TaskForm from "../utils/TaskForm";
import TaskList from "../utils/TaskList";
import { User } from "../../store/Types";
import { Todo } from "../../store/Types";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import TasksSummary from "../utils/TasksSummary";
import { TasksContext } from "../../context/TasksContext"; 

interface UsersProps {
  users : User[];
  setUsers : React.Dispatch<React.SetStateAction<User[]>>;
}

function Home({users, setUsers} : UsersProps) {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState<Todo[]>([]);

  const loggedInUser = localStorage.getItem("LoggedInUser")
  
  useEffect(() => {
    const user = users?.find((user: User)=> user.id === loggedInUser)
    if(user){
      setTasks(user.tasks)
    }
  }, [users, loggedInUser]);
  
  
  useEffect(()=>{
    if(!loggedInUser){
      navigate("/signup")
    }
  },[loggedInUser, navigate])

  
  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks, users , setUsers }}>
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
