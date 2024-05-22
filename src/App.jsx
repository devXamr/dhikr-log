import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrPowerReset } from "react-icons/gr";


const getTasbih = () => {
    const tas = JSON.parse(localStorage.getItem("tasbih"))
    if(!tas) return 0;
    return tas
}
function App() {
  const [tasbih, setTasbih] = useState(getTasbih)

    function updateTasbih(){
      setTasbih(currentTasbih => currentTasbih+1)
    }

    function resetTasbih(e){
      e.stopPropagation()
      setTasbih(0)
    }

    useEffect(() => {
        localStorage.setItem("tasbih", JSON.stringify(tasbih))
    }, [tasbih]);


  return (
      <>
          <div className='w-screen h-screen' onClick={updateTasbih}>



              <div className='pt-80'>
                  <GrPowerReset onClick={resetTasbih} className='ml-auto mr-auto text-4xl'/>
              </div>


              <div className='font-orbitron text-center text-7xl mt-14'>{tasbih}</div>

              {tasbih === 0 && <div className='font-sans font-light text-center pt-12'>Tap To Start</div>}

          </div>


      </>
  )
}

export default App
