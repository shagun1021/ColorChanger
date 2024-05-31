import React, { useEffect, useState } from 'react'

const App = () => {

  const [count,setCount]=useState(0);
  const [clr,setclr]=useState("white");
  // const div=document.getElementById('box');

  useEffect(()=>{
    switch(count){
      case 0: setclr("white");
      break;
      case 1: setclr("red");
      break;
      case 2: setclr("blue");
      break;
      case 3: setclr("pink");
      break;
      case 4: setclr("green");
      break;
      case 5: setclr("yellow");
      break;
    }

  },[count])

  const counterPlus=()=>{
    
    (count>=0 && count<5 ? setCount(count+1) : alert("STOP"));
  }
  const counterMinus=()=>{
    
    (count>0 && count<=5 ? setCount(count-1) : alert("STOP"));
  }
  return (
    <div   className='w-screen h-screen  bg-black flex gap-20 items-center place-content-center'>
      
      <div className='text-white text-2xl'>

        <ol >
          <li> 1 - RED</li>
          <li> 2 - BLUE</li>
          <li> 3 - PINK</li>
          <li> 4 - GREEN</li>
          <li> 5 - YELLOW</li>
        </ol>

      </div>
      
      <div style={{backgroundColor:clr}} id='box' className='w-1/4 h-1/2  text-9xl items-center place-content-center flex bg-white '>

        <span> {count} </span>

      </div>

      <button className=' border-2 border-white  hover:bg-yellow-600 text-white p-6 rounded-full text-4xl' onClick={counterPlus} >

        TAP➕

      </button>

      <button className=' border-2 border-white  hover:bg-yellow-600 text-white p-6 rounded-full text-4xl' onClick={counterMinus} >

        TAP➖

      </button>
    </div>
  )
}

export default App;
