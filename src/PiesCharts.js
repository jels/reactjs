import React from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend);

var options ={
    responsive: true,
    maintainAspectRatio: false
};

var data={
    labels: ['Carne','Jamón','Dulces','Turrón','Vino'],
    datasets: [
        {
            label: 'Beneficios',
            data: [35, 20, 20, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 186, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 186, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function PiesCharts(){
    return <Pie data={data} options={options} />
}