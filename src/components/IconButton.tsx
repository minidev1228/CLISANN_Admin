import React from "react"

type Props = {
    type: string;
    onClickHandler: ()=>void;
};

const IconButton: React.FC<Props> = ({type, onClickHandler}) =>{
    return (
        <button className="w-8 text-white w-full h-8 rounded-md flex justify-center items-center hover:border-2 hover:border-line" onClick={onClickHandler}>
            <img src={
                type==="edit"?"https://img.icons8.com/?size=100&id=GUDC4RvoONvj&format=png&color=aeb9e1":
                type==="delete"?"https://img.icons8.com/?size=100&id=104401&format=png&color=aeb9e1":
                type==="prev"?"https://img.icons8.com/?size=100&id=15828&format=png&color=aeb9e1":
                type==="next"?"https://img.icons8.com/?size=100&id=100002&format=png&color=aeb9e1":
                "https://img.icons8.com/?size=100&id=frlIxSuEDkbi&format=png&color=aeb9e1"
            } className="size-6" alt="" />
        </button>
    )
}

export default IconButton