const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const User = require("../models/User");
const Category = require("../models/Category");
const MenuItem = require("../models/MenuItem");

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Category.deleteMany();
    await MenuItem.deleteMany();

    // Admin
    const admin = await User.create({
      name: "Admin",
      email: "admin@pizzeria.com",
      password: "admin123",
      role: "admin"
    });

    console.log("Admin Created:", admin.email);

    // Categories
    const categories = await Category.insertMany([
      { name: "Pizza", description: "Delicious handcrafted pizzas" },
      { name: "Sides", description: "Tasty side dishes" },
      { name: "Beverages", description: "Refreshing drinks" },
      { name: "Combo", description: "Best value combos" },
      { name: "New Launches", description: "Latest additions" },
      { name: "Bestsellers", description: "Most loved items" }
    ]);

    console.log("Categories Created");

    const pizzaCategory = categories.find(c => c.name === "Pizza");
    const sidesCategory = categories.find(c => c.name === "Sides");
    const beveragesCategory = categories.find(c => c.name === "Beverages");

    // Menu Items
    await MenuItem.insertMany([
      {
        name: "Margherita",
        price: 299,
        description: "Classic cheese and tomato pizza",
        imageUrl: "https://images.unsplash.com/photo-1601924928588-60c7e4f3a8c7",
        category: pizzaCategory._id
      },
      {
        name: "Farmhouse",
        price: 399,
        description: "Loaded with fresh veggies",
        imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
        category: pizzaCategory._id
      },
      {
        name: "Garlic Bread",
        price: 149,
        description: "Crispy garlic flavored bread",
        imageUrl: "https://images.unsplash.com/photo-1604908177522-0401b75b9d5e",
        category: sidesCategory._id
      },
      {
        name: "Coke",
        price: 99,
        description: "Chilled soft drink",
        imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        category: beveragesCategory._id
      }
    ]);

    console.log("Menu Items Created");

    console.log("Seeding Complete");
    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedData();
