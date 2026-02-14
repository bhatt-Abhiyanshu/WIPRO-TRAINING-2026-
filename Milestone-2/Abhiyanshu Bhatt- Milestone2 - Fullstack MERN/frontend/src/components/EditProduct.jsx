import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: ""
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
      description: Yup.string().required(),
      image: Yup.string().url().required()
    }),
    onSubmit: async values => {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      navigate("/");
    }
  });

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => formik.setValues(data));
  }, [id]);

  return (
    <div className="container mt-4">
      <form onSubmit={formik.handleSubmit} className="card p-4 shadow">
        <input className="form-control mb-2" {...formik.getFieldProps("name")} />
        <input className="form-control mb-2" {...formik.getFieldProps("price")} />
        <input className="form-control mb-2" {...formik.getFieldProps("category")} />
        <input className="form-control mb-2" {...formik.getFieldProps("image")} />
        <textarea className="form-control mb-2" {...formik.getFieldProps("description")} />
        <button className="btn btn-success">Update Product</button>
      </form>
    </div>
  );
}
