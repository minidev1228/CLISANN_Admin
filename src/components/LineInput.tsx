import React from "react"

type Props = {
    placeholder: string,
    type: string
}

const LineInput:React.FC<Props> = ({placeholder, type}) =>{
    return (
        <div className=" w-full p-3 rounded-md" style={{border:"1px solid #30374d"}}>
            <input className=" bg-block outline-none text-white border-none w-full" type={type} placeholder={placeholder} />
        </div>
    )
}

export default LineInput