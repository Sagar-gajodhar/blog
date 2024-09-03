import { Link } from "react-router-dom"

interface subheadingProp{
    title : string,
    button_text : string,
    lk : string
}

export function SubHeading({title,button_text,lk} : subheadingProp)
{
    return <div className="flex items-center justify-center py-2 px-4 rounded-lg shadow-sm">
      <h3 className="flex items-center justify-center text-xl font-semibold text-gray-300">
        {title}
        <Link to={lk} className="pl-2 underline">{button_text}</Link>
      </h3>
    </div>
}