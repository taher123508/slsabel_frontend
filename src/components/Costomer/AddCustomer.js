import { useRef, useState } from 'react';
import axios from '../../api/axios';
import { useContext } from "react";
import AuthContext from '../../context/AuthProvider';
import {  useNavigate } from 'react-router-dom';
const CUSTOME_URL = '/customer';
const AddCustomer = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [Location, setLocation] = useState('');
    const[errMsg,setErrMsg]=useState('');
    const { auth } = useContext(AuthContext);
    const nameref = useRef();
    const phoneref = useRef();
    const locref = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(CUSTOME_URL,{name:name,phone:phone,location:Location},
                {
                    headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy'
                },
                   
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
        
            setName('');
            setPhone('');
            setLocation('');
            navigate('/');
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
        <section >
            <h1>Add customer Page</h1>
            <br />
            <div>
            <h1> Add Customer</h1>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    id="Name"
                    ref={nameref}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />

                  <label htmlFor="Phone">Phone:</label>
                <input
                    type="text"
                    id="Phone"
                    ref={phoneref}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                />
                  <label htmlFor="Location">Location:</label>
                <input
                    type="text"
                    id="Location"
                    ref={locref}
                    onChange={(e) => setLocation(e.target.value)}
                    value={Location}
                    required
                />
                <button> In</button>
            </form>
            </div>
        </section>
    )
}

export default AddCustomer
