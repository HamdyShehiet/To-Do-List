function Header() {
  return (
    <>
      <header className="bg-white shadow py-6 font-[Poppins]">
        <div className="container flex justify-between items-center mx-auto px-2">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <h1 className="text-[1.35rem] font-bold text-gray-900">TaskFlow</h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
