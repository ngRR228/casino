import { createElement, useEffect, useState } from "react"
import '../styles/Money.css';



export default function Money () {

const[money, setMoney] = useState(() => {
    return  Number(localStorage.getItem('money')) || 0 // also can be +localStorage.getItem('money') || 0
})

const[multiplier, setMultiplier] = useState(() => {
    return Number(localStorage.getItem('multiplier')) || 1
})
const[error, setError] = useState(false)



useEffect(() => {
localStorage.setItem('money', money)

}, [money])

useEffect(() => {
localStorage.setItem('multiplier', multiplier)
}, [multiplier])

const elementWhenPoor = createElement('p', {className:'elementWhenPoor'}, 'you are poor!')

    
    return(
      <div className="money-card"
      >{error && elementWhenPoor}
        <h1

        >Balance: {money}</h1>
      
        <button
        onClick={()=>{
        setMoney(money + multiplier)
        }}
        style={{fontFamily:'Minecraft', width:'100px', height:'40px', backgroundColor:'gold'}}
        >EARN</button>
        <button
        onClick={() => {
            setMoney(0)
            
        }}
                style={{fontFamily:'Minecraft', width:'60px', height:'20px', backgroundColor:'red', }}
        >CLEAR</button>
        <div className="upgrade-card-1">
        <p>Upgrade to get +2</p>
        <button
        
        onClick={() => {

          if(money >= 10){
            setMoney(prevMoney => prevMoney - 10)
            setMultiplier(prevMultiplier => prevMultiplier + 1)
            setError(false)
          }else{
            setError(true)
            
            
            
          }
        
        }}
          style={{fontFamily:'Minecraft', width:'70px', height:'20px', backgroundColor:'green', }}
        >UPGRADE</button>
    </div>





<div className="upgrade-card2">
    <p>Upgrade to get +3</p>
    <button
    onClick={() => {
        if(money >=30){
            setMoney(prevMoney => prevMoney - 30);
            setMultiplier(prevMultiplier => prevMultiplier +1)

            setError(false)
        }else
        setError(true)
    }}
    style={{fontFamily:'Minecraft', width:'70px', height:'20px', backgroundColor:'green', }}
    >UPGRADE</button>
</div>

      </div>

    )
}