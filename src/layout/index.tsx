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
        </div> : <div className=" w-full relative bg-main h-screen flex flex-row">
            <SideBar />
            <div>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout