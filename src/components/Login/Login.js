
import React, { useState } from 'react';

export default function Login() {
  const [users, setUser] = useState({
    userEmail: "",
    userPassword: ""
  });

  const [errors, setError] = useState({
    userEmailError: "",
    userPasswordError: ""
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "userEmail":
        setUser({ ...users, userEmail: value });
        setError({ ...errors, userEmailError: value.includes("@") ? "" : "Please enter a valid email address." });
        break;
      case "userPassword":
        setUser({ ...users, userPassword: value });
        setError({ ...errors, userPasswordError: validatePassword(value) });
        break;
      default:
        return;
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
    if (!regex.test(password)) {
      return "Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
    }
    return "";
  };

  const togglePassword = () => {
    const passwordInput = document.getElementById("userPassword");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <div className='ms-5'>
      <div className="mt-5 border-black">
        <label htmlFor="userEmail" className="form-label">Email</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          className="form-control w-75"
          placeholder="Enter your Email"
          onChange={(ev) => handleLogin(ev)}
        />
        {errors.userEmailError && <p className="text-danger">{errors.userEmailError}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="userPassword" className="form-label">Password</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          className="form-control w-75"
          placeholder="Enter your Password"
          onChange={(ev) => handleLogin(ev)}
        />
        {errors.userPasswordError && <p className="text-danger">{errors.userPasswordError}</p>}
        <button className='btn btn-info mt-2' onClick={togglePassword}>Show/Hide Password</button>
      </div>
    </div>
  );
}
