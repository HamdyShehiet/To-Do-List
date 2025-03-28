function NoTasks({filter}: {filter: string}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-lg font-medium">{filter === "completed" ? "No tasks Completed yet" : filter === "active" ? "No tasks Active yet" :  "No tasks yet" }</p>
        <p className="text-sm text-center">Add your first task to get started</p>
      </div>
    </>
  );
}

export default NoTasks;
