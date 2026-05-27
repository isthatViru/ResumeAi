const pdfParse = require("pdf-parse");

const {
  generateInterviewReport,
  generateResumePdf,
} = require("../services/ai.services");

const interviewReportModel = require("../models/interviewReport");

/**
 * Generate Interview Report
 */
async function generateInterviewReportController(req, res) {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "Resume PDF is required",
      });
    }

    const pdfData = await pdfParse(req.file.buffer);

    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
      resume: pdfData.text,
      selfDescription,
      jobDescription,
    });

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: pdfData.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAi,
    });

    res.status(201).json({
      message: "Interview report generated successfully",
      interviewReport,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to generate interview report",
      error: error.message,
    });
  }
}

/**
 * Get Interview Report By ID
 */
async function getInterviewReportByIdController(req, res) {
  try {

    const { interviewId } = req.params;

    const interviewReport = await interviewReportModel.findOne({
      _id: interviewId,
      user: req.user.id,
    });

    if (!interviewReport) {
      return res.status(404).json({
        message: "Interview report not found",
      });
    }

    res.status(200).json({
      message: "Interview report fetched successfully",
      interviewReport,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch interview report",
    });
  }
}

/**
 * Get All Interview Reports
 */
async function getAllInterviewReportsController(req, res) {
  try {

    const interviewReports = await interviewReportModel
      .find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .select(
        "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan"
      );

    res.status(200).json({
      message: "Interview reports fetched successfully",
      interviewReports,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch reports",
    });
  }
}

/**
 * Generate Resume PDF
 */
async function generateResumePdfController(req, res) {
  try {

    const { interviewReportId } = req.params;

    const interviewReport = await interviewReportModel.findById(interviewReportId);

    if (!interviewReport) {
      return res.status(404).json({
        message: "Interview report not found",
      });
    }

    const {
      resume,
      selfDescription,
      jobDescription,
    } = interviewReport;

    const pdfBuffer = await generateResumePdf({
      resume,
      selfDescription,
      jobDescription,
    });

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition":
        `attachment; filename=resume_${interviewReportId}.pdf`,
    });

    res.send(pdfBuffer);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to generate resume PDF",
    });
  }
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getAllInterviewReportsController,
  generateResumePdfController,
};