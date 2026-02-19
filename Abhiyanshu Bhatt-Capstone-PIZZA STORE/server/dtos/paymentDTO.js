class PaymentDTO {
  constructor(payment) {
    this.id = payment._id;
    this.order = payment.order;
    this.user = payment.user;
    this.amount = payment.amount;
    this.mode = payment.mode;
    this.status = payment.status;
    this.transactionId = payment.transactionId;
    this.createdAt = payment.createdAt;
  }
}

module.exports = PaymentDTO;
