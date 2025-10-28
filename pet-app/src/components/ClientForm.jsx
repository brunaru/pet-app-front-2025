import "./Form.css";
import { useState } from "react";
import petsApi from "../api/pets.api.js";

export default function PetForm(props) {
  const [formData, setFormData] = useState({name: "", document: ""});

  function handleSubmit(event) {
    event.preventDefault();
    petsApi.postClient(formData, props.authToken).then((result) => {
      if (result.status == 200) {
        alert("Cliente cadastrado com sucesso");
        props.addNewClient(result.data);
        setFormData({name: "", document: ""})
      }
    });
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Documento</label>
        <input type="text" name="document" value={formData.document} onChange={handleChange} />
      </div>

      <div>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}
