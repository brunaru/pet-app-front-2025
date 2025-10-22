import "./App.css";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  function handleToggleForm() {
    setShowForm(!showForm);
  }

  return (
    <main>
      <PetList />
      {showForm ? (<FaMinusCircle className="pointer" onClick={handleToggleForm} />) : (<FaPlusCircle className="pointer" onClick={handleToggleForm} />)}
      {showForm && <PetForm />}
    </main>
  );
}
