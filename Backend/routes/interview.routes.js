const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const interviewController = require("../controllers/interview.controllers");
const upload = require("../middlewares/file.middleware");

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description Generate new interview report
 * @access Private
 */
interviewRouter.post(
  "/",
  authMiddleware,
  upload.single("resume"),
  interviewController.generateInterviewReportController
);

/**
 * @route GET /api/interview/report/:interviewId
 * @description Get interview report by ID
 * @access Private
 */
interviewRouter.get(
  "/report/:interviewId",
  authMiddleware,
  interviewController.getInterviewReportByIdController
);

/**
 * @route GET /api/interview/
 * @description Get all interview reports
 * @access Private
 */
interviewRouter.get(
  "/",
  authMiddleware,
  interviewController.getAllInterviewReportsController
);

/**
 * @route POST /api/interview/resume/pdf/:interviewReportId
 * @description Generate resume PDF
 * @access Private
 */
interviewRouter.post(
  "/resume/pdf/:interviewReportId",
  authMiddleware,
  interviewController.generateResumePdfController
);

module.exports = interviewRouter;