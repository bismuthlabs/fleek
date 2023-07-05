const PostCardSkeleton = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-64 animate-pulse">
      <div className="animate-pulse bg-gray-200 h-32 rounded-md"></div>
      <div className="space-y-2 mt-4">
        <div className="animate-pulse bg-gray-200 h-4 w-24 rounded-md"></div>
        <div className="animate-pulse bg-gray-200 h-4 w-32 rounded-md"></div>
        <div className="animate-pulse bg-gray-200 h-4 w-20 rounded-md"></div>
      </div>
    </div>
  );
};
