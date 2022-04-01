import { useState, useEffect } from 'react';
import ChartComp from './components/ChartComp'
import MatDataTable from './components/MatDataTable';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const rawData = [
  {id: 1,  day: 1,  type: 1, airline: 'Southwest',  passengers: 162, parkedHours: 24},
  {id: 2,  day: 1,  type: 1, airline: 'Southwest',  passengers: 208, parkedHours: 8},
  {id: 3,  day: 2,  type: 1, airline: 'Southwest',  passengers: 176, parkedHours: 16},
  {id: 4,  day: 2,  type: 1, airline: 'Southwest',  passengers: 204, parkedHours: 24},
  {id: 5,  day: 3,  type: 1, airline: 'Southwest',  passengers: 158, parkedHours: 58},
  {id: 6,  day: 4,  type: 1, airline: 'Southwest',  passengers: 202, parkedHours: 22},
  {id: 7,  day: 0,  type: 1, airline: 'Southwest',  passengers: 218, parkedHours: 38},
  {id: 8,  day: 4,  type: 1, airline: 'Southwest',  passengers: 136, parkedHours: 6},
  {id: 9,  day: 3,  type: 1, airline: 'Southwest',  passengers: 124, parkedHours: 24},
  {id: 10,  day: 3, type: 1, airline: 'Southwest',  passengers: 158, parkedHours: 2},
  {id: 11,  day: 1, type: 1, airline: 'American',  passengers: 162, parkedHours: 24},
  {id: 12,  day: 1, type: 1, airline: 'American',  passengers: 208, parkedHours: 8},
  {id: 13,  day: 2, type: 1, airline: 'American',  passengers: 176, parkedHours: 16},
  {id: 14,  day: 2, type: 1, airline: 'American',  passengers: 204, parkedHours: 24},
  {id: 15,  day: 3, type: 1, airline: 'American',  passengers: 158, parkedHours: 58},
  {id: 16,  day: 4, type: 1, airline: 'American',  passengers: 202, parkedHours: 22},
  {id: 17,  day: 0, type: 1, airline: 'American',  passengers: 218, parkedHours: 38},
  {id: 18,  day: 4, type: 1, airline: 'American',  passengers: 136, parkedHours: 6},
  {id: 19,  day: 3, type: 1, airline: 'American',  passengers: 124, parkedHours: 24},
  {id: 20,  day: 3, type: 1, airline: 'American',  passengers: 158, parkedHours: 2},
  {id: 21,  day: 1, type: 1, airline: 'Allegiant',  passengers: 162, parkedHours: 24},
  {id: 22,  day: 1, type: 1, airline: 'Allegiant',  passengers: 208, parkedHours: 8},
  {id: 23,  day: 2, type: 1, airline: 'Allegiant',  passengers: 176, parkedHours: 16},
  {id: 24,  day: 2, type: 1, airline: 'Allegiant',  passengers: 204, parkedHours: 24},
  {id: 25,  day: 3, type: 1, airline: 'Allegiant',  passengers: 158, parkedHours: 58},
  {id: 26,  day: 4, type: 1, airline: 'Allegiant',  passengers: 202, parkedHours: 22},
  {id: 27,  day: 0, type: 1, airline: 'Allegiant',  passengers: 218, parkedHours: 38},
  {id: 28,  day: 4, type: 1, airline: 'Allegiant',  passengers: 136, parkedHours: 6},
  {id: 29,  day: 3, type: 1, airline: 'Allegiant',  passengers: 124, parkedHours: 24},
  {id: 30,  day: 3, type: 1, airline: 'Allegiant',  passengers: 158, parkedHours: 2},
  {id: 31,  day: 1, type: 2, airline: 'Capital One',  passengers: 12, parkedHours: 4},
  {id: 32,  day: 1, type: 2, airline: 'Bank of America',  passengers: 28, parkedHours: 8},
  {id: 33,  day: 2, type: 2, airline: 'Charles Schwab',  passengers: 16, parkedHours: 6},
  {id: 34,  day: 2, type: 2, airline: 'Iron Maiden Corp',  passengers: 24, parkedHours: 24},
  {id: 35,  day: 3, type: 2, airline: 'Scorpions Corp',  passengers: 18, parkedHours: 8},
  {id: 36,  day: 4, type: 2, airline: 'Fed Ex',  passengers: 22, parkedHours: 2},
  {id: 37,  day: 0, type: 2, airline: 'Amazon',  passengers: 8, parkedHours: 8},
  {id: 38,  day: 4, type: 2, airline: 'M Hotel',  passengers: 16, parkedHours: 6},
  {id: 39,  day: 3, type: 2, airline: 'Wells Corp',  passengers: 4, parkedHours: 24},
  {id: 40,  day: 3, type: 2, airline: 'Smith Corp', passengers: 18, parkedHours: 2},
  {id: 41,  day: 3, type: 2, airline: 'Walton Corp', passengers: 8, parkedHours: 5},
];

export default function App() {    
  const [ chartData, setChartData ] = useState([])  
  const [ tableData, setTableData ] = useState([])  
  

  useEffect(() => {
  
      const day = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri']
      var chartData = []
      for(let i=0; i <= 5; i++) {
        const cfCnt = rawData.filter(c => c.day === i && c.type === 1).length
        const gaCnt = rawData.filter(c => c.day === i && c.type === 2).length
        chartData.push({label: day[i], commercialCount: cfCnt, generalCount: gaCnt})
      }
      setChartData(chartData)
      
  }, []);

  const onHandleBarClickEvent = (barIndex, stackIndex) => {        
    if(stackIndex === 0) {
      setTableData(rawData.filter(c => c.day === barIndex && c.type === 1))
    }
    else {
      setTableData(rawData.filter(c => c.day === barIndex && c.type === 2))
    }
  }

  return (
    <div className="App">      
      <Box sx={{ flexGrow: 1, marginTop: 12 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={6} md={6}>
            
              <ChartComp  data={chartData}                           
                          onHandleBarClickEvent={onHandleBarClickEvent}/>
            
          </Grid>
          <Grid item xs={6} md={4}>            
            <MatDataTable data={tableData}/>            
          </Grid>
        </Grid>
      </Box>            
    </div>
  );
}

