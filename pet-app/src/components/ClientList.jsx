import { useEffect, useState } from "react";
import ClientForm from "./ClientForm.jsx";
import Client from "./Client.jsx";
import "./List.css";
import petApi from "../api/pets.api.js";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function ClientList(props) {
   const [clients, setClients] = useState([]);
   const [showForm, setShowForm] = useState(false);

   function handleToggleForm() {
      setShowForm(!showForm);
   }

   useEffect(() => {
      petApi.getClients(props.authToken).then((result) => {
         if(result.status === 200){ 
            setClients(result.data);
         }
      })
   }, []);

   function addNewClient(client) {
      setClients([...clients, client]);
   }

   function deleteClient(id) {
      petApi.deleteClient(id).then((res) => {
         if(res.status == 200) {
            const clis = clients.filter(client => client.id != id);
            setClients(clis);
         }
      })
   }

   return (
      <div className="p-basico">
         <h1>Clientes</h1>
         {clients.map(function (client, index) {
            return (
               <Client
                  key={index}
                  name={client.name}
                  document={client.document}
                  id={client.id}
                  deleteClient={deleteClient}
               />
            );
         })}
         <div>
         {showForm ? (<FaMinusCircle className="pointer" onClick={handleToggleForm} />) : (<FaPlusCircle className="pointer" onClick={handleToggleForm} />)}
         {showForm && <ClientForm addNewClient={addNewClient} authToken={props.authToken} />}
         </div>
      </div>
   );
}
