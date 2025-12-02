import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from "../hooks/useAxiosPrivate";



const EVENT_URL = '/Event';

const AddEvent = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [name, setName] = useState('');
    const [local, setLocal] = useState('');
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const startRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        startRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [startDate, endDate, name, local])
    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPrivate.post(EVENT_URL,
                JSON.stringify({ name, startDate, endDate, location: local })
            );

            // const accessToken = response?.data?.token;
            // const roles = response?.data?.roles;
            // setAuth({ user, pwd, roles, accessToken });
            // setUser('');
            // setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div>AddEvent</div>
        <form onSubmit={handelSubmit}>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            ref={startRef}
            onChange={(e) => setName(e.target.value)}
            value={name} 
            required
        />
            <div className="form-group">
          <label>Start Date:</label>
          <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
          />
        </div>
        
        <div className="form-group">
          <label>End Date:</label>
          <input
                type="date"
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
          />
        </div>
        <label htmlFor="location">Location:</label>
        <input
            type="text"
            id="location"
            onChange={(e)=> setLocal(e.target.value)}
            value={local}
            required
        />
        <button>Add Event</button>
        </form>
    </section>
  )
}

export default AddEvent