const express = require("express");
const { submitAdmissionInquiry } = require("../controllers/admissionController");

const router = express.Router();

router.post("/admission", submitAdmissionInquiry);

module.exports = router;