import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate()
    
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('account/users', {
                    signal:controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
                
            } catch (err) {
                console.error(err);
                navigate('/login', {state: {from: location}, replace: true});
            }
        }

        getUsers();

        return () =>{
            isMounted = false;
            controller.abort();
        }
    }, [])
    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <table>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                        {users.map((user, i) => <tr key={i}><td>{user?.name}</td><td>{user?.email}</td></tr>)}
                    </table>
                ) : <p>No users to display</p>
            }
        </article>
    )
}

export default Users