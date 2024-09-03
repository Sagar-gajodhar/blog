export function DashBarSkeleton() {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md animate-pulse">
            <div className="flex items-center space-x-6">
                <div className="h-8 bg-gray-200 rounded w-24"></div>
                <div className="relative w-64">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded-lg w-20"></div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
        </div>
    );
}
