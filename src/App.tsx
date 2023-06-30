import Button from "./components/Button"
import Button2 from "./components/Button2"

import { useState } from "react"

export default function App() {
  const [contador, setContador] = useState(0)
  return (
    <>
      {/* Eventos
      Identificar que en el componente Button2 se pasa una función a las props */}
      <Button text="dame click perro" />
      <Button2 text="dame click 2" handleClick={()=>alert('yay')}/>

      {/* Estado */}
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </>
  )
}


