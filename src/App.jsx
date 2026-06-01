import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './components/Main'
import Support from './components/Support'
import About from './components/About'
import Profile from './components/Profile'
import Money from './components/Money'
import HeadsOrTales from './components/HeadsOrTales'
import Enchant from './components/Enchant'
import OpenPage from './components/OpenPage'
import { Routes, Route} from 'react-router-dom'
import Registration from './components/Registration.jsx'
import FirstCase from './components/FirstCase.jsx'
import SecondCase from './components/SecondCase.jsx'
import ThirdCase from './components/ThirdCase.jsx'
import FourthCase from './components/Fourthcase.jsx'
import FifthCase from './components/FifthCase.jsx'

// CREATE AND CONNECT ALL CASE COMPONENTS TO MAIN 

function App() {

  return (
    <>

    <Header />

    <main>

      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/OpenPage' element={<OpenPage/>} />
        <Route path='/enchant' element={<Enchant/>} />
        <Route path='/headsOrTales' element={<HeadsOrTales/>} />
        <Route path='/money' element={<Money/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/support' element={<Support/>} />
        <Route path='/about' element={<About />} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/1' element={<FirstCase />} /> 
        <Route path='/2' element={<SecondCase/>} />
        <Route path='/3' element = {<ThirdCase />} />
        <Route path='/4' element = {<FourthCase />} />
        <Route path='/5' element = {<FifthCase />} />
      </Routes>
          
    </main>
    

    <Footer />

    </>
  )
}

export default App
