module.exports = (amount, mode) => {
  console.log("Processing mock payment...");
  console.log("Amount:", amount);
  console.log("Mode:", mode);

  return {
    status: "Success",
    transactionId: "TXN" + Date.now()
  };
};
