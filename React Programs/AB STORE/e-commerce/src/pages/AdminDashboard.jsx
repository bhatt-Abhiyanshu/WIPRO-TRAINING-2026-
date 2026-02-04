import { useState } from "react";

const AdminDashboard = ({ products, setProducts }) => {
  const [form, setForm] = useState({
    id: null, name: "", price: "", description: "", category: "", image: ""
  });

  const isEdit = form.id !== null;

  const submitProduct = () => {
    if (isEdit) {
      setProducts(products.map(p => p.id === form.id ? { ...form, price: Number(form.price) } : p));
    } else {
      setProducts([...products, { ...form, id: Date.now(), price: Number(form.price) }]);
    }
    setForm({ id: null, name: "", price: "", description: "", category: "", image: "" });
  };

  const editProduct = (product) => {
    setForm(product);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-purple-600">Admin Dashboard</h2>

      <div className="grid grid-cols-2 gap-3">
        <input className="border p-2" placeholder="Name" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2" placeholder="Price" value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })} />
        <input className="border p-2" placeholder="Category" value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })} />
        <input className="border p-2" placeholder="Image URL" value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })} />
        <textarea className="border p-2 col-span-2" placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })} />
      </div>

      <button
        onClick={submitProduct}
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded"
      >
        {isEdit ? "Update Product" : "Add Product"}
      </button>

      <div className="mt-6">
        {products.map(p => (
          <div key={p.id} className="flex justify-between items-center border p-3 mb-2 rounded">
            <span>{p.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => editProduct(p)}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
