import { useState } from 'react'
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0)

  return (
    <>
    
          <div className="card">
              <h1>Count:</h1>
              <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
       
      </div>
      
    </>
  )
}
export default Counter