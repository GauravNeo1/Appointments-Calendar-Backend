const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database/db');
const appointmentRoutes = require('./routes/appointments');

const app = express();
app.use(cors());
app.use(bodyParser.json());

sequelize.sync();

app.use('/appointments', appointmentRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
