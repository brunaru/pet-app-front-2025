import { FaTrash } from "react-icons/fa";
import "./Element.css";

export default function Client(props) {
   function handleDelete() {
      props.deleteClient(props.id);
   }
   return (
      <div className="pet">
         <p>{props.name}</p>
         <p>{props.document}</p>
         <FaTrash className="pointer" onClick={handleDelete} />
      </div>
   );
}
