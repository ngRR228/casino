import { NavLink } from "react-router"
import '../styles/Header.css'
import Profile from "../components/Profile"

export default function Header () {


    return(
       <header className="header">

        <nav>
            <ul>
                 {/* <img src="src/assets/skull.png"
                    style={{width:'150px', height:'150px'}}
                     alt="" /> */}
                <li>
                      <NavLink to = '/'>main</NavLink>
                </li>
            
                <li>
                      <NavLink to = '/support'>support</NavLink>
                </li>
                <li>
                      <NavLink to = '/about'>about us</NavLink>
                </li>
                <li>
                      <NavLink to = '/profile'>profile</NavLink>
                </li>
                <li>
                    <NavLink to = '/money'>money</NavLink>

                </li>
                <li>
                    <NavLink to='/HeadsOrTales'>HeadsOrTales</NavLink>
                </li>
                <li>
                    <NavLink to='/enchant'>Enchant</NavLink>
                </li>
                <li>
                    <NavLink to='/registration'>registration</NavLink>
                </li>
                <li >
                   
 <img src="src/assets/rickowens.png" alt=""
        style={{width:'20px', }}
        />
                </li>
            </ul>
    
        </nav>

            </header> 
    )
}