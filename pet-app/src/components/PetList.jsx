import { useEffect, useState } from "react";
import Pet from "./Pet.jsx";
import "./PetList.css";
import petsApi from "../api/pets.api.js";


const petsArray = [
  { name: "Shelsiane", type: "Dog", breed: "Shiba", birth: "11/11/2020", ClientId: "2", photo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Picography-curious-dog-animal-pet-house-home-sm-1.jpg" },
  { name: "Mimi", type: "Cat", breed: "Siamês", birth: "05/06/2019", ClientId: "4", photo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Siam_lilacpoint.jpg" },
  { name: "Thor", type: "Dog", breed: "Golden Retriever", birth: "23/03/2021", ClientId: "7", photo: "https://s2-vidadebicho.glbimg.com/jS-biECbSlz4Q6hXgsgoRbERU9M=/0x0:1280x853/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/q/K/SULI1LTrAHWrO3jUemyA/2022-06-16-poodle-vida-de-bicho-andres-felipe-aristizabal-por-pixabay-poodle-g233259f4e-1280.jpeg" }
]

export default function PetList() {
   const [pets, setPets] = useState(petsArray);

   function getPets() {
      petsApi.getPets().then((result) => {
         if (result.status == 200) {
            const data = result.data;
            console.log(data);
            setPets(data);
         }
      });
   }

   useEffect(() => {
      getPets();
   }, []);

   return (
      <div className="p-basico">
         <h1>Pets</h1>
         {pets.map(function (pet, index) {
            return (
               <Pet
                  key={index}
                  name={pet.name}
                  type={pet.type}
                  birth={pet.birth}
                  ClientId={pet.ClientId}
                  photo={pet.photo}
               />
            );
         })}
      </div>
   );
}
