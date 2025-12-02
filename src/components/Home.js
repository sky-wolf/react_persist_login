import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import useAuth from "../hooks/useAuth";
import RestricterdLink from "./RestricterdLink";

const Home = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            auth?.user
            ? <p>You are loogd in!</p>
            : <p>You are not logged in!</p>
            <br />
            <RestricterdLink allowedRoles={['organisator']} till="/events" descriptio="Go to the Edvents page" />
            <br />
            <RestricterdLink allowedRoles={['administrator']} till="/admin" descriptio="Go to the Admin page" />
            <Link to=""></Link>
            <br />
            <RestricterdLink allowedRoles={['administrator']} till="/lounge" descriptio="Go to the Editor page" />
            <Link to="">Go to the Lounge</Link>
            <br />
            <RestricterdLink allowedRoles={['administrator']} till="/linkpage" descriptio="Go to the link page" />

            <br />
            <RestricterdLink allowedRoles={['administrator']} till="/linkpage" descriptio="Go to the Editor page" />
            <Link to="/users" >Go to the Users List</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home