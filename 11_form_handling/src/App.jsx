import React from 'react'

const App = () => {
  function submitHandler(e){
    // to prevent default submissin
    console.log('submitted')
    e.preventDefault()

  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)

      }} >
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
