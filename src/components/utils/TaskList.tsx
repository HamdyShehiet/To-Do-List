import NoTasks from "./NoTasks";
import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <>
      <div className="bg-white w-full p-3 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">My Tasks</h2>
        <hr className="pt-4" />
        <div className="">
          <TaskItem />
          <NoTasks />
        </div>
      </div>
    </>
  );
}

export default TaskList;
