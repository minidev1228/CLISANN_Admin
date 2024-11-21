import react from "react"

const LineInput = ({placeholder, type}) =>{
    return (
        <div className=" w-full p-3 rounded-md" style={{border:"1px solid #30374d"}}>
            <input className=" bg-block outline-none text-white border-none w-full" type={type} placeholder={placeholder} />
        </div>
    )
}

export default LineInput