import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
          Admin Login
        </h2>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .required("Username is required"),
            password: Yup.string()
              .required("Password is required"),
          })}
          onSubmit={(values) => {
            if (
              values.username === "abhy@123" &&
              values.password === "abhy"
            ) {
              localStorage.setItem("admin", true);
              setIsAdmin(true);
              navigate("/admin/dashboard");
            } else {
              alert("❌ Invalid Admin Credentials");
            }
          }}
        >
          <Form className="space-y-4">
            <div>
              <Field
                name="username"
                placeholder="Username"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
