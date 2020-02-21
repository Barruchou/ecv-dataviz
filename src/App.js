import React from 'react';
import './App.css';
import data from './data/times-person-of-the-year.json'
import ChartBar from "./components/ChartBar";
import Ages from "./components/chartAges";

function App() {
    const cleanDataArray = [];
    Object.values(data).forEach(value => {cleanDataArray.push(value["fields"])});
    console.log(cleanDataArray);

  return (
    <div className="App">
        <h1>Personnes de l'année par le Time</h1>
        <div className="Paper">
            <h2>Nombre de récompenses par pays</h2>
            <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par pays" dataType="country" isHorizontal={false}/>
        </div>
        <div className="Paper">
            <h2>Nombre de récompenses par catégories</h2>
            <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par catégories" dataType="category" isHorizontal={false}/>
        </div>
        <div className="Paper">
            <h2>Nombre de récompenses par contextes historiques</h2>
            <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par contextes historiques" dataType="context" isHorizontal={false}/>
        </div>
        <div className="Paper">
            <h2>Nombre de récompenses par ages</h2>
            <Ages cleanDataArray={cleanDataArray}/>
        </div>
    </div>
  );
}

export default App;
