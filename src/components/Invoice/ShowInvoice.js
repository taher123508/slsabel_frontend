import { counter } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import {  Link,useNavigate } from "react-router-dom";
import axios from '../../api/axios';
const CUSTOME_URL = '/invoice';

const ShowCustomer = () => {

    const [customer, setCustomer] = useState([]);
    const [lood, setlood] = useState(false);



    const navigator = useNavigate();
    const deleteAction = (id) => {
        fetch('http://127.0.0.1:8000/api/invoice/' + id, {
            method: 'DELETE',
            headers:{ 'Content-Type': 'application/json',
            'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy'

    }
        }).then(() => {
            
            navigator('/')
        });
    }
useEffect  (()=>{
       axios.get(CUSTOME_URL,{
    
    headers:{ 'Content-Type': 'application/json',
    'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy' 
                },}
    ).then(res=>{
    console.log(res)
    setlood(true);
    setCustomer(res.data)
})
.catch(err=>{console.log(err)})
})
    


    return (
          <div className='row '>

                    {  customer.map(customer=>

                    <>
                    <div className="card mt-2 mb-7  m-auto col-3 btn  " >

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
                    {/* <img src="person.jpeg" className="card-img-top " alt="..."/> */}
                    <div className="card-body">
                    <h5 className="card-title">{customer.customer_id}</h5>
                    <h6 className="card-text">{customer.date}</h6>
                   <br/>
                    <Link to={"/editcustomer/" + customer.customer_id} className="btn btn-success ">Edit</Link>
                    <Link onClick={() => deleteAction(customer.customer_id)} className="btn btn-danger m-2">Delete</Link>

                    </div>
                    </div>
            </>
            
            
            )}
        
      </div>
    
    )
}

export default ShowCustomer
