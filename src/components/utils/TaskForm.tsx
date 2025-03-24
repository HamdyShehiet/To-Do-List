function TaskForm() {
  return (
    <>
      <div className="xl:self-start bg-white p-3 rounded-lg shadow-sm font-[poppins]">

        <h2 className="text-xl font-semibold mb-6">Add New Task</h2>

        <form>

          <div className="mb-4">
            <label className="block text-base font-medium mb-2 text-gray-900">Title</label>
            <input type="text" name="title" placeholder="What needs to be done?" className="w-full p-2 border border-gray-300 rounded-md focus:outline-indigo-700" />
          </div>

          <div className="mb-4">
            <label className="block text-base font-medium mb-2 text-gray-900">Description (Optional)</label>
            <textarea
              name="description"
              placeholder="Add details about this task..."
              className="w-full p-2 border border-gray-300 rounded-md max-h-48 min-h-24 focus:outline-indigo-700"
            />
          </div>

        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Add Task</button>
        
        </form>

      </div>
    </>
  );
}

export default TaskForm;
