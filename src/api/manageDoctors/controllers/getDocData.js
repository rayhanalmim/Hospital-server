const Doctor = require("../../../models/doctorsSchema");

const getDoc = async (req, res) => {
          let query = {};
      
          if (req.query.hospital_area) {
            query.hospital_area = { $regex: new RegExp(req.query.hospital_area, "i") };
          }
      
          if (req.query.designation) {
            query.designation = { $regex: new RegExp(req.query.designation, "i") };
          }
      
          if (req.query.hospital_name) {
            query.hospital_name = { $regex: new RegExp(req.query.hospital_name, "i") };
          }
      
          if(!req.query.hospital_area && !req.query.designation && !req.query.hospital_name){
            const doctors = await Doctor.find();
           return res.send(doctors);
          }
          const doctors = await Doctor.find(query).sort({ name: 1 });
      
          res.json(doctors);
};
module.exports = getDoc;