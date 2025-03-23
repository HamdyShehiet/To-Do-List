function TaskItem() {
  return (
    <>
      <div className="p-3 border rounded-md">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">title</h3>
        </div>
        <p className="text-sm text-gray-600 mt-1">description</p>
      </div>
    </>
  );
}
export default TaskItem;
