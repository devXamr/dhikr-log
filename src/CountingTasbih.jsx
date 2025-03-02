import {useEffect, useState} from "react";
import {GrPowerReset} from "react-icons/gr";
import RowComp from "./RowComp.jsx";
import OneFullRow from "./OneFullRow.jsx";
import DarkModeToggleButton from "./DarkModeToggleButton.jsx";
import {useNavigate} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import {motion} from "motion/react";





function getDate(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const todayDate = date.getDate()


    return `${todayDate}/${month}/${year}`


}

const getTasbih = () => {
    const tas = JSON.parse(localStorage.getItem("tasbih"))
    if(!tas) return 0;
    return tas
}

const getLogs = () => {
    const logs = JSON.parse(localStorage.getItem("logs"))
    if(!logs) return []
    return logs
}
export default function CountingTasbih({isDarkOn, setDark}){
    const [tasbih, setTasbih] = useState(getTasbih)
    const [name, setName] = useState('')
    const [isSaveClicked, setIsSaveClicked] = useState(false)
    const [isLogClicked, setIsLogClicked] = useState(false)
    const [allLogs, setAllLogs] = useState(getLogs)


    function updateTasbih(){
        setTasbih(currentTasbih => currentTasbih+1)
    }

    function updateName(e){
        setName(e.target.value)


    }

    function resetTasbih(e){
        e.stopPropagation()
        setTasbih(0)
    }

    useEffect(() => {
        localStorage.setItem("tasbih", JSON.stringify(tasbih))
    }, [tasbih]);

    useEffect(() => {
        localStorage.setItem("logs", JSON.stringify(allLogs))
    }, [allLogs]);

    function changeSave(e){
        e.stopPropagation()
        setIsSaveClicked(prev => !prev)
    }

    function changeLog(e){
        e.stopPropagation()
        setIsLogClicked(prev => !prev)
    }

    const nav = useNavigate()
    function handleBackClick(){

        nav('/')

    }



    function handleLogSubmit(){

        setAllLogs(prev => [...prev, {date: getDate(), label: name, count: tasbih}])
        setName('')
        setTasbih(0)
        setIsSaveClicked(false)



    }

    function deleteLogs(e) {
        e.stopPropagation()
        setAllLogs([])
    }


    return (
        <div className={`${isDarkOn && 'dark'} dark:bg-black font-cabinet overflow-hidden`}>
            {/*<DarkModeToggleButton boolVal={isDarkOn} setterFunc={setDark}/>*/}
            <button onClick={handleBackClick} className='text-5xl fixed top-3 left-3 text-[#9F8170]'><IoMdArrowRoundBack/></button>
            <div className='w-screen h-screen z-10 dark:bg-black pt-48' onClick={updateTasbih}>



                <button className='mx-auto w-fit block        '>
                    <GrPowerReset onClick={resetTasbih} className='ml-auto mr-auto text-4xl text-[#9F8170] dark:text-gray-500'/>
                </button>


                <div className='font-orbitron text-center text-7xl text-[#9F8170] mt-14 dark:text-gray-400'>{tasbih}</div>

                {tasbih === 0 && <div className='font-sans font-light text-lg text-center pt-12 dark:text-white'>Tap To Start</div>}

                {tasbih > 0 && <button
                    className='block font-bold text-center  text-[#9F8170] bg-[#efdecd] w-max mt-11 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl border-4 border-white shadow-sm hover:cursor-pointer duration-200 hover:px-5 dark:text-white dark:bg-gray-600 dark:border-gray-700' onClick={changeSave}>Save</button>}


                <button onClick={changeLog} className='block font-bold text-center shadow-sm w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl mb-8 border-4 border-white hover:cursor-pointer duration-200 hover:px-5 dark:text-white dark:bg-gray-600 dark:border-gray-700 text-[#9F8170] bg-[#efdecd]'>Show Log</button>
                { isLogClicked &&
                    <motion.div
                        initial={{opacity: 0, y: 1000}}
                        animate={{opacity: 100, y: 0}}
                        transition={{ease: "easeInOut"}}
                        className='mr-1 font-cabinet ml-1 relative bg-white h-screen bottom-96 pt-7 rounded-t-2xl dark:bg-black'>
                        <div className='flex justify-between font-bold'>
                            <RowComp text='Date'/>
                            <RowComp text='Label'/>
                            <RowComp text='Count'/>
                        </div>

                        {allLogs.map(log => <OneFullRow date={log.date} lab={log.label} count={log.count}/>)}
                        <button onClick={changeLog}
                                className='block font-bold text-center shadow-sm w-max mt-8 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl mb-3 border-4 border-white hover:cursor-pointer duration-200 hover:px-5 dark:text-white dark:bg-gray-600 dark:border-gray-700 text-[#9F8170] bg-[#efdecd]'>Close Logs
                        </button>
                        {allLogs && <div
                            className='font-bold text-center bg-white border-4 border-red-600 text-red-600 hover:text-white duration-200 hover:cursor-pointer hover:bg-red-600 w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg'
                            onClick={deleteLogs}>Delete All</div>}

                    </motion.div>

                }
            </div>

            {isSaveClicked && <div
                className='dark:text-white dark:bg-gray-600 z-50 bg-gray-200 absolute top-80 left-16 text-center pr-7 pl-7 pb-16 pt-16 rounded-xl mr-auto ml-auto'>
                <div className='text-xl font-bold mb-3'>Save As:</div>
                <input type='text' value={name} onChange={updateName} placeholder='Enter name' className='py-2 rounded-xl px-3 dark:bg-gray-400 dark:text-white dark:font-semibold' />
                <div onClick={handleLogSubmit}
                    className='font-bold text-center bg-white text-black w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl border-4 border-white hover:border-green-800 hover:cursor-pointer duration-200 hover:px-5 dark:text-white dark:bg-black dark:border-gray-800'>Done
                </div>
                <div onClick={changeSave} className='font-bold text-center w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl hover:px-5 bg-white border-4 border-red-600 text-red-600 hover:text-white duration-200 hover:cursor-pointer hover:bg-red-600'>Cancel</div>




            </div>}


        </div>
    )

}