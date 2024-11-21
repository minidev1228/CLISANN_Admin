// import react from "react"

import Layout from "../layout/index"
import Card from "../components/Card"

const DashBoardPage = () =>{
    return (
        <Layout>
            <div className="pt-32 pl-20 flex flex-wrap w-full">
                    <Card count={1650} title={"Sales Amount"} icon={"https://img.icons8.com/?size=100&id=8302&format=png&color=008d4d"} color={"#00a65a"} />
                    <Card count={11} title={"Total Invoices"} icon={"https://img.icons8.com/?size=100&id=7996&format=png&color=524e8f"} color={"#605ca8"} />
                    <Card count={7} title={"Pending Bills"} icon={"https://img.icons8.com/?size=100&id=13879&format=png&color=cf850f"} color={"#f39c12"} />
                    <Card count={1669} title={"Due Amount"} icon={"https://img.icons8.com/?size=100&id=8122&format=png&color=bc4031"} color={"#dd4b39"} />
                    <Card count={1650} title={"Total products"} icon={"https://img.icons8.com/?size=100&id=7ekmAMJnQrlJ&format=png&color=2b689c"} color={"#337ab7"} />
                    <Card count={1} title={"Total Engagements"} icon={"https://img.icons8.com/?size=100&id=11220&format=png&color=b81752"} color={"#d81b60"} />
                    <Card count={4} title={"Paid Bills"} icon={"https://img.icons8.com/?size=100&id=E7Z1VLsR0vad&format=png&color=34825f"} color={"#3d9970"} />
            </div>
        </Layout>
    )
}

export default DashBoardPage