import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import Admin from './pages/admin/Admin.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import Customer from './pages/customer/Customer.jsx';
import CustomerLogin from './pages/customer/CustomerLogin.jsx';
import Supplier from './pages/supplier/Supplier.jsx';
import SupplierLogin from './pages/supplier/SupplierLogin.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/supplier' element={<Supplier/>} />
        <Route path='/customer' element={<Customer/>} />

        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/customerlogin' element={<CustomerLogin/>} />
        <Route path='/supplierlogin' element={<SupplierLogin />} />
        {/* <Route element={<AdminProtector/>}>
        <Route path='/adminhome' element={<AdminHome />} />
        </Route>
        <Route element={<SuperadminProtector />}>
        <Route path='/superadminhome' element={<SadminHome />} />
        </Route> */}

      </Routes>
      {/* <Footer /> */}

    </BrowserRouter>
  </StrictMode>,
)
