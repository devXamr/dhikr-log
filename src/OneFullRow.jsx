import RowComp from "./RowComp.jsx";

export default function OneFullRow({date, lab, count}) {
    return <div className='flex justify-between flex-wrap w-full'>
        <RowComp text={date}/>
        <RowComp text={lab}/>
        <RowComp text={count}/>
    </div>
}