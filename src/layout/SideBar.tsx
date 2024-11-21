import react from "react"
import { useLocation } from 'react-router-dom'

import SideBarButton from "../components/SideBarButton"

const SideBar = () =>{
    const location = useLocation();
    return (
        <div className="h-full w-52 bg-sidebar pt-10" style={{borderRight:"1px solid #0b1739"}}>
            <div className=" flex justify-center items-center flex-row mb-10">
                <img src="https://img.icons8.com/?size=100&id=115213&format=png&color=9fb2d5" className=" size-10 mr-3" alt="" />
                <h1 className=" text-placeholder text-2xl font-logo">Clisann</h1>
            </div>
            <SideBarButton icon={`https://img.icons8.com/?size=100&id=KSOtMbt2xoRc&format=png&color=${location.pathname==="/dashboard"?"ffffff":"3a4360"}`} text={"Dashboard"} isSelected={location.pathname==="/dashboard"} path={"/dashboard"} />
            <SideBarButton icon={`https://img.icons8.com/?size=100&id=DAj7JCrBGM9S&format=png&color=${location.pathname==="/invoices"?"ffffff":"3a4360"}`} text={"Invoices"} isSelected={location.pathname==="/invoices"} path={"/invoices"} />
            <SideBarButton icon={`https://img.icons8.com/?size=100&id=89619&format=png&color=${location.pathname==="/products"?"ffffff":"3a4360"}`} text={"Products"} isSelected={location.pathname==="/products"} path={"/products"} />
            <SideBarButton icon={`https://img.icons8.com/?size=100&id=9499&format=png&color=${location.pathname==="/engagements"?"ffffff":"3a4360"}`} text={"Engagements"} isSelected={location.pathname==="/engagements"} path={"/engagements"} />
            <SideBarButton icon={`https://img.icons8.com/?size=100&id=102261&format=png&color=${location.pathname==="/system_users"?"ffffff":"3a4360"}`} text={"System Users"} isSelected={location.pathname==="/system_users"} path={"/system_users"} />
            <SideBarButton icon={`https://img.icons8.com/?size=100&id=9918&format=png&color=${location.pathname==="/website"?"ffffff":"3a4360"}`} text={"Website"} isSelected={location.pathname==="/website"} path={"/website"} />
        </div>
    )
}

export default SideBar