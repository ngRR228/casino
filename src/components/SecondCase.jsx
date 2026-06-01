import firstRickowens from "../casePrizes/first-rickowens.png";
import secondRickowens from "../casePrizes/fourthRickowens.PNG";
import {  useEffect, useState } from "react"
import '/src/styles/OpenPage.css'
import Dexie from 'dexie'
import Main from './Main'
import ChestCard from './ChestCard'
import Support from "./Support";


export default function SecondCasd ({id , title , price, state}) {

  
    
  const chest = {id: 2, name: 'Stone', price:100}





    // const chest =  chests.map((chest) => {
       
   
        
   
     
    // })
       console.log(chest.id);
       
  




    const [money, setMoney] = useState(+localStorage.getItem('money') || 0);

    useEffect(() => {
        localStorage.setItem('money', money)
        const update = () => setMoney(+localStorage.getItem('money') || 0);

        window.addEventListener("storage", update); // Слушаем изменения
        return () => window.removeEventListener("storage", update);
    }, [money]);






const[prize, setPrize ] = useState(() => {
  return localStorage.getItem('prize') || ''
})

useEffect(() => {
  localStorage.setItem('prize', prize)
}, [prize])

    
    const[isSpinning, setSpinning] = useState(false)
    const[offset, setOffset] = useState(0)

    const[result, setResult] = useState('') 

// const[inventory, setInventory] = useState((['sword']))

const[inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem('inventory')

    return saved ? JSON.parse(saved) : []
})


useEffect(() => {
localStorage.setItem('inventory', JSON.stringify(inventory))
}, [inventory])



    const firstPrize =  firstRickowens
    const secondPrize = secondRickowens

    const imagePrizes = [
        firstPrize, secondPrize, firstPrize, firstPrize,
        firstPrize, firstPrize, secondPrize, firstPrize,
        firstPrize, secondPrize, firstPrize, firstPrize,
        secondPrize, firstPrize, firstPrize, firstPrize,
        firstPrize, firstPrize, secondPrize, firstPrize
    ]


const fullImagePrizes = [...imagePrizes, ...imagePrizes, ...imagePrizes]

// const savedItem = db.image.add({ file: 'src/casePrizes/firstPrize.png' })
// console.log(savedItem);





const addItem = (winRes) => {
    setInventory(prev => [...prev, winRes])
}

// save inventory to localstorage






    return (
       
      
        


            <div className="chest-card"


                
            
            
            style={{display:'flex', flexDirection:'column', width: '900px',textAlign:"center", marginLeft:'280px'}}>
                <p>{state}</p>
                <p>{chest.id}</p>
                <p>name:{chest.name}</p>
                <p>{price}</p>
                  <p
                  style={{color:'red', fontSize:'30px'}}
                  >balance:{money}</p>
                <p
                style={{fontSize: '30px',fontFamily: '/src/fonts/minecraft.ttf'}}
                >{}</p>  
                <p>{}</p>
                <img src="src/assets/cheststone.PNG" alt="" />
              


    

<button
onClick={() => {


    if(money >= 100){
    setMoney(prevMoney  => prevMoney - 100)

    
    const random = Math.floor(Math.random() * imagePrizes.length)
    const finalOffset = -(random * 110) + 385 //was -150
   setResult(imagePrizes[random])

    console.log(result)

    setOffset(finalOffset)
 const winRes = fullImagePrizes[random]
 setResult(winRes)
    setTimeout(() => {
       
      
        addItem(winRes)
    }, 3000);

    } else{
       
        alert('not enough money')
        setOffset(0)
        setResult()
    }

        setSpinning(true)

                                                                                                    //     if(money >= 100){
                                                                                                    //     setMoney(prevMoney  => prevMoney - 100)
                                                                                                    //     } else{
                                                                                                    //         alert('not enough money')
                                                                                                    //     }



                                                                                                    //         setSpinning(true)

                                                                                                            

                                                                                                        
                                                                                                    //     const random = Math.floor(Math.random() * imagePrizes.length)
                                                                                                    //     const finalOffset = -(random * 110) + 385 //was -150
                                                                                                    // setResult(imagePrizes[random])

                                                                                                    //     console.log(result)

                                                                                                    //     setOffset(finalOffset)
                                                                                                    // const winRes = fullImagePrizes[random]
                                                                                                    // setResult(winRes)
                                                                                                    //     setTimeout(() => {
                                                                                                        
                                                                                                        
                                                                                                    //         addItem(winRes)
                                                                                                    //     }, 3000);




                                                                                                    // console.log(inventory);



}}
 style={{backgroundColor: '#65330dff', color: 'white', fontSize: '20px', textAlign:"center", textDecoration:"none", fontFamily: 'minecraft'}}
           
>open</button>


<div className="roulette-window">
    <div className='prize-line' style={{transform: `translateX(${offset}px)`}}
    >{fullImagePrizes.map((image,index) => (
        <img 
        style={{width:'100px', height:'100px'}}
        key={index} src={image} />

   
    ))}



    </div>

</div>



</div>




    )
}
