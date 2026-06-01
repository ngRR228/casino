import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import OpenPage from "./OpenPage"




export default function ChestCard ({id , title, price}) {
const navigate = useNavigate()
const[priceV, setPriceV] = useState('')


const chests = [{id: 1, name: 'Wooden', price:10}, {id:2, name:"Stone", price: 100}, {id:3, name:"Cooper", price:1000}, {id:4, name:"Golden", price:10000}, {id:5, name:"Diamond", price: 100000}]






const chest = chests.map((chest) => {
    //   console.log(chest.id);    
    //   console.log(chest.name);
                   // !!!!
    // <OpenPage id={chest.id} title = {chest.name} price = {chest.price} /> // PASS IT TO OPEN PAGE AND CHANGE THE CASE SKIN
   
  
    
    
})




const chestSkins = ['src/assets/chest.png', 'src/assets/goldenChest.PNG']

function changeChestSkin () {
 
if(id === 1){
    return 'src/assets/chest.png'
}
if(id === 2){
    return 'src/assets/cheststone.PNG'
}
if(id === 3){
    return 'src/assets/cooperchest.PNG'
}
if(id === 4){
    return 'src/assets/chestgold.PNG'
}
if(id === 5){
    return 'src/assets/chestdiamond.PNG'
}
}

// find the way to render each case separetly 

    return (
           
            <div className="chest-card"
            style={{display:'flex', flexDirection:'column', width: '260px'}}>
                <p>{price}</p>
                <p
                style={{fontSize: '30px',fontFamily: '/src/fonts/minecraft.ttf'}}
                >{title}</p>  
                <p>{id}</p>
 <img src={changeChestSkin()}/>
       
                     
                   
                
 


            
               


<button

onClick={() => {
    // navigate('/OpenPage') it was
    // const chest = chests.map((chest) => {
     
    // })

    if(id === 1){
        navigate(`/${id}`, {
            state:{
            title: 'meow'
            }
        })
    }
    if(id === 2){
              navigate(`/${id}`)
    }
        if(id === 3){
                  navigate(`/${id}`)
    }
        if(id === 4){
                          navigate(`/${id}`)
    }
        if(id === 5){
                                  navigate(`/${id}`)
    }
}   
    // setPriceV(balance - priceV)      !!!
    // show balance in the header


    

     
}
 style={{backgroundColor: '#65330dff', color: 'white', fontSize: '20px', textAlign:"center", textDecoration:"none", fontFamily: 'minecraft'}}

>open</button>
{/* 
                <NavLink to='/OpenPage'
                 style={{backgroundColor: '#65330dff', color: 'white', fontSize: '20px', textAlign:"center", textDecoration:"none", fontFamily: 'minecraft'}}
                
                >open</NavLink> */}
            </div>
    )
}
