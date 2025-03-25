import { useState } from "react"

export default function Counter(){
    const[count, setCount] = useState(0);

    const handleAdd = () =>{
        // console.log("Add button Clicked.");
        // setCount(59)
        const newCount = count + 1;
        setCount(newCount);

    }

const counterStyle = {
    border: '3px solid yellow'
}
return(
    <div style={counterStyle}>
        <h3>Count: {count}</h3>
        <button onClick={handleAdd}>Add: </button>
    </div>
)
}
