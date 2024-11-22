import { ReactNode } from "react"
import { useLocation } from 'react-router-dom'

import SideBar from "./SideBar";

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({children}) =>{

    const location = useLocation();

    return(
        location.pathname === "/" ?
        <div className=" w-full relative bg-main h-screen">
            <main>{children}</main>
        </div> : <div className=" w-full relative bg-main pb-5 flex flex-row">
            <SideBar />
            <div className="w-10/12">
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout