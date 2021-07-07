import {Bar, Doughnut, Pie} from "react-chartjs-2";

function App2() {
    //borderColor: 'rgb(255, 99, 132)',
    const xs = [
        {name: "Vehículos y SOAT", priceDolar: 2279.01, percent: "26.68%"},
        {name: "Riesgos Generales", priceDolar: 1908.28, percent: "22.43%"},
        {name: "Vida", priceDolar: 924.24, percent: "10.82%"},
        {name: "Salud", priceDolar: 3430.47, percent: "40.16%"},
    ]

    const data = {
        labels: xs.map(x => x.name + " " + x.percent),
        datasets: [
            {
                data: xs.map(x => x.priceDolar),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)'
                ],
            }
        ]
    };

    console.log(data)

    return <div style={{width: 450, height: 400}}>
        <Doughnut data={data}/>
    </div>;
}

export default App2;
