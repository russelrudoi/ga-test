import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactGA from "react-ga4";
import './App.css'

const MEASURE_ID = 'G-7J40D78V39';

ReactGA.initialize([
    {
        trackingId: MEASURE_ID
    }
])

function App() {
  const [count, setCount] = useState(0)

const handleClick = () => {
    setCount((count) => count + 1)

    ReactGA.event({
        category: 'button_click',
        action: `add count`,
        label: `${count}`,
    })
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
         my count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
