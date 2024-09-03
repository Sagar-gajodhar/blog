export function Skeleton() {
    return (
      <div className="flex justify-center items-center h-full py-6 space-x-4">
        <div role="status" className="w-4/5 animate-pulse   p-4 space-y-4">
          {/* Header Skeleton */}
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
  
          {/* Line Skeletons */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
          </div>
  
          {/* Footer Skeleton */}
          <div className="flex justify-between items-center mt-4">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4"></div>
          </div>
        </div>
        </div>
    );
  }
  