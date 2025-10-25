import React from 'react'
import { useState } from 'react'

const App = () => {
  function submitHandler(e){
    // to prevent default submissin
    console.log('submitted')
    e.preventDefault()

  }
  const [name , setName]=useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)

      }} >
        <input type="text" placeholder='Enter Your Name' value={name}onChange={(e)=>{setName(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
