import React from 'react'
import { loadEnv } from 'vite'

const App = () => {
  localStorage.clear()
  localStorage.setItem('name','lalit')
  const name=localStorage.getItem('name')
  localStorage.removeItem('name')
  // localStorage always stotres in string so to store objcts use JSON.stringify
  const user={name:'lalit',age:18}
  localStorage.setItem('user',JSON.stringify(user))
  // to retrive objevt use JSON.parse
  use=JSON.parse(localStorage.getItem('user'))


  // full example in notes app
  return (
    <div>
      
    </div>
  )
}

export default App
