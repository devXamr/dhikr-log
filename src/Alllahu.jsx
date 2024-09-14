import {GrPowerReset} from "react-icons/gr";
import {useState} from "react";


export default function Alllahu({dark}){
    const [allahu, setAllahu] = useState(34)

    function updateTasbih(e){
        if (allahu > 0) setAllahu(prev => prev - 1)

    }

    function resetAllahu(e){
        e.stopPropagation()
        setAllahu(34)
    }
    return <div className={`${dark && 'dark'}`}>
        <div className='w-screen h-1/3 bg-gray-100 pb-16 dark:bg-black' onClick={updateTasbih}>


            <div className='pt-12 text-center font-semibold text-xl text-green-700'>الله أكبر</div>


            <div className='flex justify-center mt-10'>
            <div className='font-orbitron text-center text-7xl dark:text-green-400'>{allahu}</div>

                {allahu === 0 &&<div className='ml-4 mr-2 mt-4'>
                    <GrPowerReset onClick={resetAllahu} className='ml-auto mr-auto text-4xl dark:text-gray-500'/>
                </div>}
            </div>
            {allahu === 34 && <div className='font-sans font-light text-center pt-11 dark:text-white'>Tap To Start</div>}



        </div>


    </div>
}