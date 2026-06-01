import { useEffect, useState } from 'react'
import '../styles/MainStyle.css'
import ChestCard from './ChestCard'
import OpenPage from './OpenPage'
import { useNavigate } from 'react-router'


export default function Main() {

    const navigate = useNavigate()
  

const chests = [{id: 1, name: 'Wooden', price:10}, {id:2, name:"Stone", price: 100}, {id:3, name:"Cooper", price:1000}, {id:4, name:"Golden", price:10000}, {id:5, name:"Diamond", price: 100000}]



  

const chest = chests.map((chest) => (
    
    <ChestCard id={chest.id} title = {chest.name} price={chest.price} key={chest.id}/> // should convey the key key={chest.id}
      
))

    const [money, setMoney] = useState(+localStorage.getItem('money') || 0);

    useEffect(() => {
        const update = () => setMoney(+localStorage.getItem('money') || 0);

        window.addEventListener("storage", update); // Слушаем изменения
        return () => window.removeEventListener("storage", update);
    }, []);



           

       







    return (
        <>
        <div className="main"
        style={{}}
        >
                 <div className="balance"
                 style={{color:'red', fontSize:'40px'}}
                 >Balance:{money}</div>
            
            

            <h1 style={{fontSize:'50px', fontWeight:'600'}}
            >Play Online Mellstroy Casino <br />
                & Win Money <br />
                Unlimited
            </h1>
            <p
            style={{color:'gray', fontSize:'25px'}}
            >Play for fun and start your gambling journey with us!</p>

            <div className="buttons"
            style={{gap: '20px', display:'flex',}}>
            
            <button 
            style={{width: '110px', height: '30px', backgroundColor:'light-gray', borderRadius: '10px', border:'none', cursor:'pointer',  fontFamily: 'Minecraft',fontSize:'15px'}}
            >Play now</button>
            <button
            onClick={ () => {
                navigate('/registration')
            }}
            style={{width: '110px', height: '30px',  backgroundColor:'lightgray', borderRadius: '10px', border:'none', cursor:'pointer',  fontFamily: 'Minecraft', fontSize:'15px'}}
            >Sign in</button>
            </div>

            <img src="/Users/ila/Desktop/CaseBattleHighFashion/HighFashion/src/assets/mell.png" alt="" />

            <div className="chests"
            style={{display:'flex', flexDirection:'row', gap: '50px'}}>

                   

        

            

                   {chest}
        





            </div>

        </div>
            </>
    )
}