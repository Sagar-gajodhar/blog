

interface postCompInput{
    forTitle : (e: React.ChangeEvent<HTMLInputElement>)=> void,
    forContent : (e: React.ChangeEvent<HTMLTextAreaElement>)=> void,
    forButton: (e: React.MouseEvent<HTMLButtonElement>)=> void
}

export function PostComp({forTitle,forContent,forButton} : postCompInput) {


    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={(e) => e.preventDefault()} className="w-4/5 h-4/5 p-8 bg-white shadow-lg rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Create a New Blog Post</h2>
                
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={forTitle}
                    />
                    
                    <textarea
                        placeholder="Content"
                        rows={12}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={forContent}
                    />

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={forButton}>
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
