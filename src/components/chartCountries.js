import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Bar} from "react-chartjs-2";

function Countries(props) {
    const countriesData = {};
    const chartCountries = {
        labels: [],
        datasets: [{
            label: "Nombre de récompenses par pays",
            data: [],
            backgroundColor: []
        }]
    };
    const chartOptions = {
        legend: {
            display: false
        }
    };
    props.cleanDataArray.forEach(item => {
        if(item.country){
            item.country in countriesData
                ? countriesData[item.country]++
                : countriesData[item.country] = 1
        }
    });
    Object.keys(countriesData).forEach(country => {
        chartCountries.labels.push(country)
    });
    Object.values(countriesData).forEach(count => {
        chartCountries.datasets[0].data.push(count);
        chartCountries.datasets[0].backgroundColor.push(
            '#' + Math.floor(Math.random() * 16777215).toString(16)
        );
    });

    return (
        <Paper elevation={3}>
            <div className="Chart">
                <Bar data={chartCountries} options={chartOptions}/>
            </div>
        </Paper>
    );
}

export default Countries;
