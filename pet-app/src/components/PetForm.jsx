import "./Form.css";
import { useEffect, useState } from "react";
import petsApi from "../api/pets.api.js";

export default function PetForm(props) {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({name: "", type: "", breed: "", birth: "", photo: "", ClientId: ""});

  useEffect(() => {
    petsApi.getClients(props.authToken).then((result) => {
      if (result.status == 200) {
        setClients(result.data);
      }})
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const body = {
      ...formData,
      ClientId: Number(formData.ClientId),
    };
    petsApi.postPet(body, props.authToken).then((result) => {
      if (result.status == 200) {
        alert("Pet cadastrado com sucesso");
        props.addNewPet(result.data);
        setFormData({name: "", type: "", breed: "", birth: "", photo: "", ClientId: result.data.ClientId})
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

    <label>Tipo de Animal</label>
    <select name="type" value={formData.type} onChange={handleChange} >
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
        <option value="Rabbit">Rabbit</option>
    </select>

    <div>
        <label>Raça</label>
        <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
      </div>

      <div>
        <label>Data de Nascimento</label>
        <input type="date" name="birth" value={formData.birth} onChange={handleChange} />
      </div>

      <div>
        <label>URL da Foto</label>
        <input type="text" name="photo" value={formData.photo} onChange={handleChange}
          placeholder="https://exemplo.com/foto.jpg"
        />
      </div>

      <div>
        <label>Cliente</label>
        <select name="ClientId" value={formData.ClientId} onChange={handleChange} >
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}
