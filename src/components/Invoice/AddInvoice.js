import { useRef, useState,useEffect } from 'react';
import axios from '../../api/axios';
import { useContext } from "react";
import AuthContext from '../../context/AuthProvider';
import {  useNavigate } from 'react-router-dom';
import Moment from 'moment';
const INvoice_URL = '/invoice';
const CUSTOMER_URL = '/customer';
const De_URL = '/detail';
const AddInvoice = () => {
    const formatDate = Moment().format('YYYY-MM-DD')
    const [customerId, setCustomerId] = useState('');
    const [type1, settype1] = useState('');
    const [protype2, setprotype2] = useState('');
  const[listCustomer,setListCustomer]=useState([]);
    const[errMsg,setErrMsg]=useState('');
    const { auth } = useContext(AuthContext);
    const type1ref = useRef();
    const type2ref = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    useEffect  (()=>{
        axios.get(CUSTOMER_URL,{
     
     headers:{ 'Content-Type': 'application/json',
             'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy'
                 },}
     ).then(res=>{
   // console.log(res.data)

     setListCustomer(res.data)
 })
 .catch(err=>{
   // console.log(err)
})
 },[])





    const handleSubmit = async (e) => {
        e.preventDefault();
console.log(customerId,formatDate)
        try {
            
            const response = await axios.post(INvoice_URL,{customer_id:customerId,date:formatDate},
                {
                    headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy'
                },
                   
                }
            );

            const responseD = await axios.post(De_URL,{customer_id:customerId,date:formatDate},
                {
                    headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy'
                },
                   
                }
            );
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
        
          
            navigate('/');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(' Failed');
            }
            errRef.current.focus();
        }










    }


    return (
        <section >
    
            <div>
            <h1> Add Invoice</h1>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <form onSubmit={handleSubmit}>

                                <label htmlFor="Name"> Plese select Customer:</label>
                                <select className='form-select' onChange={(env)=>setCustomerId(env.target.value)} >

                            {  listCustomer.map((e)=>

                    <option value={e.customer_id} >{e.name}</option>
                                )}

                    </select>

                <label htmlFor="Name"> Type1 K:</label>
                <input
                    type="number"
                    id="Name"
                    ref={type1ref}
                    autoComplete="off"
                    onChange={(e) => settype1(e.target.value)}
                    value={type1}
                    required
                />
                  <label htmlFor="bb"> Type2 T:</label>
                <input
                    type="number"
                    id="bb"
                    ref={type2ref}
                    autoComplete="off"
                    onChange={(e) => setprotype2(e.target.value)}
                    value={protype2}
                    required
                />
             

                
              
                <button className='btn btn-dark'> Insert</button>
            </form>
            </div>
        </section>
    )
}

export default AddInvoice
