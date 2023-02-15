const express = require("express");

const expenseController = require("../controllers/expense");

const router = express.Router();

router.get("/", expenseController.getExpenses);
router.post("/", expenseController.postExpense);
router.delete("/:id", expenseController.deleteExpense);
router.patch("/:id", expenseController.patchExpense);

module.exports = router;
