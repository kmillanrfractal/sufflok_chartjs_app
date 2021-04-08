import './App.css';
import React, { useEffect, useState } from 'react';
import * as d3 from "d3"; 
import historicalData from '../src/data/historical_data.csv'
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
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
          {
            data: weighted_mean
          }
        ]
      }
    });
  };
  console.log('data', data)
  return (
    <div className="App">
      <canvas id="chart" width="200" height="100" />
    </div>
  );
}

export default App;