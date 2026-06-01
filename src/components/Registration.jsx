import { useState } from "react"


export default function Registration () {

const[username, setUsername] = useState("")
const[password, setPassword] = useState("")

const handleClick = async () => {
    await fetch('/api/registration', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
}
  


 


    return (
        <div className="registration-card">

        <h1>registration</h1>

        <input type="text" placeholder="username" id="" 
        onChange={(e) => setUsername(e.target.value)}
        />
        
            <br /> <br /> <br />    

        <input type="password" placeholder="password" id="" 
        onChange={(e) => setPassword(e.target.value)}
        />

            <button
            onClick={handleClick}
  
            >send</button>
        </div>
    )
}