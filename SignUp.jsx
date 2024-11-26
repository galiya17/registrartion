import React, { useState } from 'react';
import AppHeader from './AppHeader';
import AppInput from './AppInput';
import AppButton from './AppButton';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div>
      <AppHeader title="Sign Up" />
      <form onSubmit={handleSubmit}>
        <AppInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          onChange={handleChange}
          name="username"
        />
        <AppInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
        />
        <AppInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
        />
        <AppButton label="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
