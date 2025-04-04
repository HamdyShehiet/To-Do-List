import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

function TasksSummary() {
  const { tasks } = useContext(TasksContext);

  return (
      <div className={"rounded-lg shadow p-6 bg-transparent"}>
        <h2 className=" mb-4 text-xl font-semibold text-gray-900 dark:text-[#E0E0E0]">Tasks Summary</h2>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 xl:grid-cols-1 gap-4">
          <div className="flex items-center justify-between bg-gray-50 dark:bg-[#444444] p-4 rounded">
            <span className="text-gray-600 text-base font-medium dark:text-[#E0E0E0]">Total</span>
            <span className="font-medium text-xl dark:text-[#E0E0E0]">{tasks.length || 0}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 dark:bg-[#444444] p-4 rounded">
            <span className="text-gray-600 text-base font-medium dark:text-[#E0E0E0]">Completed</span>
            <span className="font-medium text-xl text-emerald-600">{tasks?.filter((item) => item.isCompleted).length || 0}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 dark:bg-[#444444] p-4 rounded">
            <span className="text-gray-600 text-base font-medium dark:text-[#E0E0E0]">Active</span>
            <span className="font-medium text-xl text-indigo-600">{tasks?.filter((item) => !item.isCompleted).length || 0}</span>
          </div>
        </div>
      </div>
  );
}

export default TasksSummary;
