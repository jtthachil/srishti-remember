import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Perhaps it has moved, or maybe you typed the wrong URL.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;