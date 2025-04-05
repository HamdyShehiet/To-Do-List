import NoTasks from "./NoTasks";
import TaskItem from "./TaskItem";
import { toast } from "react-toastify";
import { Todo } from "../../store/Types";
import { useContext, useState } from "react";
import DeleteModal from "../ui/modals/DeleteModal";
import { TasksContext } from "../../context/TasksContext";

function TaskList() {
  const { users, setUsers, tasks, setTasks } = useContext(TasksContext);

  const [filter, setFilter] = useState<string>("all");

  const [isConfirmDelete, setIsConfirmDelete] = useState<string>("");
  const [taskToDelete, setTaskToDelete] = useState<Todo | null>(null);
  const [tasksToDelete, setTasksToDelete] = useState<Todo[] | null>(null);

  const filterOptions = [
    { value: "all", text: "All" },
    { value: "active", text: "Active" },
    { value: "completed", text: "Completed" },
  ];

  const activeTasks = tasks?.filter((item) => !item.isCompleted);
  const completedTasks = tasks?.filter((item) => item.isCompleted);
  const loggedInUser = localStorage.getItem("LoggedInUser");

  /**
   * Filtered Tasks
   */
  let filteredTasks: Todo[] = tasks;
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

  /**
   * ConfirmDeleteTask
   */
  const confirmDelete = (action: string, task: Todo): void => {
    if (action === "confirmDeleteTask") {
      setIsConfirmDelete(action);
      setTaskToDelete(task);
    }
  };

  /**
   * Delete Task
   */
  const deleteTask = (): void => {
    if (!taskToDelete) return;

    const updatedTasks = tasks?.filter((item) => item.id !== taskToDelete.id);
    setTasks(updatedTasks);

    const updatedUsers = users?.map((user) => (user.id === loggedInUser ? { ...user, tasks: updatedTasks } : user));
    setUsers(updatedUsers);
    setIsConfirmDelete("");
    setTaskToDelete(null);
    toast.success("Task deleted successfully");
  };

  /**
   * ConfirmDeleteAllTasks
   */
  const confirmDeleteAllTasks = (action: string, filteredTasks: Todo[]): void => {
    if (action === "confirmDeleteAllTasks") {
      setIsConfirmDelete(action);
      setTasksToDelete(filteredTasks);
    }
  };

  /**
   * Delete All Filtered Tasks
   */
  const deleteAllTask = (): void => {
    if (!tasksToDelete) return;
    const updatedTasks = tasks?.filter((item) => !tasksToDelete.includes(item));
    setTasks(updatedTasks);
    const updatedUsers = users?.map((user) => (user.id === loggedInUser ? { ...user, tasks: updatedTasks } : user));
    setUsers(updatedUsers);

    toast.success("Tasks deleted successfully");
    setIsConfirmDelete("");
    setTasksToDelete(null);
  };

  /**
   * ToggleCompleted Task
   */
  const toggleCompleted = (task: Todo): void => {
    const updatedTasks = tasks.map((item) => (item.id === task.id ? { ...item, isCompleted: !item.isCompleted } : item));
    setTasks(updatedTasks);
    const updatedUsers = users?.map((user) => (user.id === loggedInUser ? { ...user, tasks: updatedTasks } : user));
    setUsers(updatedUsers);
  };

  /**
   * Edit Tasks
   */
  const editTask = (updatedTask: Todo): void => {
    const updatedTasks = tasks?.map((item) => (item.id === updatedTask.id ? updatedTask : item));
    setTasks(updatedTasks);

    const updatedUsers = users?.map((user) => (user.id === loggedInUser ? { ...user, tasks: updatedTasks } : user));
    setUsers(updatedUsers);

    toast.success("Task Edited Successfully");
  };

  return (
    <>
      <div className="bg-white dark:bg-transparent w-full p-2 rounded-lg shadow-sm font-[poppins]">
        <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-[#E0E0E0]">My Tasks</h2>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-wrap">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`py-3 px-[clamp(.5rem,_2vw,_1rem)] focus:outline-none font-medium mr-1  ${
                  filter === option.value ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-600 dark:text-[#E0E0E0] hover:text-indigo-600 dark:hover:text-indigo-600"
                }`}
              >
                <span>{option.text}</span>
              </button>
            ))}
          </div>

          {filteredTasks.length !== 0 && (
            <button
              onClick={() => confirmDeleteAllTasks("confirmDeleteAllTasks", filteredTasks)}
              className="flex items-center gap-1 py-3 text-base text-red-600 hover:text-red-500"
              title="Delete Task"
            >
              <i className="fa-solid fa-trash"></i>
              <span>Delete All {filter === "active" ? "Active Tasks" : filter === "completed" ? "Completed Tasks" : "Tasks"}</span>
            </button>
          )}
        </div>

        <hr className="pb-6 dark:border-[#444444]" />

        {isConfirmDelete && <DeleteModal deleteTask={deleteTask} deleteAllTask={deleteAllTask} setIsConfirmDelete={setIsConfirmDelete} isConfirmDelete={isConfirmDelete} />}

        <div>
          {filteredTasks.length !== 0 ? (
            filteredTasks?.map((task) => {
              return <TaskItem key={task.id} task={task} editTask={editTask} toggleCompleted={toggleCompleted} confirmDelete={confirmDelete} />;
            })
          ) : (
            <NoTasks filter={filter} />
          )}
        </div>
      </div>
    </>
  );
}

export default TaskList;
