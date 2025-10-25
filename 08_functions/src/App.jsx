import React from 'react'

const App = () => {
  function btnClick(){
    console.log("button clciked")
  }
  function inputText(val){
    console.log(val)

  }
  return (
    <div className='parent'>
      {/* <h1>Hellllo</h1> */}
      {/* <button onClick={btnClick}>click me</button> */}
      {/* <br></br> */}
    {/* <input onChange={function(elem){inputText(elem.target.value)}} type="text" placeholder='Enter Name' /> */}
    <div className="page1"></div>
    <div className="page2"></div>

    </div>
  )
}

export default App
