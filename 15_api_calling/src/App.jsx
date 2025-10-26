import React, { useState } from 'react'
import axios  from 'axios'

const App = () => {
  const [data, setData]=useState(async() => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data)
      } catch (err) {
        console.error("Failed to parse localStorage notes:", err);
        localStorage.removeItem("notes");
        return [];
      }
    });
  const getData= async()=>{
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data)

  }
  return (
    <div>
      <button onClick={getData} > Get Data</button>
      {data.map(function(e) {
        return <h3>{e.author}</h3>
        
      })}
    </div>
  )
}

export default App
