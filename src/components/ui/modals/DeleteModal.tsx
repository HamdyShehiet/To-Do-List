
interface DeleteModalProps {
  isConfirmDelete: string;
  setIsConfirmDelete: (arg: string) => void;
  deleteTask: () => void;
  deleteAllTask: () => void;
}

function DeleteModal({isConfirmDelete, setIsConfirmDelete ,deleteTask, deleteAllTask} : DeleteModalProps) {

    /**
   * Cancel Delete
   */
    const cancelDelete = (): void => {
      setIsConfirmDelete("");
    };


  return (
    <>
      <div>
        <div id="modal">
          <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
              <div className="my-6 text-center">
                <div className="text-5xl text-red-600">
                  <i className="fa-solid fa-trash"></i>
                </div>
                <p className="text-slate-900 text-base font-medium mt-4">Are you sure you want to delete { isConfirmDelete === "confirmDeleteAllTasks" ?  "all tasks" : "task"}?</p>
                <div className="text-center space-x-4 mt-10">
                  <button onClick={()=>cancelDelete()} type="button" className="px-5 py-2.5 rounded-lg text-slate-900 text-sm font-medium bg-gray-200 hover:bg-gray-300 active:bg-gray-200">
                    No, Cancel
                  </button>
                  <button onClick={()=>isConfirmDelete === "confirmDeleteAllTasks" ? deleteAllTask()  : deleteTask()} type="button" className="px-5 py-2.5 rounded-lg text-white text-sm font-medium bg-red-600 hover:bg-red-700 active:bg-red-600">
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
