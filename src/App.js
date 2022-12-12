import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import AddCustomer from './components/Costomer/AddCustomer';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import ShowCustomer from './components/Costomer/ShowCustomer';
import Edit from './components/Costomer/Edit';
import AddInvoice from './components/Invoice/AddInvoice';
import EditInvoice from './components/Invoice/EditInvoice';
import ShowInvoice from './components/Invoice/ShowInvoice';
import Users from './components/Users';
const ROLES = {
  'User': 2001,
  'Admin': 5150
}

function App() {

  return (
    <Routes>
      <Route path="/" element={  <Layout /> }>
        {/* public routes */}

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route >
          <Route path="/" element={<Home />} />
        </Route>

        <Route >
          <Route path="addcustomer" element={<AddCustomer />} />
        </Route>

        <Route>
          <Route path="user" element={<Users />} />
        </Route>


        <Route >
          <Route path="showcustomer" element={<ShowCustomer />} />
        </Route>

        <Route >
          <Route path="editcustomer/:id" element={<Edit />} />
        </Route>





        <Route >
          <Route path="addinvoice" element={<AddInvoice />} />
        </Route>

        <Route >
          <Route path="showinvoice" element={<ShowInvoice/>} />
        </Route>

        <Route >
          <Route path="editinvoice/:id" element={<EditInvoice />} />
        </Route>



        <Route >
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;