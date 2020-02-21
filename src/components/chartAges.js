import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Line, Scatter} from "react-chartjs-2";

function Ages(props) {
    const agesData = {};
    const chartAges = {
        labels: [],
        datasets: [{
            label: "Récompenses par ages",
            data: [],
            backgroundColor: [],
            pointRadius: 5,
            pointHoverRadius: 10,
            showLine: false
        }]
    };
    const chartOptions = {
        legend: {
            display: false
        }
    };
    props.cleanDataArray.forEach(item => {
        if(item["birth_year"] && item["year"]){
            const age = parseInt(item["year"]) - parseInt(item["birth_year"]);
            age in agesData
                ? agesData[age]++
                : agesData[age] = 1
        }
    });
    Object.entries(agesData).forEach(entry => {
        chartAges.datasets[0].data.push({
            x:entry[0], y:entry[1]
        });
        chartAges.labels.push(entry[0]);
        chartAges.datasets[0].backgroundColor.push(
            '#' + Math.floor(Math.random() * 16777215).toString(16)
        );
    });

    return (
        <Paper elevation={3}>
            <div className="Chart">
                <Line data={chartAges} options={chartOptions}/>
            </div>
        </Paper>
    );
}

export default Ages;
