import { Todo } from "../../context/TasksContext";

interface TaskProps {
  task : Todo;
  deleteTask: (task: Todo) => void;
  toggleCompleted: (task: Todo) => void 
}


function TaskItem({ task, deleteTask, toggleCompleted }: TaskProps) {
  return (
    <>
      <div className="flex flex-col gap-6 mb-4 p-3 border rounded-md">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <h3 className={`font-medium text-lg text-gray-900 dark:text-white ${task.isCompleted ? "line-through" : ""}`}>{task.title}</h3>
            {task.isCompleted && (
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">Completed</span>
            )}
          </div>

          <div className="buttons flex items-center gap-6">
            <input checked={task.isCompleted} onChange={() => toggleCompleted(task)} type="checkbox" className="w-[1.1rem] h-[1.1rem] cursor-pointer" id="checkComplete" title="Task Completed" />
            
            <button className="text-lg text-green-600 hover:text-green-500" title="Edit Task">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button onClick={() => deleteTask(task)} className="text-lg text-red-600 hover:text-red-500" title="Delete Task">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

        </div>

        <div className="flex flex-col gap-4">
          <p className={`text-[.9rem] leading-[1.8] font-medium text-gray-700 dark:text-white ${task.isCompleted ? "line-through" : ""}`}>{task.description}</p>
          <span className="self-end text-[.9rem] leading-[1.8] font-medium text-gray-700 dark:text-white">{task.date}</span>
        </div>
      </div>
    </>
  );
}
export default TaskItem;
