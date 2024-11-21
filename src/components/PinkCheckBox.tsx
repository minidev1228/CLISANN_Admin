import react from "react"

const PinkCheckBox = ({text}) =>{
    return (
        <div className="flex items-center">
            <input className=" text-white block size-5 mr-1 ml-1" type="checkbox" id={text} name={text} value={text} />
            <label for={text} className=" text-placeholder text-center">{text}</label>
        </div>
    )
}

export default PinkCheckBox