const Category = require("../models/Category");
const CategoryDTO = require("../dtos/categoryDTO");

exports.createCategory = async (data) => {
  const category = await Category.create(data);
  return new CategoryDTO(category);
};

exports.getAllCategories = async () => {
  const categories = await Category.find().sort("name");
  return categories.map(c => new CategoryDTO(c));
};

exports.updateCategory = async (id, data) => {
  const category = await Category.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });

  if (!category) {
    const error = new Error("Category not found");
    error.statusCode = 404;
    throw error;
  }

  return new CategoryDTO(category);
};

exports.deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    const error = new Error("Category not found");
    error.statusCode = 404;
    throw error;
  }
};
