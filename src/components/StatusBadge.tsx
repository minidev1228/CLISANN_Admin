import React from "react"

type Props = {
    status: string;
};


const StatusBadge: React.FC<Props> = ({status}) =>{
    return (
        <div style={status==="Paid"?{border:"2px solid #094a47", backgroundColor:"#0a3943", color:"#14ca74"}:{border:"2px solid #5d4827", backgroundColor:"#3b322a", color:"#fdb52a"}} className=" flex justify-center items-center h-8 rounded-sm">
            <span>{status}</span>
        </div>
    )
}

export default StatusBadge