import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert("Registration Successful!");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" } 
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="zipcode">Zipcode</label>
          <input
            id="zipcode"
            type="text"
            {...register("zipcode", { 
              required: "Zipcode is required", 
              pattern: { value: /^[0-9]{5}$/, message: "Zipcode must be 5 digits" } 
            })}
          />
          {errors.zipcode && <p className="error">{errors.zipcode.message}</p>}
        </div>

        <button type="submit" className='butto'>Register</button>
      </form>
    </div>
  );
}

export default Register;
