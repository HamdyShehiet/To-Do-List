function TasksSummary() {
  return (
    <>
      <div className={"bg-white rounded-lg shadow p-6"}>
        <h2 className=" mb-4 text-xl font-semibold text-gray-900 dark:text-white">Tasks Summary</h2>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 xl:grid-cols-1 gap-4">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
            <span className="text-gray-600 text-base font-medium">Total</span>
            <span className="font-medium text-xl">0</span>
          </div>
          <div className="flex items-center justify-between bg-green-50 p-4 rounded">
            <span className="text-gray-600 text-base font-medium">Completed</span>
            <span className="font-medium text-xl text-emerald-600">0</span>
          </div>
          <div className="flex items-center justify-between bg-indigo-50 p-4 rounded">
            <span className="text-gray-600 text-base font-medium">Active</span>
            <span className="font-medium text-xl text-indigo-600">0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksSummary;
