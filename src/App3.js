import {Bar, Chart} from "react-chartjs-2";
import {useEffect} from "react";

function App() {
    //borderColor: 'rgb(255, 99, 132)',
    const x = 3170;
    const total = 50000;
    const dataLength = 8;
    const generatorFunctionDefault = (i) => i + 1;
    const generateData = (length = 1, generatorFunction = generatorFunctionDefault) => {
        return new Array(length).fill(null).map((_, i) => generatorFunction(i))
    }

    const data = {
        labels: generateData(dataLength),
        datasets: [
            {
                type: 'bar',
                label: 'Anulado (ANU)',
                data: generateData(dataLength, (index) => total - x * index),
                backgroundColor: '#FF75A0'
            },
            {
                type: 'bar',
                label: 'Compensado (CMP)',
                data: generateData(dataLength, (index) => total - (total - x * index)),
                backgroundColor: '#3D84B8'
            },
            /*{
                type: 'bar',
                label: 'Pendiente (INC)',
                data: [2450, 2400, 2400, 2300, 2200],
                backgroundColor: '#3D84B8'
            },*/
            /*{
                type: 'bar',
                label: 'Cobrado (COB)',
                data: [2500, 2500, 2500, 2500, 2500],
                backgroundColor: '#3D84B8'
            }*/
        ]
    };
    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        },
    }

    return <div style={{width: 750, height: 400}}>
        <Bar data={data} options={options}/>
    </div>;
}

export default App;
