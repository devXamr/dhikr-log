import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeToggleButton({boolVal, setterFunc}){
    return <div className={`${boolVal && 'dark'} absolute right-4 top-3 border px-4 py-1.5 rounded-lg dark:text-white`} onClick={setterFunc} >
       <MdDarkMode/>

    </div>

}