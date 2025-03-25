import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TasksContext, Todo } from "../../context/TasksContext";

interface FormInputs {
  title: string;
  description: string;
}


function TaskForm() {
  const { tasks, setTasks } = useContext(TasksContext);
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
      const newTask: Todo = { ...formInputs, id: uuidv4(), isCompleted : false, date: new Date().toLocaleString() }
      setTasks([...tasks, newTask]);
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
      <div className="xl:self-start bg-white dark:bg-transparent p-3 rounded-lg shadow-sm font-[poppins]">
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h2 className="text-xl font-semibold mb-6 dark:text-white">Add New Task</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-base font-medium mb-2 text-gray-900 dark:text-white">Title</label>
            <input
              onChange={(e) => {
                setFormInputs({ ...formInputs, title: e.target.value });
              }}
              value={title}
              type="text"
              name="title"
              placeholder="What needs to be done?"
              className="w-full p-2 border border-gray-300 font-medium rounded-md focus:outline-indigo-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium mb-2 text-gray-900 dark:text-white">Description</label>
            <textarea
              onChange={(e) => {
                setFormInputs({ ...formInputs, description: e.target.value });
              }}
              value={description}
              name="description"
              placeholder="Add details about this task..."
              className="w-full p-2 border border-gray-300 rounded-md max-h-48 min-h-24 font-medium focus:outline-indigo-700"
            />
          </div>
          <button onClick={() => addTask()} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
