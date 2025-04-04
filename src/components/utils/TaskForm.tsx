import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TasksContext, Todo } from "../../context/TasksContext";

export interface FormInputs {
  title: string;
  description: string;
}

function TaskForm() {
  const { users , setUsers, tasks, setTasks  } = useContext(TasksContext);
  const [formInputs, setFormInputs] = useState<FormInputs>({
    title: "",
    description: "",
  });
  const { title, description } = formInputs;

  /**
   * Add Task
   */
  const addTask = (): void => {
    if (title.trim() !== "" && description.trim() !== "") {

      const updatedTasks: Todo[] =[...tasks, { ...formInputs, id: uuidv4(), isCompleted : false, date: new Date().toLocaleString() }]
      setTasks(updatedTasks); 

      const loggedInUser = localStorage.getItem("LoggedInUser")
      const updatedUsers = users?.map((user) => user.id === loggedInUser ? { ...user, tasks: updatedTasks } : user);
      setUsers(updatedUsers)

      toast.success("Task Added Successfully");
      setFormInputs({
        title : "", 
        description: "",
      })
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="xl:self-start bg-white dark:bg-transparent p-3 mb-6 rounded-lg shadow-sm font-[poppins]">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-[#E0E0E0]">Add New Task</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-base font-medium mb-2 text-gray-900 dark:text-[#E0E0E0]">Title</label>
            <input
              autoFocus
              onChange={(e) => {
                setFormInputs({ ...formInputs, title: e.target.value });
              }}
              value={title}
              type="text"
              name="title"
              placeholder="What needs to be done?"
              className="w-full p-2 border border-gray-300 font-medium rounded-md bg-transparent dark:text-[#E0E0E0] focus:outline-indigo-700 dark:focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-base font-medium mb-2 text-gray-900 dark:text-[#E0E0E0]">Description</label>
            <textarea
              onChange={(e) => {
                setFormInputs({ ...formInputs, description: e.target.value });
              }}
              value={description}
              name="description"
              placeholder="Add details about this task..."
              className="w-full p-2 border border-gray-300 rounded-md max-h-48 min-h-24 font-medium bg-transparent dark:text-[#E0E0E0] focus:outline-indigo-700 dark:focus:outline-none"
            />
          </div>
          
          <button onClick={() => addTask()} className={`w-full py-2 px-4 rounded-md font-medium text-base bg-indigo-600 text-white dark:bg-[#444444] dark:hover:bg-[#888888] hover:bg-indigo-700 transition duration-300 ${title.trim() === "" ? "cursor-not-allowed" : ""}`}>
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
