const analyticsService = require("../services/analyticsService");

exports.getMonthlyRevenue = async (req, res, next) => {
  try {
    const data = await analyticsService.calculateMonthlyRevenue();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};
