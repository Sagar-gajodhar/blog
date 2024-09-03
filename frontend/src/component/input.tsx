import React from "react"

interface inputProp{
    title : string,
    placeholder : string,
    tp : string,
    onchange : (e : React.ChangeEvent<HTMLInputElement>) => void,
}

export function Input( {title , placeholder , onchange , tp} : inputProp)
{
    return( <div>
        <div>
            {title}
        </div>
        <input placeholder={placeholder} onChange={onchange} type={`${tp}`}/>
    </div>)
}