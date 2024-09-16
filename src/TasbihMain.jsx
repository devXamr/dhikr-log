import Subhanallah from "./Subhanallah.jsx";
import Alhamdulillah from "./Alhamdulillah.jsx";
import Alllahu from "./Alllahu.jsx";
import DarkModeToggleButton from "./DarkModeToggleButton.jsx";

export default function TasbihMain({isDarkOn, setterFunc}){
    return <div className={`h-screen w-screen ${isDarkOn && 'dark'} dark:bg-black`}>
        <DarkModeToggleButton boolVal={isDarkOn} setterFunc={setterFunc}/>
        <Subhanallah dark={isDarkOn}/>
        <Alhamdulillah dark={isDarkOn}/>
        <Alllahu dark={isDarkOn}/>
    </div>
}