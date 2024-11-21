import React from "react"

type Props = {
    count: number,
    title: string,
    icon: string,
    color: string
}

const Card: React.FC<Props> = ({count, title, icon, color})=>{
    return (
        <div className=" w-80 h-24 relative mr-5 mb-5 pl-2" style={{backgroundColor: color}}>
            <div className=" text-white flex flex-col p-2">
                <h1 className="text-4xl font-bold mb-3">{count}</h1>
                <p>{title}</p>
            </div>
            <img src={icon} className="absolute bottom-2 right-2 size-16" alt="" />
        </div>
    )
}

export default Card