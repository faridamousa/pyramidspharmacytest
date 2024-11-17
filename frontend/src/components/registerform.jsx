import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [is_staff, setIs_staff] = useState(false);
  const [is_admin, setIs_admin] = useState(false);
  const [is_patient, setIs_patient] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("api/user/register/", {
        username,
        first_name,
        last_name,
        password,
        email,
        is_staff,
        is_admin,
        is_patient,
      });
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Register</h1>
      <input
        className="form-input"
        type="text"
        value={first_name}
        onChange={(e) => setFirst_name(e.target.value)}
        placeholder="First Name"
      />
      <input
        className="form-input"
        type="text"
        value={last_name}
        onChange={(e) => setLast_name(e.target.value)}
        placeholder="Last Name"
      />
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={is_staff}
            onChange={(e) => setIs_staff(e.target.checked)}
          />
          Staff
        </label>
        <label>
          <input
            type="checkbox"
            checked={is_patient}
            onChange={(e) => setIs_patient(e.target.checked)}
          />
          Patient
        </label>
      </div>
      <button className="form-button" type="submit">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
