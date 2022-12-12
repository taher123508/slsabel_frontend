import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
const CUSTOME_URL='http://127.0.0.1:8000/api/customer/'
const Edit = ()=>{

    const { id } = useParams(); 
    const [isWaiting, setIsWaiting] = useState(true);
  
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [loc, setloc] = useState('')
    const [watingServer, setWatingServer] = useState(false)
    const navigator = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            fetch(CUSTOME_URL+3,{
     
                headers:{ 'Content-Type': 'application/json',
                                'Authorization': 'Bearer 2|63g8bTWlqXqZDpllRpsA6ooG51Vrb42dlCfS6gKi', 
                            },})
                .then(response => {
                    console.log(response.ok)
                    if (!response.ok) {
                        throw Error('Can not connect to the server!.');
                    }
                    return response.json();
                })
                .then(data => {
                   setname(data.name);
                   setphone(data.phone);
                   setloc(data.location)
              
                }).catch(e => {
                    console.log(e.message); 
                });
        }, 2000);

    }, []);



    const mySubmit = (e)=>{
        e.preventDefault();
        const mycustomer = {
            id,
            name,phone,loc
        }
        console.log(mycustomer)

        setWatingServer(true);
        setTimeout(() => {
          fetch(CUSTOME_URL+id,{
            method: 'PATCH',
            data: JSON.stringify(mycustomer),
                headers:{ 'Content-Type': 'application/json',
                                'Authorization': 'Bearer 2|63g8bTWlqXqZDpllRpsA6ooG51Vrb42dlCfS6gKi', 
                            },})
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                console.log('new  updated');
                setWatingServer(false);
                navigator('/')
            });
        }, 2000);
       


    }
    return(
<>
            {isWaiting && <h1>Please wait to load data ...{id}</h1>}

            <section >
            <h1>Edit customer Page</h1>
            <br />
            <div>
            <h1> Edit Customer</h1>

            <form onSubmit={mySubmit}>
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    id="Name"
                  
                    autoComplete="off"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    required
                />

                  <label htmlFor="Phone">Phone:</label>
                <input
                    type="text"
                    id="Phone"
                 
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                    required
                />
                  <label htmlFor="Location">Location:</label>
                <input
                    type="text"
                    id="Location"
                   
                    onChange={(e) => setloc(e.target.value)}
                    value={loc}
                    required
                />
         
                <div className="col-auto">
                    {!watingServer && <button type="submit" className="btn btn-success mb-3">Update  </button>}
                    {watingServer && <button type="button" className="btn btn-success mb-3" disabled>Please wait</button>}
                </div>


              
            
                </form>
            </div>
        </section>
        </>
    );
}

export default Edit;