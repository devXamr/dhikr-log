import {useNavigate} from "react-router-dom";
import DarkModeToggleButton from "./DarkModeToggleButton.jsx";

export default function Landing({isDarkOn, setDark}){

    const navigate = useNavigate()
    function simpleDirect(){
        navigate('/simple')
    }
    function tasbihDirect(){
        navigate('/tasbih')
    }
    return <div className={`${isDarkOn && 'dark'}`}>



    <DarkModeToggleButton boolVal={isDarkOn} setterFunc={setDark}/>
    <div className='h-screen w-screen dark:bg-black'>



        <div className='text-center pt-72 font-semibold text-green-700 text-xl dark:text-green-400'>Choose Your Option</div>
        <div onClick={simpleDirect} className='pt-4 pr-6 pl-6 pb-4 hover:w-52 border-white border-4 hover:shadow-md hover:border-green-800 text-center mt-7 w-48 mr-auto ml-auto rounded-xl bg-gray-200 hover:cursor-pointer duration-200 dark:bg-gray-600 dark:text-white dark:font-bold dark:border-gray-700'>Simple Counter</div>
        <div onClick={tasbihDirect} className='pt-4 pr-8 pl-8 pb-4 hover:shadow-md text-center mt-7 w-48 mr-auto ml-auto rounded-xl bg-gray-200 hover:w-52 border-4 border-white hover:border-green-800 hover:cursor-pointer duration-200 dark:bg-gray-600 dark:text-white dark:font-bold dark:border-gray-700'>Tasbih</div>
    </div>
    </div>
}