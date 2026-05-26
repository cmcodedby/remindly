import { Link } from "react-router-dom"
import { useState } from "react"
export const Login = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


const handlePasswordChange = (event) => {
    setPassword(event.target.value)
}
const handleUsernameChange = (event) => {
       setUsername(event.target.value)

    }

    return (
        <>
             <input defaultValue={"Username"} value = {usernameInput} onChange={handleUsernameChange} ></input>
             <input defaultValue={"Password"} value = {passwordInput} onChange={handlePasswordChange} ></input>



        </>
    )
}
