import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Pie} from "react-chartjs-2";

function Gender(props) {
    const genderData = {};
    const chartGender = {
        labels: [],
        datasets: [{
            label: "Récompenses par genre",
            data: [],
            backgroundColor: []
        }]
    };
    const chartOptions = {};
    props.cleanDataArray.forEach(item => {
        if(item["gender"]){
            const gender = item["gender"];
            gender in genderData
                ? genderData[gender]++
                : genderData[gender] = 1
        }
    });
    Object.entries(genderData).forEach(entry => {
        chartGender.datasets[0].data.push(entry[1]);
        chartGender.labels.push(entry[0]);
        chartGender.datasets[0].backgroundColor.push(
            '#' + Math.floor(Math.random() * 16777215).toString(16)
        );
    });

    return (
        <Paper elevation={3}>
            <div className="chart">
                <Pie data={chartGender} options={chartOptions}/>
            </div>
        </Paper>
    );
}

export default Gender;
