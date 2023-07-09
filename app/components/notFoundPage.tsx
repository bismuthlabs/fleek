import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <div className="space-x-4">
        <Link
          href="/"
          className="btn-primary btn-effects hover:scale-110 active:scale-90"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="btn-secondary btn-effects hover:scale-110 active:scale-90"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
