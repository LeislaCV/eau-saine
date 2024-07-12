
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './App.css';
import { AuthButton } from '@bundly/ic-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Desoname = () => {
  const [month, setMonth] = useState('January');
  const [sensorData, setSensorData] = useState(null);
  const chartRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/sensor-data/${month}`);
        setSensorData(response.data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };


    fetchData();
  }, [month]);


  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };


  return (
    <div className="container">
      <h1>Mostrar Datos de Sensores</h1>
      <label htmlFor="month">Seleccionar Mes:</label>
      <select id="month" value={month} onChange={handleMonthChange}>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>

        { }
      </select >

      

      <input type="week"></input>

      <center>
        <AuthButton>
        </AuthButton>
      </center>



      {sensorData && (
        <div>
          <div className="sensor-data">
            <h2>Datos de los sensores para: {month}</h2>
            <p><strong>Turbidez:</strong> {sensorData.turbidity.join(', ')}</p>
            <p><strong>Conductividad:</strong> {sensorData.conductivity.join(', ')}</p>
            <p><strong>Ph:</strong> {sensorData.ph.join(', ')}</p>
            <p><strong>Gases:</strong> {sensorData.gases.join(', ')}</p>
          </div>


          <div className="chart-container">
            <Line
              data={{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                  {
                    label: 'Turbidez',
                    data: sensorData.turbidity,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  },
                  {
                    label: 'Conductividad',
                    data: sensorData.conductivity,
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                  },
                  {
                    label: 'Ph',
                    data: sensorData.ph,
                    fill: false,
                    borderColor: 'rgb(255, 206, 86)',
                    tension: 0.1
                  },
                  {
                    label: 'Gases',
                    data: sensorData.gases,
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                  }
                ]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Sensor Data'
                  }
                }
              }}
              ref={chartRef}
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default Desoname;

