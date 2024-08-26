import {useNavigate} from "react-router-dom";

export default function Landing(){

    const navigate = useNavigate()
    function simpleDirect(){
        navigate('/simple')
    }
    function tasbihDirect(){
        navigate('/tasbih')
    }
    return <div className='h-screen w-screen'>
        <div className='text-center mt-72 font-semibold text-green-700 text-xl'>Choose Your Option</div>
        <div onClick={simpleDirect} className='pt-4 pr-6 pl-6 pb-4 hover:shadow-md text-center mt-7 w-48 mr-auto ml-auto rounded-xl bg-gray-200'>Simple Counter</div>
        <div onClick={tasbihDirect} className='pt-4 pr-8 pl-8 pb-4 hover:shadow-md text-center mt-7 w-48 mr-auto ml-auto rounded-xl bg-gray-200'>Tasbih</div>
    </div>
}