import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const schema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.number().positive().required("Required"),
  category: Yup.string().required("Required"),
  image: Yup.string().url("Invalid URL").required("Required")
});

function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>

      <Formik
        initialValues={{ name: "", price: "", category: "", image: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          })
            .then(res => res.json())
            .then(data => {
              addProduct(data);
              navigate("/");
            });
        }}
      >
        <Form className="max-w-md mx-auto bg-gray-100 p-6 rounded-xl shadow m-2 border-2">
          <Field name="name" placeholder="Product Name" className="input border-2 border-amber-950 p-2 rounded-2xl m-2 " />
          <ErrorMessage name="name" component="div" className="error" />

          <Field name="price" placeholder="Price" className="input border-2 border-amber-950 p-2 rounded-2xl m-2" />
          <ErrorMessage name="price" component="div" className="error" />

          <Field name="category" placeholder="Category" className="input border-2 border-amber-950 p-2 rounded-2xl m-2" />
          <ErrorMessage name="category" component="div" className="error" />

          <Field name="image" placeholder="Image URL" className="input border-2 border-amber-950 p-2 rounded-2xl m-2" />
          <ErrorMessage name="image" component="div" className="error" />

          <button className="w-full bg-gray-800 text-white py-2 rounded-2xl mt-4">
            Add Product
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddProduct;
