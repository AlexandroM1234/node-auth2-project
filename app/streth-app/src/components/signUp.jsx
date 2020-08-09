import React, { useState } from "react";
import { useForm } from "react-hook-form";
import newUser from "../actions/index";
const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleNewUser = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    newUser(data);
  };

  return (
    <form onSubmit={submit}>
      <h3>Sign Up</h3>

      <label>UserName</label>
      <input type="text" onChange={handleNewUser} />

      <label>Password</label>
      <input type="password" onChange={handleNewUser} />

      <button>Submit</button>
    </form>
  );
};

export default SignUp;
