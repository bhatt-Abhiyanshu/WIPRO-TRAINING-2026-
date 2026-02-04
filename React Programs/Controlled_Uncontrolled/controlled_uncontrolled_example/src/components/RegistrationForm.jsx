import { useRef, useState } from "react";
import InputField from "./InputField";

const RegistrationForm = () => {
  
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    let newErrors = {};

    
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    if (!firstName) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(firstName)) {
      newErrors.firstName = "Only alphabets allowed";
    }

   
    if (!lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(lastName)) {
      newErrors.lastName = "Only alphabets allowed";
    }

   
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Min 8 chars, 1 uppercase, 1 lowercase, 1 number & 1 special character";
    }

    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("");
    } else {
      setErrors({});
      setStatus("Registration successful ✅");

      
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="First Name"
          inputRef={firstNameRef}
          error={errors.firstName}
        />

        <InputField
          type="text"
          placeholder="Last Name"
          inputRef={lastNameRef}
          error={errors.lastName}
        />

        <InputField
          type="text"
          placeholder="Email"
          inputRef={emailRef}
          error={errors.email}
        />

        <InputField
          type="password"
          placeholder="Password"
          inputRef={passwordRef}
          error={errors.password}
        />

        <button type="submit">Register</button>
      </form>

      {status && <h3 style={{ color: "green" }}>{status}</h3>}
    </div>
  );
};

export default RegistrationForm;
