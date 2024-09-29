const { Op } = require('sequelize'); 
const Appointment = require('../models/appointment');

const getAllAppointments = async (req, res) => {
  try {
    const { upcoming } = req.query;
    let filter = {};
    if (upcoming === 'true') {
      filter = {
        start: {
          [Op.gt]: new Date(),
        },
      };
    }

    const appointments = await Appointment.findAll({
      where: filter,
      order: [['start', 'ASC']], 
    });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching appointments' });
  }
};



const createAppointment = async (req, res) => {
  const { title, start, end } = req.body;
  try {
    const appointment = await Appointment.create({ title, start, end });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the appointment' });
  }
};


const updateAppointment = async (req, res) => {
  const { title, start, end } = req.body;
  try {
    console.log(title,start,end)
    await Appointment.update({ title, start, end }, { where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the appointment' });
  }
};


const deleteAppointment = async (req, res) => {
  try {
    await Appointment.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the appointment' });
  }
};

module.exports = {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
