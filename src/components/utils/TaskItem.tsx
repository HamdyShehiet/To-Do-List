import { Todo } from "../../context/TasksContext";



function TaskItem({task, deleteTask} : {task: Todo; deleteTask: (task : Todo)=> void}) {
  return (
    <>
      <div className="flex flex-col gap-8 mb-4 p-3 border rounded-md">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg text-gray-900 dark:text-white">{task.title}</h3>

          <div className="buttons flex items-center gap-6">
            <input type="checkbox" className="w-[1.1rem] h-[1.1rem] cursor-pointer" id="checkComplete" title="Task Completed" />
            <button className="text-lg text-green-600 hover:text-green-500" title="Edit Task">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={()=>deleteTask(task)} className="text-lg text-red-600 hover:text-red-500" title="Delete Task">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        <p className="text-[.9rem] leading-[1.8] font-medium text-gray-700 dark:text-white">{task.description}</p>
      </div>
    </>
  );
}
export default TaskItem;
