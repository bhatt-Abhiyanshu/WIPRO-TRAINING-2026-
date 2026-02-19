const menuItemService = require("../services/menuItemService");

exports.createMenuItem = async (req, res, next) => {
  try {
    const item = await menuItemService.createMenuItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

exports.getMenuItems = async (req, res, next) => {
  try {
    const items = await menuItemService.getMenuItems(req.query);
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

exports.updateMenuItem = async (req, res, next) => {
  try {
    const updated = await menuItemService.updateMenuItem(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

exports.deleteMenuItem = async (req, res, next) => {
  try {
    await menuItemService.deleteMenuItem(req.params.id);
    res.status(204).json({ success: true });
  } catch (error) {
    next(error);
  }
};


