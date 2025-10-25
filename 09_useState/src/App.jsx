import React, { useState } from 'react'

const App = () => {
  let b=0;
  let c=0;

  function set1(val){
b=parseInt(val);
  }
  function set2(val){
    c=parseInt(val);
    
    
  }
  let [a, seta] = useState(0)
  let [sum, setSum] = useState(0)
  function increment(){
   seta(a+1)

  }
  function decrement(){
   if(a>0) seta(a-1)

  }
  return (
    <div>
      <h1>Count is {a}</h1>
      <input type="number" onChange={function(elem){
        console.log('hi')
        set1(elem.target.value)}} placeholder='Enter number 1'/>
      <br />
      <br />
      <input type="number" onChange={function(elem){
        console.log('hi')
        set2(elem.target.value)}} placeholder='Enter number 1'/>
        <h1>sum is  {sum}</h1>
         <br />
      <br />
      <button onClick={function(){
        setSum(b+c)
      }}>Add numbers </button>
      <br />
      <br />
      <button onClick={increment}>Increase </button>
      <br /><br />
      <button onClick={decrement}>Decrease </button>
    </div>
  )
}

export default App
