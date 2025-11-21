import { useState } from 'react'
import './App.css'

function App() {
  const [nazwa, setnazwa] = useState("")
  const [rodzaj, setrodzaj] = useState("")

  return (
    <>
      <form>
        <label htmlFor="nazwa">Tytuł filmu</label><br />

        <input type="text" id="nazwa" name="nazwa" /><br />


<label for="cars">Choose a car:</label><br />

<select name="cars" id="cars">
  <option value=""></option>
  <option value="1">Komedia</option>
  <option value="2">Obyczajowy</option>
  <option value="3">Sensacyjny</option>
  <option value="4">Horror</option>
</select><br /><br />

        <input type="submit" value="Dodaj" />
      </form>
    </>
  )
}

export default App
