import React, { useState, FormEvent } from 'react';
import './App.css';

interface UserData {
  name: string;
  email: string;
  password: string;
  address: string;
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={userData.address} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submittedData">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
          <p><strong>Address:</strong> {userData.address}</p>
        </div>
      )}
    </div>
  );
};

export default App;
