const mongoose = require("mongoose");
const MenuItem = require("../models/MenuItem");
const Category = require("../models/Category");
const MenuItemDTO = require("../dtos/menuItemDTO");

exports.createMenuItem = async (data) => {
  if (!mongoose.Types.ObjectId.isValid(data.category)) {
    const error = new Error("Invalid category ID");
    error.statusCode = 400;
    throw error;
  }

  const categoryDoc = await Category.findById(data.category);

  if (!categoryDoc) {
    const error = new Error("Category not found");
    error.statusCode = 400;
    throw error;
  }

  const item = await MenuItem.create({
    ...data,
    category: categoryDoc._id
  });

  await item.populate("category");

  return new MenuItemDTO(item);
};

exports.getMenuItems = async (query) => {
  const filter = {};

  if (query.category) {
    if (mongoose.Types.ObjectId.isValid(query.category)) {
      filter.category = query.category;
    }
  }

  if (query.search) {
    filter.name = { $regex: query.search, $options: "i" };
  }

  const items = await MenuItem.find(filter).populate("category");

  return items.map(i => new MenuItemDTO(i));
};

exports.updateMenuItem = async (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Invalid menu item ID");
    error.statusCode = 400;
    throw error;
  }

  const item = await MenuItem.findById(id);

  if (!item) {
    const error = new Error("Menu item not found");
    error.statusCode = 404;
    throw error;
  }

  if (data.category) {
    if (!mongoose.Types.ObjectId.isValid(data.category)) {
      const error = new Error("Invalid category ID");
      error.statusCode = 400;
      throw error;
    }

    const categoryDoc = await Category.findById(data.category);

    if (!categoryDoc) {
      const error = new Error("Category not found");
      error.statusCode = 400;
      throw error;
    }

    data.category = categoryDoc._id;
  }

  Object.keys(data).forEach(key => {
    item[key] = data[key];
  });

  await item.save();
  await item.populate("category");

  return new MenuItemDTO(item);
};

exports.deleteMenuItem = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Invalid menu item ID");
    error.statusCode = 400;
    throw error;
  }

  const item = await MenuItem.findByIdAndDelete(id);

  if (!item) {
    const error = new Error("Menu item not found");
    error.statusCode = 404;
    throw error;
  }
};
