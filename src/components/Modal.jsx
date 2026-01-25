import { useState } from "react";

export default function Modal({ closeModal, onSignUp }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(form);
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-h">Sign up</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="modal-label">
            Username
            <input
              placeholder="Username"
              name="username"
              className="modal-label-input"
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            E-Mail
            <input
              placeholder="E-Mail"
              name="email"
              type="email"
              className="modal-label-input"
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            Password
            <input
              placeholder="Password"
              name="password"
              type="password"
              className="modal-label-input"
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="modal-btn">
            Sign up
          </button>
        </form>
        <p className="modal-text">
          Already have an account? <u>Log In</u>
        </p>
      </div>
    </div>
  );
}
