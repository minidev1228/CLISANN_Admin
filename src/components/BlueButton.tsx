import React from "react"

type Props = {
    text: string;
    onClickHandler: ()=>void;
};

const BlueButton: React.FC<Props> = ({text, onClickHandler}) =>{
    return (
        <button className="w-full bg-blue text-white w-full h-10 rounded-md" onClick={onClickHandler}>
            {text}
        </button>
    )
}

export default BlueButton