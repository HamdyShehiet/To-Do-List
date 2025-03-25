import NoTasks from "./NoTasks";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import { toast } from "react-toastify";
import { TasksContext, Todo } from "../../context/TasksContext";

function TaskList() {
  const { tasks, setTasks } = useContext(TasksContext);

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

  return (
    <>
      <div className="bg-white dark:bg-transparent w-full p-3 rounded-lg shadow-sm font-[poppins]">
        <h2 className="text-xl font-semibold mb-6 dark:text-white">My Tasks</h2>
        <hr className="pb-6" />
        <div>
          {tasks.length !== 0 ? (
            tasks?.map((task) => {
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
