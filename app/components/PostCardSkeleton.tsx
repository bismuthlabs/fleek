export const PostCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="w-32 md:w-48  animate-pulse">
        <div className="h-32 md:h-48 w-full bg-gray-200"></div>
        <div className="mt-2 h-3 md:h-4 bg-gray-200"></div>
      </div>
      <div className="animate-pulse">
        <div className="ml-2 mt-2 md:mt-3 flex items-center">
          <div className="w-14 md:w-20 h-3 md:h-4 bg-gray-200"></div>
          <div className="ml-2 md:ml-3 w-10 h-3 md:h-4 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
