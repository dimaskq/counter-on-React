import { useState } from 'react'
import './style.css'


function App() {
  const [count, setCount] = useState(0)

  function countMinus(){
    setCount(count - 1)
  }
  function countPlus(){
    setCount(count + 1)
  }

  return (

    <div className='counter'>
      <div className='counter__conteiner'>
        <h2 className='counter__title'>Counter:</h2>
        <p className='counter__value'>{count}</p>
        <div className='counter__btns'>
          <button className='counter__button minus' onClick={countMinus}>-</button>
          <button className='counter__button plus' onClick={countPlus}>+</button>
        </div>
      </div>
    </div>

  )
}

export default App
