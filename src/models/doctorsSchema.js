const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true,
    enum: [
      'Anesthesiologist',
      'Cardiologist',
      'Dermatologist',
      'Endocrinologist',
      'Neurologist'
    ]
  },
  name: {
    type: String,
    required: true
  },
  hospital_name: {
    type: String,
    required: true
  },
  hospital_area: {
    type: String,
    required: true,
    enum: ['Gulshan', 'Dhanmondi', 'Mirpur', 'Savar', 'Uttara']
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
