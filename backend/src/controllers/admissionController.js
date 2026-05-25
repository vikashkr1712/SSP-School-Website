const Admission = require("../models/Admission");

const submitAdmissionInquiry = async (req, res) => {
  try {
    const { studentName, parentName, classInterested, phone, email, message } = req.body;

    if (!studentName || !parentName || !classInterested || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const admission = await Admission.create({
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      classInterested: classInterested.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Admission inquiry submitted successfully",
      data: admission,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit admission inquiry",
      error: error.message,
    });
  }
};

module.exports = {
  submitAdmissionInquiry,
};