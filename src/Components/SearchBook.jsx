import { useState } from "react"

export default function SearchBox(){
    const [text, setText] = useState('');
    return (
        <>
             <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/>
   
        </>
    )
}