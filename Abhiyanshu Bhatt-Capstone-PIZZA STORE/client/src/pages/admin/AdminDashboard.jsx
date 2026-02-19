import React, { useEffect, useState } from "react";
import API from "../../utils/axiosConfig";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { toast } from "react-toastify";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDashboard = () => {

  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0
  });

  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    category: ""
  });

  const [categoryName, setCategoryName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchStats = async () => {
    const res = await API.get("/analytics/monthly-revenue");
    setStats(res.data.data);
  };

  const fetchMenu = async () => {
    const { data } = await API.get("/menu");
    setMenuItems(data);
  };

  const fetchCategories = async () => {
    const { data } = await API.get("/categories");
    setCategories(data);
  };

  const fetchOrders = async () => {
    const { data } = await API.get("/orders");
    console.log("ORDERS RESPONSE:", data);
    setOrders(data);
  };

  useEffect(() => {
    fetchStats();
    fetchMenu();
    fetchCategories();
    fetchOrders();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      description: "",
      imageUrl: "",
      category: ""
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      price: Number(form.price)
    };

    try {
      if (editingId) {
        await API.put(`/menu/${editingId}`, payload);
        toast.success("Item updated");
      } else {
        await API.post("/menu", payload);
        toast.success("Item added");
      }

      resetForm();
      fetchMenu();
    } catch (err) {
      toast.error("Operation failed");
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      price: item.price,
      description: item.description,
      imageUrl: item.imageUrl,
      category: item.category
    });
    setEditingId(item._id || item.id);
  };

  const handleDelete = async (id) => {
    await API.delete(`/menu/${id}`);
    toast.success("Deleted");
    fetchMenu();
  };

  const updateStatus = async (id, status) => {
    await API.put(`/orders/${id}/status`, { status });
    toast.success("Status updated");
    fetchOrders();
  };

  const addCategory = async () => {
    if (!categoryName) return;

    await API.post("/categories", { name: categoryName });
    toast.success("Category added");
    setCategoryName("");
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    await API.delete(`/categories/${id}`);
    toast.success("Category deleted");
    fetchCategories();
  };

  const chartData = {
    labels: ["Orders", "Revenue"],
    datasets: [
      {
        label: "Overview",
        data: [stats.totalOrders, stats.totalRevenue]
      }
    ]
  };
   //Frontend forms
  return (
    <div className="container my-5">

      <h2 className="text-danger mb-4">Admin Dashboard</h2>

      {/* STATS */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Total Orders</h5>
            <h3>{stats.totalOrders}</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Total Revenue</h5>
            <h3>₹{stats.totalRevenue}</h3>
          </div>
        </div>
      </div>

      // CHART 
      <div className="card p-4 shadow mb-5">
        <Bar data={chartData} />
      </div>

      {/* MENU FORM */}
      <div className="card p-4 shadow mb-4">
        <h5>{editingId ? "Edit Item" : "Add Item"}</h5>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name"
            className="form-control mb-2"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input name="price" type="number"
            placeholder="Price"
            className="form-control mb-2"
            value={form.price}
            onChange={handleChange}
            required
          />

          <textarea name="description"
            placeholder="Description"
            className="form-control mb-2"
            value={form.description}
            onChange={handleChange}
          />

          <input name="imageUrl"
            placeholder="Image URL"
            className="form-control mb-2"
            value={form.imageUrl}
            onChange={handleChange}
            required
          />

          <select name="category"
            className="form-control mb-3"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id || cat.id} value={cat._id || cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <button className="btn btn-danger">
            {editingId ? "Update" : "Add"}
          </button>
        </form>
      </div>

      // MENU TABLE 
      <div className="card p-4 shadow mb-5">
        <h5>Manage Menu</h5>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {menuItems.map(item => (
              <tr key={item._id || item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.categoryName}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(item)}>
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id || item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      // ORDERS MANAGEMENt
      <div className="card p-4 shadow mb-5">
        <h5>Manage Orders</h5>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>₹{order.totalAmount}</td>
                <td>{order.status}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order._id, e.target.value)
                    }
                    className="form-control"
                  >
                    {[
                      "Pending",
                      "Accepted",
                      "Rejected",
                      "Preparing",
                      "Out for Delivery",
                      "Delivered",
                      "Cancelled"
                    ].map(status => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      // CATEGORY CRUD 
      <div className="card p-4 shadow">
        <h5>Manage Categories</h5>

        <div className="d-flex mb-3">
          <input
            className="form-control me-2"
            placeholder="New Category"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button onClick={addCategory} className="btn btn-danger">
            Add
          </button>
        </div>

        <ul className="list-group">
          {categories.map(cat => (
            <li
              key={cat._id || cat.id}
              className="list-group-item d-flex justify-content-between"
            >
              {cat.name}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteCategory(cat._id || cat.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default AdminDashboard;
