import React from "react"
import { useNavigate } from "react-router-dom";

type Props = {
    icon: string;
    text: string;
    isSelected: boolean;
    path: string;
}

const SideBarButton: React.FC<Props> = ({icon, text, isSelected, path}) =>{

    const navigate = useNavigate();

    return (
        <div className=" flex flex-row pl-5 items-center w-full cursor-pointer hover:bg-block p-3 mt-5" onClick={()=>{navigate(path)}}>
            <img src={icon} className=" size-5 mr-2" alt="" />
            <h3 className={isSelected?" text-white text-center text-lg":" text-gray text-center text-lg"}>{text}</h3>
        </div>
    )
}

export default SideBarButton