import { Route, Routes } from "react-router-dom";
import ClientList from "../components/ClientList";
import PetList from "../components/PetList";

export default function MyRoutes(props) {
    return ( 
    <Routes>
        <Route element={<PetList authToken={props.authToken} />} path="/" />
        <Route element={<ClientList authToken={props.authToken} />} path="/clients" />
        <Route element={<PetList authToken={props.authToken} />} path="/pets" />
    </Routes> );
}
