import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Bar, HorizontalBar} from "react-chartjs-2";

function ChartBar(props) {
    const barData = {};
    const chartBar = {
        labels: [],
        datasets: [{
            label: props.label,
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
        if(item[props.dataType]){
            item[props.dataType] in barData
                ? barData[item[props.dataType]]++
                : barData[item[props.dataType]] = 1
        }
    });
    Object.keys(barData).forEach(country => {
        chartBar.labels.push(country)
    });
    Object.values(barData).forEach(count => {
        chartBar.datasets[0].data.push(count);
        chartBar.datasets[0].backgroundColor.push(
            '#' + Math.floor(Math.random() * 16777215).toString(16)
        );
    });

    return (
        <Paper elevation={3}>
            <div className="chart">
                {props.isHorizontal ? (<HorizontalBar data={chartBar} options={chartOptions}/>) : (<Bar data={chartBar} options={chartOptions}/>)}

            </div>
        </Paper>
    );
}

export default ChartBar;
