import "./PetForm.css";
import { useEffect, useState } from "react";
import petsApi from "../api/pets.api.js";

export default function PetForm() {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ name: "", type: "", breed: "", birth: "", photo: "", ClientId: "", });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    //const body = JSON.stringify(formData);
    const body = {
      ...formData,
      ClientId: Number(formData.ClientId), // converte para inteiro
    };
    petsApi.postPets(body).then((result) => {
      if (result.status == 200) {
        alert("Pet cadastrado com sucesso!");
        setFormData({ name: "", type: "", breed: "", birth: "", photo: "", ClientId: "", });
      }
    });
  }


  function getClients() {
    petsApi.getClients().then((result) => {
      if (result.status == 200) {
        const data = result.data;
        setClients(data);
      }
    });
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

    <label>Animal Type</label>
    <select name="type" value={formData.type} onChange={handleChange}>
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
        <input
          type="date"
          name="birth"
          value={formData.birth}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>URL da Foto</label>
        <input
          type="text"
          name="photo"
          placeholder="https://exemplo.com/foto.jpg"
          value={formData.photo}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Cliente</label>
        <select name="ClientId" value={formData.ClientId} onChange={handleChange} >
          <option value="" disabled>
          </option>
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
