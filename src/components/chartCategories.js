import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Bar} from "react-chartjs-2";

function Categories(props) {
    const categoriesData = {};
    const chartCategories = {
        labels: [],
        datasets: [{
            label: "Nombre de récompenses par catégories",
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
        if(item.category){
            item.category in categoriesData
                ? categoriesData[item.category]++
                : categoriesData[item.category] = 1
        }
    });
    Object.keys(categoriesData).forEach(category => {
        chartCategories.labels.push(category)
    });
    Object.values(categoriesData).forEach(count => {
        chartCategories.datasets[0].data.push(count);
        chartCategories.datasets[0].backgroundColor.push(
            '#' + Math.floor(Math.random() * 16777215).toString(16)
        );
    });

    return (
        <Paper elevation={3}>
            <div className="Chart">
                <Bar data={chartCategories} options={chartOptions}/>
            </div>
        </Paper>
    );
}

export default Categories;
