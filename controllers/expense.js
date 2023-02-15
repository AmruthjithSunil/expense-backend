const { Expense } = require("../model/expense");

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
    console.log("Received Expenses");
  } catch (err) {
    console.log(err);
  }
};

exports.postExpense = async (req, res, next) => {
  try {
    console.log("Adding New Expense");
    const { amount, description, category } = req.body;
    const result = await Expense.create({
      amount: amount,
      description: description,
      category: category,
    });
    console.log("Added New Expense");
    console.log(result.dataValues);
    res.json(result);
  } catch (err) {
    console.log("Failed to add new expense");
    console.log(err);
  }
};

exports.deleteExpense = async (req, res, next) => {
  try {
    const expenseId = req.params.id;
    const expense = await Expense.findByPk(expenseId);
    await expense.destroy();
    console.log("Expense Deleted");
    res.json(expense.dataValues);
  } catch (err) {
    console.log("Couldnt delete expense");
    console.log(err);
  }
};

exports.patchExpense = async (req, res, next) => {
  try {
    const expenseId = req.params.id;
    const { amount, description, category } = req.body;
    const expense = await Expense.findByPk(expenseId);
    const result = await expense.update({
      amount: amount,
      description: description,
      category: category,
    });
    console.log("Expense Edited");
    console.log(result.dataValues);
    res.json(result);
  } catch (err) {
    console.log("Couldnt edit expense");
    console.log(err);
  }
};
