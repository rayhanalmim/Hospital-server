const Doctor = require("../../../models/doctorsSchema");

const getDoc = async (req, res) => {
  const data = await Doctor.find();
  res.send(data);
};
module.exports = getDoc;