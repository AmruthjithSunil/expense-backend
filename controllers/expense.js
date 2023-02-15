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

exports.postExpense = (req, res, next) => {
  console.log("Adding New Expense");
  const { amount, description, category } = req.body;
  const creatingExpense = async () => {
    try {
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
  creatingExpense();
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
