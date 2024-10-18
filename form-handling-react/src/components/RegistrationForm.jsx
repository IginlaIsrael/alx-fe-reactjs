import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for managing form errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Object to hold any error messages
    let currentErrors = {};

    // Basic validation checks
    if (!username) {
      currentErrors.username = 'Username is required';
    }
    if (!email) {
      currentErrors.email = 'Email is required';
    }
    if (!password) {
      currentErrors.password = 'Password is required';
    }

    // If there are errors, set them in state and do not submit the form
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    // If no errors, clear the error state and proceed
    setErrors({});
    console.log({ username, email, password });

    // Simulate form submission logic
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
