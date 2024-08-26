import {GrPowerReset} from "react-icons/gr";
import {useState} from "react";


export default function Alllahu(){
    const [allahu, setAllahu] = useState(34)

    function updateTasbih(e){
        if (allahu > 0) setAllahu(prev => prev - 1)

    }

    function resetAllahu(e){
        e.stopPropagation()
        setAllahu(34)
    }
    return <>
        <div className='w-screen h-1/3 bg-gray-100 pb-16' onClick={updateTasbih}>


            <div className='pt-12 text-center font-semibold text-xl text-green-700'>الله أكبر</div>


            <div className='flex justify-center mt-10'>
            <div className='font-orbitron text-center text-7xl'>{allahu}</div>

                {allahu === 0 &&<div className='ml-4 mr-2 mt-4'>
                    <GrPowerReset onClick={resetAllahu} className='ml-auto mr-auto text-4xl'/>
                </div>}
            </div>
            {allahu === 34 && <div className='font-sans font-light text-center pt-11}'>Tap To Start</div>}



        </div>


    </>
}