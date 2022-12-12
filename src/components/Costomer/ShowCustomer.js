import { counter } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import {  Link,useNavigate } from "react-router-dom";
import axios from '../../api/axios';
const CUSTOME_URL = '/customer';

const ShowCustomer = () => {

    const [customer, setCustomer] = useState([]);
    const [lood, setlood] = useState(false);



    const navigator = useNavigate();
    const deleteAction = (id) => {
        fetch('http://127.0.0.1:8000/api/customer/' + id, {
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
    'Accept': 'application/json',

        'Authorization': 'Bearer 2|nhd0Ent62utA2VgLXPuVhneRkgLpaVrAj7U4UXqy'
                },}
    ).then(res=>{
    console.log(res)
    setlood(true);
    setCustomer(res.data)
})
.catch(err=>{console.log(err)})
},[])
    


    return (
                    <div className='row '>
           {lood ? (
                   customer.map(customer=>

                    <>
                    <div className="card mt-2 mb-7  m-auto col-3 btn  " >
                    <img src="person.jpeg" className="card-img-top " alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{customer.name}</h5>
                    <h6 className="card-text">{customer.location}</h6>
                    <h5 href="#" className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> {customer.phone}</h5><br/>
                    <Link to={"/editcustomer/" + customer.customer_id} className="btn btn-success ">Edit</Link>
                    <Link onClick={() => deleteAction(customer.customer_id)} className="btn btn-danger m-2">Delete</Link>

                    </div>
                    </div>
            </>
            
            
            )
            ) : (
               <>
              <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
               
               </>
            )}
      </div>
    
    )
}

export default ShowCustomer
