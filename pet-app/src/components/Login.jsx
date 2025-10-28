import { useState } from "react";
import { useNavigate } from "react-router-dom";
import petsApi from "../api/pets.api.js";

export default function Login(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    // Lógica de login aqui
    petsApi.signin(formData).then((result) => {
    if (result.status == 200) {
            const token = result.data.token;
            props.setAuthToken(token);
            navigate("/pets");
        }
    });
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>E-mail</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Senha</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
