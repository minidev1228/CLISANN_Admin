import react from "react"

import Layout from "../layout/index.tsx"
import LineInput from "../components/LineInput"
import BlueButton from "../components/BlueButton"

const LoginPage = () =>{
    return (
        <Layout>
            <div className=" w-full h-screen flex justify-center items-center">
                <div className=" h-96 w-96 bg-block rounded-lg flex items-center flex-col" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <h1 className=" text-white text-2xl mt-8">LogIn</h1>
                    <div className=" w-10/12 mt-16">
                        <LineInput placeholder={"Your Name"} type={"text"}/>
                    </div>
                    <div className=" w-10/12 mt-10">
                        <LineInput placeholder={"Your Password"} type={"password"}/>
                    </div>
                    <div className=" w-10/12 mt-10">
                        <BlueButton text="Log In" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage