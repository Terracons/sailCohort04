import { useState } from "react"




const Business = ()=>{
    const [myNum, setState] = useState(0)

    const decrease = ()=>{
        setState(myNum -1)
    }
    return(
        <div>
            <button onClick={decrease}>substract</button>
            <h1>{myNum}</h1>
            <button>Add</button>

        </div>

    )
  }
  export default Business