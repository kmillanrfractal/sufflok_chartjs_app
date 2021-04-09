import './App.css';
import React, { useEffect, useState } from 'react';
import * as d3 from "d3"; 
import historicalData from '../src/data/historical_data.csv'
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
Chart.defaults.font.size = 20




function App() {
  useEffect(()=>{
    d3.csv(historicalData).then(makeChart);
  }, [])
  const [data, setData] = useState(undefined)
  function makeChart(unit) {
    setData([...unit])
    const weighted_mean = unit.map(function(d) {return d[' weighted_mean']});
    const year = unit.map(function(d) {return d.year});
    const chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: year,
        datasets: [

          { label: ["Sqrft Per Year", "pepe"],
            data: weighted_mean,
            borderColor : "#fff",
            borderWidth : "3",
            hoverBorderColor : "#000",
            backgroundColor: [
              "#f38b4a",
              "#56d798",
              "#ff8397",
              "#6970d5",
              "#acb1ff",
              "#fffe12",
              "#ff0012",
              "#ff00f4",
              "#1806fb "
            ],
            hoverBackgroundColor: [
              "#b1b2b5"
            ],

          }
        ]
      },
      options: {
        plugins: {
          responsive: true,
          legend: {display: true, position: "top", align:"end", fullSize: true, textDirection:'ltr', labels:{textAlign: 'left',padding: 10}}, title:{display: true, text: 'wleiufhoawef'},
          title: {
            display: true,
            text: "BarChart Square Feet by Region",
            padding: {
              top: 10,
              bottom: 20
            }
          }
        },
        scales: {
          x: {
            title: {
              color: 'black',
              display: true,
              text: "Year"
            }
          },
          y:{
            title: {
              color: 'black',
              display: true,
              text: "Sqrft"
            }
          },
        }
      }
    });
  };
  return (
  <body>
    <div className="App">
          <h1>Suffolk Charts</h1>
          <hr></hr>
          <div class="chart-container">
            <canvas id="chart" width="100px" height="50px" />
          </div>
    </div>
  </body>

  );
}

export default App;