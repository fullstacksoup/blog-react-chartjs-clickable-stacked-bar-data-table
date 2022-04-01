import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {  
  Bar,  
  getElementAtEvent,  
} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartCompBak(props) {
  const chartRef = useRef();

  const options = {
    plugins: {
      title: {
        display: true,
        text: '- Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels= props.data.map(c => c.label);

  const data = {
    labels,
    datasets: [
      {
        label: 'Commercial Flights',
        data: props.data.map(c => c.commercialCount),
        backgroundColor: '#58508d',
      },
      {
        label: 'General Aviation',
        data: props.data.map(c => c.generalCount),
        backgroundColor: '#ff6361',
      },
    ],
    tooltips: {
  
    },
  };

  const onClick = (event) => {
    const elem = getElementAtEvent(chartRef.current, event)
    props.onHandleBarClickEvent(elem[0].index, elem[0].datasetIndex)    
  }

  return <Bar options={options} data={data} onClick={onClick}  ref={chartRef}/>;
}
