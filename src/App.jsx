import { useState } from "react";

function App() {
  const [tytul, settytul] = useState()
  const [kategoria, setkategoria] = useState()

  function wpisz(e) {
    e.preventDevault()
    console.log("Formularz wysłany")
    console.log("tytul: " + setkategoria + "rodzaj: " + settytul)
  }

  return (
    <div>
      <h1>Formularz filmów</h1>

  <form onSubmit={(e) => wpisz(e)}>
        <label>Nazwa filmu: </label>
        <input type="text" value={tytul}/><br />
        
        <label>Kategoria: </label>
        <select value={kategoria}>
          <option value="">wybierz kategorię</option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select><br />

        <input type="sumbit" value="Dodaj"/>

    </form>
    </div>
  );
}

export default App;
