import React, {useState} from 'react';
import './App.css';
import data from './data/times-person-of-the-year.json'
import ChartBar from "./components/ChartBar";
import Ages from "./components/chartAges";
import Gender from "./components/chartGender";

function App() {
    const cleanDataArray = [];
    Object.values(data).forEach(value => {cleanDataArray.push(value["fields"])});

    const initMinYear =  cleanDataArray.reduce((min, reward) => reward.year < min ? reward.year : min, cleanDataArray[0].year);
    const initMaxYear =  cleanDataArray.reduce((max, reward) => reward.year > max ? reward.year : max, cleanDataArray[0].year);

    const [year, setYear] = useState(initMinYear);
    const [minYear, setMinYear] = useState(initMinYear);
    const [maxYear, setMaxYear] = useState(initMaxYear);
    const cleanDataArrayFiltered = cleanDataArray.filter(reward => parseInt(reward.year) >= minYear && parseInt(reward.year) <= maxYear);
    const rewardsOfYear = cleanDataArray.filter(reward => parseInt(reward.year) === parseInt(year));

  return (
      <div className="app">
          <div className="container text-center">
              <div className="row">
                  <div className="col-12 mb-4">
                      <h1>Personnes de l'année par le <strong>TIME</strong></h1>
                  </div>
                  <div className="col-12 mb-4">
                      <form>
                          <label className="mx-auto w-25">
                              Personne(s) de l'année :
                              <input value={year} min={initMinYear} max={initMaxYear} type="number" className="form-control text-center" onChange={event => setYear(event.target.value)}/>
                          </label>
                          <div>
                              {rewardsOfYear.map((reward, index) =>
                                  <div key={index}>
                                      <strong>{reward.name}</strong> - {reward.title} - {reward.honor}
                                  </div>
                              )}
                          </div>
                      </form>
                  </div>
                  <div className="col-12 mb-4">
                      <form className="d-flex justify-content-center align-items-center">
                          <label className="ml-auto mr-2 w-25">
                              Date de début :
                              <input value={minYear} min={initMinYear} max={initMaxYear} type="number" className="form-control text-center" onChange={event => setMinYear(event.target.value)}/>
                          </label>
                          <label className="mr-auto ml-2 w-25">
                              Date de fin :
                              <input value={maxYear} min={initMinYear} max={initMaxYear} type="number" className="form-control text-center" onChange={event => setMaxYear(event.target.value)}/>
                          </label>
                      </form>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par pays</h2>
                          <ChartBar cleanDataArray={cleanDataArrayFiltered} label="Récompenses par pays" dataType="country" isHorizontal={false}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par catégories</h2>
                          <ChartBar cleanDataArray={cleanDataArrayFiltered} label="Récompenses par catégories" dataType="category" isHorizontal={false}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par contextes historiques</h2>
                          <ChartBar cleanDataArray={cleanDataArrayFiltered} label="Récompenses par contextes historiques" dataType="context" isHorizontal={false}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par ages</h2>
                          <Ages cleanDataArray={cleanDataArrayFiltered}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                      <div className="Paper">
                          <h2>Nombre de récompenses par genre</h2>
                          <Gender cleanDataArray={cleanDataArrayFiltered}/>
                      </div>
                  </div>
                  <div className="col-12 col-lg-6">
                      <div className="Paper">
                          <h2>Nombre de récompenses par "honneur"</h2>
                          <ChartBar cleanDataArray={cleanDataArrayFiltered} label="Récompenses par honneur" dataType="honor" isHorizontal={false}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
