import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SignUp() {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    username: "",
    number: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    username: "",
    number: "",
    confirmPassword: "",
    gender: "",
  });

  let registerAction = async () => {
    if (
      !formValues.fullname ||
      !formValues.username ||
      !formValues.password ||
      !formValues.email ||
      !formValues.number ||
      !formValues.gender
    ) {
      return;
    }
    let url = `http://localhost:4000/adduser?fullname=${formValues.fullname}&username=${formValues.username}&password=${formValues.password}&email=${formValues.email}&number=${formValues.number}&gender=${formValues.gender}`;
    await fetch(url);
    let newFormValues = {
      fullname: "",
      email: "",
      password: "",
      username: "",
      number: "",
      confirmPassword: "",
      gender: "",
    };

    setFormValues(newFormValues);
    alert("Registration Successful !!!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with registration logic
      console.log("Registration successful!");
      setFormValues({
        fullname: "",
        email: "",
        password: "",
        username: "",
        number: "",
        confirmPassword: "",
        gender: "",
      });
      setErrors({
        fullname: "",
        email: "",
        password: "",
        username: "",
        number: "",
        confirmPassword: "",
        gender: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!formValues.fullname.trim()) {
      newErrors.fullname = "Please enter your name";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formValues.email.trim())) {
      newErrors.email = "Invalid email address";
    }

    // Validate password
    if (!formValues.password.trim()) {
      newErrors.password = "Please enter your password";
    } else if (formValues.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (
      !/[A-Z]/.test(formValues.password.trim()) ||
      !/[a-z]/.test(formValues.password.trim()) ||
      !/[!@#$%^&*]/.test(formValues.password.trim())
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one special symbol";
    }

    // Validate last name
    if (!formValues.username.trim()) {
      newErrors.username = "Please enter your last name";
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formValues.number.trim()) {
      newErrors.number = "Please enter your phone number";
    } else if (!phoneRegex.test(formValues.number.trim())) {
      newErrors.number = "Invalid phone number";
    }

    // Validate confirm password
    if (formValues.confirmPassword.trim() !== formValues.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Validate gender
    if (!formValues.gender) {
      newErrors.gender = "Please select a gender";
    }

    return newErrors;
  };

  return (
    <>
      <div>
        <div className="">
          <div
            className="row d-flex flex-column justify-content-center align-items-center mt-4"
            style={{ height: "100vh" }}
          >
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded col-sm-12 col-md-9 ">
              <h1>SignUp</h1>
              <form onSubmit={handleSubmit}>
                <div className="">
                  
                  <div className="ms-3" style={{fontSize:1}} >
                    <div>
                      <h3 className="mt-3 ">First Name</h3>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your name"
                        className={`form-control form-control-lg  ${
                          errors.fullname ? "is-invalid" : ""
                        }`}
                        value={formValues.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname && (
                        <p className="text-danger">{errors.fullname}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="mt-3">Last Name</h3>
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your Lastname"
                        className={`form-control form-control-lg ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        value={formValues.username}
                        onChange={handleChange}
                      />
                      {errors.username && (
                        <p className="text-danger">{errors.username}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="mt-3">Phone Number</h3>
                      <input
                        type="tel"
                        name="number"
                        placeholder="Enter your number"
                        minLength={10}
                        maxLength={10}
                        className={`form-control form-control-lg ${
                          errors.number ? "is-invalid" : ""
                        }`}
                        value={formValues.number}
                        onChange={handleChange}
                      />
                      {errors.number && (
                        <p className="text-danger">{errors.number}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="mt-3">Email</h3>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        //  size="lg" type="text"
                        className={`form-control form-control-lg size="lg"${
                          errors.email ? "is-invalid" : ""
                        }`}
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="mt-3">Password</h3>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`form-control form-control-lg ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        value={formValues.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="mt-3">Confirm Password</h3>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className={`form-control form-control-lg ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <p className="text-danger">{errors.confirmPassword}</p>
                      )}
                    </div>
                  
                  
                    
                    
                  </div>
                
                <div className="mt-3 d-flex align-items-center">
                  <div className="fs-5 fw-medium" style={{ flex: 1 }}>
                    <h3>Gender</h3>
                  </div>
                  <div
                    className="fw-semibold d-flex"
                    style={{
                      justifyContent: "space-evenly",
                      flex: 3,
                    }}
                  >
                    <div>
                      <input className="me-3"
                        type="radio"
                        name="gender"
                        value="male"
                        id={1}
                        onChange={handleChange}
                        checked={formValues.gender === "male"}
                      />
                      Male
                    </div>
                    <div>
                      <input className="me-3"
                        type="radio"
                        name="gender"
                        value="female"
                        id={2}
                        onChange={handleChange}
                        checked={formValues.gender === "female"}
                      />
                      Female
                    </div>
                    <div>
                      <input className="me-3"
                        type="radio"
                        name="gender"
                        value="nottosay"
                        id={3}
                        onChange={handleChange}
                        checked={formValues.gender === "nottosay"}
                      />
                      Other
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <input
                    type="submit"
                    value="SignUp"
                    className="mt-2 btn btn-success w-100"
                    onClick={registerAction}
                  />
                </div>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
