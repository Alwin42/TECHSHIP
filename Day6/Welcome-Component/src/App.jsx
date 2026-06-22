import { useState } from 'react'
import Welcome from "./components/welcome";
import Details from "./components/details"
function App() {
  

  return (
    <>
    <br></br>
  <Welcome />
  <br></br>
  <div>
    <h2>Student Details</h2>
    < Details name="Alwin" course="Computer Science" college="AISAT" />
  </div>

  </>
  )
}

export default App
