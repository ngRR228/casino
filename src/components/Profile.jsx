import { useEffect, useState } from "react"
import Money from "./Money";
import steve from "../assets/steve.png";
import alex from "../assets/alex.png";
import OpenPage from "./OpenPage";           
import firstRickowens from "../casePrizes/first-rickowens.png";
import secondRickowens from "../casePrizes/fourthRickowens.PNG";
import Dexie from "dexie";


export default function Profile() {

    const [image, setImage] = useState(() => {
        return localStorage.getItem('image')
    })



    const [name, setName] = useState(() => {

        return localStorage.getItem('name')

    })

    const [theme, setTheme] = useState(() => {
        //  document.body.style.backgroundColor = '#1a1a1a'
        return localStorage.getItem('theme') || '#1a1a1a'

    })

    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name])

    useEffect(() => {
        localStorage.setItem('image', image)

    }, [image])



    // change backgroundcolor
    document.body.classList.add('bodyBackground')




    useEffect(() => {

        localStorage.setItem('theme', theme)


    }, [theme])


    const [money, setMoney] = useState(+localStorage.getItem('money') || 0);

    useEffect(() => {
        const update = () => setMoney(+localStorage.getItem('money') || 0);

        window.addEventListener("storage", update); // Слушаем изменения
        return () => window.removeEventListener("storage", update);
    }, []);



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

    const [inventory, setInventory] = useState(() => {
        return JSON.parse(localStorage.getItem("inventory") || '[]')
    })


    useEffect(() => {
        const updatePrizes = () =>
            setInventory(JSON.parse(localStorage.getItem('inventory') || "[]"))

        window.addEventListener("storage", updatePrizes);
        return () => window.removeEventListener("storage", updatePrizes)
    }, [])













    return (
        <div className="layout-help"
            style={{ display: 'flex', padding: '30px', }}
        >
            <div className="profile-card"
                style={{
                    textAlign: 'center', display: 'flex', flexDirection: 'column',
                    width: '300px', alignItems: 'center', justifyContent: 'center',
                    padding: '20px 30px', gap: '20px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)'

                }}
            >

                <div className="profile-image">
                    <img src={image} alt="" />
                    <button
                        style={{ width: '150px', height: '30px', backgroundColor: 'orange', color: 'white', fontFamily: 'minecraft', fontSize: '14px' }}
                        className="btn-profile"
                        onClick={() => {
                            setImage(prev =>
                                (prev === steve ? alex : steve))
                        }}
                    >Change profile</button>
                </div>

                <h1>{name}</h1>
                <input
                    style={{ height: '30px', backgroundColor: 'orange', color: 'white', fontSize: '14px', fontFamily: 'minecraft' }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <div
                    style={{}}
                >Balance: {money}</div>

                <button
                    style={{ width: '150px', height: '20px', fontFamily: 'Minecraft', backgroundColor: 'gold' }}
                    onClick={() => {

                        setTheme(theme == '#1a1a1a' ? document.body.style.backgroundColor = 'rgba(105, 81, 15, 1)' : document.body.style.backgroundColor = '#1a1a1a')
                    }}
                >change Theme</button>
            </div>


{/* 
            <div className="win-layout"
                style={{ display: 'flex', gap: '40px' }}
            >
            </div> */}

            <div
                style={{ display: 'flex', gap: '20px' ,flexWrap:'wrap'}}
            >
                <h2>Prizes:</h2>
                {inventory.map((item, index) => (
                    <img
                        style={{ width: '120px', height: '80px' }}
                        src={item} key={index} />
                ))}
            </div>



        </div>






    )
} 