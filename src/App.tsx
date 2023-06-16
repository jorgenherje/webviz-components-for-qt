import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {GroupTree} from '@webviz/subsurface-components';

import exampleData from "../Test Data/group-tree.json";

const edge_options = [
  { name: "waterrate", label: "Water Rate", unit: "m3/s" },
  { name: "oilrate", label: "Oil Rate", unit: "m3/s" },
  { name: "gasrate", label: "Gas Rate", unit: "m3/s" },
  { name: "waterinjrate", label: "Water Injection Rate", unit: "m3/s" },
  { name: "gasinjrate", label: "Gas Injection Rate", unit: "m3/s" },
];

const node_options = [
  { name: "pressure", label: "Pressure", unit: "Bar" },
  { name: "bhp", label: "Bottom Hole Pressure", unit: "N/m2" },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div>
        <GroupTree id="this-is-a-test-id" data={exampleData} edge_options={edge_options} node_options={node_options}/>      
      </div>      
    </>
  )
}

export default App
