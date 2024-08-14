import React , { useState , useEffect } from 'react'

function ReactHook1() {
    const[Count , setCount] = useState(0);  
    
      // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${Count} times`;
    });
    
   return (
    <div>
      <div>
      <p>You clicked {Count} times</p>
      <button onClick={() => setCount(Count + 1)}>
        Click me
      </button>
        &nbsp;
      <button onClick={() => setCount(Count - 1)}>
        Click me
      </button>
    </div>

    </div>
  )
}

export default ReactHook1
