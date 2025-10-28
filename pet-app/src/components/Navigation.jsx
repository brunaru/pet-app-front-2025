import { NavLink } from "react-router-dom";

export default function Navigation() {
   return (
   <nav>
      <ul>
         <li><NavLink to="/clients">Clientes</NavLink></li>
         <li><NavLink to="/pets">Pets</NavLink></li>
      </ul>
   </nav>);
}
