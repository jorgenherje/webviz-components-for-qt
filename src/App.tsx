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
  return (
    <>
      <div>
        <GroupTree id="this-is-a-test-id" data={exampleData} edge_options={edge_options} node_options={node_options}/>      
      </div>      
    </>
  )
}

export default App
