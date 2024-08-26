import {useEffect, useState} from "react";
import {GrPowerReset} from "react-icons/gr";
import RowComp from "./RowComp.jsx";
import OneFullRow from "./OneFullRow.jsx";





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
export default function CountingTasbih(){
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
        <>
            <div className='w-screen h-screen z-10' onClick={updateTasbih}>


                <div className='pt-80'>
                    <GrPowerReset onClick={resetTasbih} className='ml-auto mr-auto text-4xl'/>
                </div>


                <div className='font-orbitron text-center text-7xl mt-14'>{tasbih}</div>

                {tasbih === 0 && <div className='font-sans font-light text-center pt-12'>Tap To Start</div>}

                {tasbih > 0 && <div
                    className='font-bold text-center bg-slate-300 text-black w-max mt-11 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl ' onClick={changeSave}>Save</div>}


                <div onClick={changeLog} className='font-bold text-center bg-slate-300 text-black w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl mb-8'>{isLogClicked? 'Close' : 'Show Log'}</div>
                { isLogClicked &&
                    <div className='mr-1 ml-1'>
                        <div className='flex justify-between font-bold'>
                            <RowComp text='Date'/>
                            <RowComp text='Label'/>
                            <RowComp text='Count'/>
                        </div>

                        {allLogs.map(log => <OneFullRow date={log.date} lab={log.label} count={log.count}/>)}

                        {allLogs && <div className='font-bold text-center bg-black text-white hover:text-black hover:bg-white w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg' onClick={deleteLogs}>Delete All</div>}
                    </div>

                }
            </div>

            {isSaveClicked && <div className='z-50 bg-slate-300 absolute top-80 text-center pr-7 pl-7 pb-16 pt-16 left-20 rounded-xl'>
                <div className='text-xl font-bold mb-3'>Save As:</div>
                <input type='text' value={name} onChange={updateName} className='py-2 rounded-md' />
                <div onClick={handleLogSubmit}
                    className='font-bold text-center bg-slate-300 text-black w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl border-black border'>Done
                </div>
                <div onClick={changeSave} className='font-bold text-center bg-slate-300 text-black w-max mt-4 mr-auto ml-auto pr-3 pl-3 pt-1 pb-1 rounded-lg text-xl border-black border' >Cancel</div>




            </div>}


        </>
    )

}