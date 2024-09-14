import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrPowerReset } from "react-icons/gr";
import CountingTasbih from "./CountingTasbih.jsx";
import Subhanallah from "./Subhanallah.jsx";
import Alhamdulillah from "./Alhamdulillah.jsx";
import Alllahu from "./Alllahu.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./Landing.jsx";
import TasbihMain from "./TasbihMain.jsx";


//const getTasbih = () => {
 //   const tas = JSON.parse(localStorage.getItem("tasbih"))
  //  if(!tas) return 0;
   // return tas

export default function App() {
    const [darkOn, setDarkOn] = useState(false)

    function darkSetter(){
        setDarkOn(prev => !prev)
    }
    return <BrowserRouter>
            <Routes>
                <Route path="/simple" element={<CountingTasbih isDarkOn={darkOn} setDark={darkSetter} />} />
                <Route path='/tasbih' element={<TasbihMain isDarkOn={darkOn} setterFunc={darkSetter}/>} />
                <Route path='/' element={<Landing setDark={darkSetter} isDarkOn={darkOn}/>} />
            </Routes>
        </BrowserRouter>

}



