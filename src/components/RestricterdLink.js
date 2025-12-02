import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RestricterdLink = ({allowedRoles, till, descriptio}) => {
    const { auth } = useAuth();

  return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Link to={till} >{descriptio}</Link>: <p></p>
    );
}

export default RestricterdLink