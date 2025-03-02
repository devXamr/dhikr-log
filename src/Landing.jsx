import {useNavigate} from "react-router-dom";
import DarkModeToggleButton from "./DarkModeToggleButton.jsx";
import waves from './assets/layered-waves-haikei (1).svg'
import wavesmobile from './assets/layered-waves-haikei-mobile.svg'
import lantern from './assets/islamic-lantern-svgrepo-com.svg'
import sparkles from './assets/sparkles.svg'
import {motion} from  'motion/react'
import {MoveRight} from "lucide";
import { BsArrowRight } from "react-icons/bs";
import { GiTronArrow } from "react-icons/gi"
import { PiArrowBendRightUp } from "react-icons/pi"




export default function Landing({isDarkOn, setDark}){

    const navigate = useNavigate()
    function simpleDirect(){
        navigate('/simple')
    }

    // temporarily disabled.
    function tasbihDirect(){
        navigate('/tasbih')
    }
    return <div className={`${isDarkOn && 'dark'} font-cabinet`}>


        {/*<DarkModeToggleButton boolVal={isDarkOn} setterFunc={setDark}/> */}
        <div className='h-screen w-screen dark:bg-black relative '>


            <div className='text-center pt-72 font-semibold text-[#9F8170] text-6xl dark:text-[#9F8170]'>Ramadan Kareem
            </div>
            <button onClick={simpleDirect}
                    className='flex pt-4 pr-6 pl-6 pb-4  border-white border-4 hover:shadow-md shadow-sm text-center mt-7 w-fit mr-auto ml-auto rounded-xl bg-[#efdecd] hover:cursor-pointer duration-200 dark:bg-gray-600 dark:text-white dark:font-bold dark:border-gray-700'>

                <div className='mr-4 text-lg text-[#9F8170] font-bold'>Open Counter</div>
                <BsArrowRight className='mt-0.5 font-black text-2xl text-[#9F8170]'/>

            </button>

            <div className='text-center font-medium mt-14 text-lg'>The month of repentance ends in <span className='underline'>30</span> days</div>
            <div className='text-center text-lg'>Make your time count</div>




        </div>

        <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 100, y: 0}}
                    transition={{duration: 1, delay: 0.2, ease: "easeInOut"}} className='w-screen fixed top-0 -z-20'>
            {/* Change the svg entirely when dark mode toggles */}
            <img alt='brown waves' src={wavesmobile} className={`w-[100%] fixed`}/>

        </motion.div>
        <motion.img initial={{opacity: 0, y: -10}} animate={{opacity: 100, y: 0}}
                    transition={{duration: 1.2, delay: 1.2}} src={lantern} className='fixed z-50 top-[135px] h-[70px]'/>
        <motion.img initial={{opacity: 0, y: -10}} animate={{opacity: 100, y: 0}} src={lantern}
                    transition={{duration: 1.2, delay: 1.6}} className='fixed z-50 top-[135px] right-0 h-[70px]'/>
        <motion.img initial={{opacity: 0, y: -10}} animate={{opacity: 100, y: 0}} src={lantern}
                    transition={{duration: 1.2, delay: 1.4}} className='fixed z-50 top-[165px] right-[50%] h-[70px]'/>
        <motion.img initial={{opacity: 0, y: -10}} animate={{opacity: 100, y: 0}}
                    transition={{duration: 1.2, delay: 1.3, ease: 'easeInOut'}} src={sparkles}
                    className='fixed z-50 top-[135px] left-12'/>
        <motion.img initial={{opacity: 0, y: -10}} animate={{opacity: 100, y: 0}} transition={{duration: 1.2, delay: 1.5, ease: 'easeInOut'}} src={sparkles} className='fixed z-50 top-[138px]  right-11'/>
        <motion.img initial={{opacity: 0, y: -10}} animate={{opacity: 100, y: 0}} transition={{duration: 1.2, delay: 1.7, ease: 'easeInOut'}} src={sparkles} className='fixed z-50 top-[165px] right-[50%]'/>

    </div>
}