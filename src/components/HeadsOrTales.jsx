import { createElement, useEffect, useState } from "react"

import 'react-toastify/dist/ReactToastify.css';

export default function HeadsOrTales () {
 



const[result, setResult] = useState('')


const[userChoice, setUserChoice] = useState(() => {
    return localStorage.getItem('userChoice') || ''
})




useEffect(() => {
 localStorage.setItem('userChoice', userChoice)
}, [userChoice])





 function throwing() {
  if(!userChoice){
    alert('pick a side!')
    return 
  }
  
  const computerChoice = Math.random()  <  0.5 ? 'heads' : 'tailes'

  if(userChoice.toLowerCase() === computerChoice){
  
     setResult(`its ${computerChoice}. u guessed!!!`)
    
}else{
    setResult(`its ${computerChoice}. u lost !!! :[`)
   
}
}


    return (
        <div className="headsOrTales">
      
        <h1
  
        >users choice: {userChoice}</h1>
        <input
        style={{width:'200px', height:'35px', fontFamily:'minecraft', fontSize:'20px', }}
        value={userChoice}
        onChange={(e) => setUserChoice(e.target.value)}
         type="text" name="" id="" />
         <button
         style={{backgroundColor:'red', width:'70px', height:'50px', fontFamily:'minecraft'}}
         onClick={throwing


          
         }
         >result</button>
          <p>{result}</p>
        <button
        style={{backgroundColor:'green', width:'70px', height:'50px', fontFamily:'minecraft'}}
        onClick={() => setUserChoice('heads')}
        >heads</button>
        <button
        style={{backgroundColor:'green', width:'70px', height:'50px', fontFamily:'minecraft'}}
        onClick={() => setUserChoice('tailes')}
        >tales</button>


     
      </div>
    )
}




// const[userChoice, setUserChoice] = useState(() => {
//     return localStorage.getItem('userChoice') || ''
// })

// useEffect(() => {
//     localStorage.setItem('userChoice', userChoice)
// }, [userChoice])



// function throwing () {
//     if(!userChoice){
//         alert('pick a side first!')
//         return
//     }

//     const computerChoice = Math.random() ? 'tales' : 'heads'

//     if(userChoice === computerChoice){
//         alert(`its ${userChoice}. u won!`)
//     }else{
//         alert(`its ${computerChoice}. u loooost!`)
//     }

// }