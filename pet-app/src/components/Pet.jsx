import "./Element.css";

export default function Pet(props) {
   return (
      <div className="pet">
         <p>{props.name}</p>
         <p>{props.type}</p>
         <p>{props.breed}</p>
         <p>{props.birth}</p>
         <p>{props.ClientId}</p>
         <img src={props.photo} alt={props.name} className="p-img" />
      </div>
   );
}
