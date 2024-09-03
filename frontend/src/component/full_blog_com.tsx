interface FullBlog {
    title: string;
    content: string;
    date: string;
    authName: string;
  }
  
  export function FullBlogCom({ title, content, date, authName }: FullBlog) {
    return (
      <div className="flex justify-center mt-9">
        <div className="grid grid-cols-12 gap-4 p-6 bg-gray-100 rounded-lg shadow-lg w-4/5">
          <div className="col-span-9">
            <div className="mb-4">
              <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
            <div className="text-xl text-gray-700 leading-relaxed">
              {content}
            </div>
          </div>
    
          <div className="col-span-3 flex flex-col  bg-white rounded-lg p-4 shadow-md ">
            <div className="mb-2 text-lg font-semibold text-gray-700">
              Author
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-full text-white bg-black">
                {authName[0].toUpperCase()}
              </div>
              <div className="text-lg font-bold text-gray-800">
                {authName}
              </div>
            </div>
            <div className="text-md text-gray-500 italic indent-20">
                About the Author. he a great person and have achived a huge success in his career he is non other than the great Sagar the great your hineas rathore you shall bow to show him respact
            </div>
          </div>
        </div>
      </div>
    );
  }
  