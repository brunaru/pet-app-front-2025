import "./Element.css";

export default function Pet(props) {
   return (
      <div className="pet">
         <p>{props.name}</p>
         <p>{props.document}</p>
      </div>
   );
}
