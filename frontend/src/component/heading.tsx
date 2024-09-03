interface headingProps{
    title : string
}

export function Heading({title} : headingProps)
{
    return <div className="flex items-center justify-center p-4 rounded-lg ">
        <h1 className="flex items-center justify-center text-3xl font-bold text-gray-900">
            {title}
        </h1>
    </div>
}