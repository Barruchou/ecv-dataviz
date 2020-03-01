import React from 'react';
import './App.css';
import data from './data/times-person-of-the-year.json'
import ChartBar from "./components/ChartBar";
import Ages from "./components/chartAges";
import Gender from "./components/chartGender";

function App() {
    const cleanDataArray = [];
    Object.values(data).forEach(value => {cleanDataArray.push(value["fields"])});
    console.log(cleanDataArray);

  return (
      <div className="app">
          <div className="container text-center">
              <div className="row">
                  <div className="col-12 mb-5">
                      <h1>Personnes de l'année par le Time</h1>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par pays</h2>
                          <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par pays" dataType="country" isHorizontal={false}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par catégories</h2>
                          <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par catégories" dataType="category" isHorizontal={false}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par contextes historiques</h2>
                          <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par contextes historiques" dataType="context" isHorizontal={false}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par ages</h2>
                          <Ages cleanDataArray={cleanDataArray}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par genre</h2>
                          <Gender cleanDataArray={cleanDataArray}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6">
                      <div className="Paper">
                          <h2>Nombre de récompenses par "honneur"</h2>
                          <ChartBar cleanDataArray={cleanDataArray} label="Récompenses par honneur" dataType="honor" isHorizontal={false}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
