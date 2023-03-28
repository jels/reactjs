import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
            
        },
    ],
};

var misoptions={
    responsive: true,
    animation: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            min: -25,
            max: 100
        },
        x:{
            ticks:{ color: 'rgba(0, 220, 195)'}
        }
    }
};

export default function LinesChart(){
    return <Bar data={midata} options={misoptions}/>
}