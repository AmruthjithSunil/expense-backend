const express = require("express");

const expenseController = require("../controllers/expense");

const router = express.Router();

router.get("/", expenseController.getExpenses);

module.exports = router;
