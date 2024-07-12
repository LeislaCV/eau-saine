const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
const sensorData = {
    Enero: {
        turbidity: [1.0, 2.0, 1.5, 1.8],
        conductivity: [3.0, 3.5, 3.8, 3.6],
        ph: [7.0, 7.1, 7.2, 7.0],
        gases: [0.1, 0.15, 0.12, 0.13]
    },
    Febrero: {
        turbidity: [1.1, 1.9, 1.4, 1.7],
        conductivity: [3.1, 3.4, 3.9, 3.5],
        ph: [7.2, 7.0, 7.3, 7.1],
        gases: [0.14, 0.11, 0.13, 0.12]
    },
    Marzo: {
        turbidity: [1.2, 1.8, 1.3, 1.6],
        conductivity: [3.2, 3.3, 3.7, 3.4],
        ph: [7.1, 7.2, 7.1, 7.0],
        gases: [0.13, 0.12, 0.15, 0.11]
    },
    Abril: {
        turbidity: [1.3, 1.7, 1.2, 1.5],
        conductivity: [3.3, 3.2, 3.6, 3.3],
        ph: [7.0, 7.1, 7.2, 7.1],
        gases: [0.12, 0.13, 0.14, 0.12]
    },
    Mayo: {
        turbidity: [1.4, 1.6, 1.1, 1.4],
        conductivity: [3.4, 3.1, 3.5, 3.2],
        ph: [7.1, 7.0, 7.3, 7.2],
        gases: [0.11, 0.14, 0.13, 0.15]
    },
    Junio: {
        turbidity: [1.5, 1.5, 1.0, 1.3],
        conductivity: [3.5, 3.0, 3.4, 3.1],
        ph: [7.2, 7.1, 7.0, 7.3],
        gases: [0.15, 0.13, 0.11, 0.12]
    },
    Julio: {
        turbidity: [1.6, 1.4, 1.1, 1.2],
        conductivity: [3.6, 3.3, 3.2, 3.5],
        ph: [7.1, 7.2, 7.1, 7.0],
        gases: [0.14, 0.12, 0.13, 0.11]
    },
    Agosto: {
        turbidity: [1.7, 1.3, 1.2, 1.1],
        conductivity: [3.7, 3.4, 3.1, 3.6],
        ph: [7.0, 7.1, 7.2, 7.1],
        gases: [0.13, 0.15, 0.12, 0.14]
    },
    Septiembre: {
        turbidity: [1.8, 1.2, 1.3, 1.0],
        conductivity: [3.8, 3.5, 3.0, 3.3],
        ph: [7.1, 7.0, 7.3, 7.2],
        gases: [0.12, 0.14, 0.15, 0.13]
    },
    Octubre: {
        turbidity: [1.9, 1.1, 1.4, 1.2],
        conductivity: [3.9, 3.6, 3.3, 3.2],
        ph: [7.2, 7.1, 7.0, 7.3],
        gases: [0.11, 0.13, 0.12, 0.14]
    },
    Noviembre: {
        turbidity: [2.0, 1.0, 1.5, 1.3],
        conductivity: [4.0, 3.7, 3.2, 3.5],
        ph: [7.1, 7.2, 7.1, 7.0],
        gases: [0.13, 0.12, 0.14, 0.11]
    },
    Diciembre: {
        turbidity: [2.1, 1.3, 1.0, 1.4],
        conductivity: [4.1, 3.8, 3.5, 3.6],
        ph: [7.0, 7.1, 7.2, 7.1],
        gases: [0.12, 0.15, 0.13, 0.12]
    },
};
app.get('/api/sensor-data/:month', (req, res) => {
    const { month } = req.params;
    if (sensorData[month]) {
        res.json(sensorData[month]);
    } else {
        res.status(404).json({ error: 'Datos del sensor no encontrados' });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});