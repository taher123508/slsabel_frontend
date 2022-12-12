import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section className="sec">


            <h1>Home</h1>
            <br />

            <div class="card">
                <div class="card-header bg-info">
                    Customer
                </div>
                <div class="card-body  ">
                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title">Add Customer</h5>
                            <p class="card-text">Here new customers are added.</p>
                            <Link to="/addcustomer" className="btn btn-primary ender">Go to the This page</Link>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Show All Customer</h5>
                            <p class="card-text">Here all customers are displayed.</p>
                            <Link to="/showcustomer" className="btn btn-primary ender">Go to the This page</Link>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Edit Customer</h5>
                            <p class="card-text">Here customer information is modified</p>
                            <Link to="/showcustomer" className="btn btn-primary ender">Go to the This page</Link>
                        </div>
                    </div>




                </div>
            </div>
            <br />

            {/* ///////////////////////////////////////////// */}





            <div class="card">
                <div class="card-header bg-info">
                    Invoice
                </div>
                <div class="card-body  ">
                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title">Add Invoice</h5>
                            <p class="card-text">Here new Invoice are added.</p>
                            <Link to="/addinvoice" className="btn btn-primary ender">Go to the This page</Link>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Show All Invoice</h5>
                            <p class="card-text">Here all Invoice are displayed.</p>
                            <Link to="/showinvoice" className="btn btn-primary ender">Go to the This page</Link>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Edit Invoice</h5>
                            <p class="card-text">Here Invoice information is modified.</p>
                            <Link to="/showinvoice" className="btn btn-primary ender">Go to the This page</Link>
                        </div>
                    </div>




                </div>
            </div>

            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
