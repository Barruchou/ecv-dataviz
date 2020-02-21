import React from 'react';
import './App.css';
import data from './data/times-person-of-the-year.json'
import Countries from "./components/chartCountries";
import Categories from "./components/chartCategories";

function App() {
    const cleanDataArray = [];
    Object.values(data).forEach(value => {cleanDataArray.push(value["fields"])});
    console.log(cleanDataArray);

  return (
    <div className="App">
        <h1>Personnes de l'année par le Time</h1>
        <div className="Paper">
            <h2>Nombre de récompenses par pays</h2>
            <Countries cleanDataArray={cleanDataArray}/>
        </div>
        <div className="Paper">
            <h2>Nombre de récompenses par catégories</h2>
            <Categories cleanDataArray={cleanDataArray}/>
        </div>
    </div>
  );
}

export default App;
