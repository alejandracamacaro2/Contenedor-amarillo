import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Plastico from './componentes/Plastico'
import Chart from './componentes/Chart'
import chart from './assets/chart.png'
import Child from './componentes/Child'
import child from './assets/child.png'
import plastico from './assets/plastico.png'
import Btn from './componentes/Btn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Plastico imagen={plastico} />
        <Chart imagen={chart} />
        <Btn />
        <Child imagen={child} />
      </div>
        
    </>
  )
}

export default App
