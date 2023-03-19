import React, { useState, useEffect } from "react"

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [add, setAdd] = useState()
  const [sub, setSub] = useState()
  const [mul, setMul] = useState()
  const [div, setDiv] = useState()

  const handleNum1Change = (e) => {
    setNum1(e.target.value)
  }
  const handleNum2Change = (e) => {
    setNum2(e.target.value)
  }
  const addHandler = () => {
    setAdd(Number(num1)+Number(num2))
  }
  const subHandler = () => {
    setSub(Number(num1)-Number(num2))
  }
  const mulHandler = () => {
    setMul(Number(num1)*Number(num2))
  }
  const divHandler = () => {
    setDiv(Number(num1)/Number(num2))
  }

  return (
    <div align="center">
      <h2>GCU Calculator</h2>
      <input type="text" value={num1} onChange={handleNum1Change}/>
      <input type="text" value={num2} onChange={handleNum2Change}></input>

      <p>
        <button onClick={addHandler} > Add </button> {add} <span>&nbsp;</span>
        <button onClick={subHandler} > Sub </button> {sub} <span>&nbsp;</span>
        <button onClick={mulHandler} > Mul </button> {mul} <span>&nbsp;</span>
        <button onClick={divHandler} > Div </button> {div} 
      </p>
    </div>
  );
}

export default App;
