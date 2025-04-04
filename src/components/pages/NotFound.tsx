import { Link } from "react-router";

function NotFound() {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-8 min-h-[85vh] mx-auto font-[poppins] text-gray-900 dark:text-[#E0E0E0]">
        <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg font-bold">The page you are looking for does not exist.</p>
        <Link to="/" className="flex items-center gap-3 text-base">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Go Back to Home</span>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
