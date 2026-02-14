import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function AddProduct() {
  const { fetchProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
      description: Yup.string().required(),
      image: Yup.string().url().required()
    }),
    onSubmit: async values => {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      fetchProducts();
      navigate("/");
    }
  });

  return (
    <div className="container mt-4">
      <form onSubmit={formik.handleSubmit} className="card p-4 shadow">
        <input className="form-control mb-2" placeholder="Name" {...formik.getFieldProps("name")} />
        <input className="form-control mb-2" placeholder="Price" {...formik.getFieldProps("price")} />
        <input className="form-control mb-2" placeholder="Category" {...formik.getFieldProps("category")} />
        <input className="form-control mb-2" placeholder="Image URL" {...formik.getFieldProps("image")} />
        <textarea className="form-control mb-2" placeholder="Description" {...formik.getFieldProps("description")} />
        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}
