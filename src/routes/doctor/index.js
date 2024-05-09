const express = require("express");
const { getDoc } = require("../../api/manageDoctors/controllers");
const router = express.Router();

router.get('/getDocData', getDoc);

module.exports = router;