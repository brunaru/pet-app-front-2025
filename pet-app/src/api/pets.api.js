import axios from "axios";

const url = "http://localhost:3000";

async function getPets(token) {
  return axios.get(url + "/pets", { headers: { Authorization: `Bearer ${token}`, }, });
}

async function getClients(token) {
  return axios.get(url + "/clients", { headers: { Authorization: `Bearer ${token}`, }, });
}

async function deleteClient(id, token) {
  return axios.delete(url + "/clients/" + id, { headers: { Authorization: `Bearer ${token}`, }, });
}

async function postPets(pet, token) {
  return axios.post(url + "/pets", pet, { headers: { Authorization: `Bearer ${token}`, }, });
}

async function postClient(client, token) {
  return axios.post(url + "/clients", client, { headers: { Authorization: `Bearer ${token}`, }, });
}

async function signin(user) {
  return axios.post(url + "/signin", user);
}

async function signup(user) {
  return axios.post(url + "/signup", user);
}

export default { getPets, postPets, getClients, postClient, deleteClient, signin, signup };
