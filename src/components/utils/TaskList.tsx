import { useContext } from "react";
import NoTasks from "./NoTasks";
import TaskItem from "./TaskItem";
import { TasksContext, Todo } from "../../context/TasksContext";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  const deleteTask =(task: Todo): void=>{
    console.log(task)
  }


  return (
    <>
      <div className="bg-white dark:bg-transparent w-full p-3 rounded-lg shadow-sm font-[poppins]">
        <h2 className="text-xl font-semibold mb-6 dark:text-white">My Tasks</h2>
        <hr className="pb-6" />
        <div>
          {tasks.length !== 0 ? (
            tasks?.map((task) => {
              return <TaskItem key={task.id} task={task} deleteTask={deleteTask} />;
            })
          ) : (
            <NoTasks />
          )}
        </div>
      </div>
    </>
  );
}

export default TaskList;
