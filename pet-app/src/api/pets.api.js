import axios from "axios";

const url = "http://localhost:3000";

async function getPets() {
  return axios.get(url + "/pets");
}

async function getClients() {
  return axios.get(url + "/clients");
}

async function postPets(pet) {
  return axios.post(url + "/pets", pet);
}

async function postClient(client) {
  return axios.post(url + "/clients", client);
}

export default { getPets, postPets, getClients, postClient };
