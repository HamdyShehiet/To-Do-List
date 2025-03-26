import NoTasks from "./NoTasks";
import TaskItem from "./TaskItem";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { TasksContext, Todo } from "../../context/TasksContext";

function TaskList() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [filter, setFilter] = useState<string>("all");
  const filterOptions = [
    { value: "all", text: "All" },
    { value: "active", text: "Active" },
    { value: "completed", text: "Completed" },
  ];

  /**
   * Delete Task
   */
  const deleteTask = (task: Todo): void => {
    const updatedTasks = tasks?.filter((item) => item.id !== task.id);
    setTasks(updatedTasks);
  };

  /**
   * ToggleCompleted Task
   */
  const toggleCompleted = (task: Todo): void => {
    const updatedTasks = tasks.map((item) => (item.id === task.id ? { ...item, isCompleted: !item.isCompleted } : item));
    setTasks(updatedTasks);
  };

  /**
   * Edit Tasks
   */
  const editTask = (updatedTask: Todo): void => {
    const updatedTasks = tasks?.map((item) => (item.id === updatedTask.id ? updatedTask : item));
    setTasks(updatedTasks);
    toast.success("Task Edited Successfully");
  };

  const activeTasks = tasks?.filter((item) => !item.isCompleted);
  const completedTasks = tasks?.filter((item) => item.isCompleted);

  let filteredTasks = tasks;

  switch (filter) {
    case "active":
      filteredTasks = activeTasks;
      break;
    case "completed":
      filteredTasks = completedTasks;
      break;
    default:
      filteredTasks = tasks;
  }

  return (
    <>
      <div className="bg-white dark:bg-transparent w-full p-3 rounded-lg shadow-sm font-[poppins]">
        <h2 className="text-xl font-semibold mb-6 dark:text-white">My Tasks</h2>
        <div className="flex flex-wrap">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`py-3 px-4 focus:outline-none font-medium mr-4 ${filter === option.value ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
            >
              <span>{option.text}</span>
            </button>
          ))}
        </div>
        <hr className="pb-6" />
        <div>
          {tasks.length !== 0 ? (
            filteredTasks?.map((task) => {
              return <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />;
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
