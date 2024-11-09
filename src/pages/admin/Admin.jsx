import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './admin.scss'
import '/src/index.scss';
import '/src/App.scss'
import { useState,useEffect } from 'react';

export default function Admin() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [admin,setAdmin]=useState({});
    const [supplier,setSupplier]= useState([{}]);

    useEffect(() => {
        getadmindetail()
        getsupplierdetail()
      }, []);

    const  getadmindetail= async()=>{
        try{
           let result= await fetch('http://localhost:7000/admin/getadmindetail',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
           });
           result= await result.json();
           setAdmin(result)
        }catch(err){
            console.log(err)
        }
    }

    const getsupplierdetail=async()=>{
        try{
            let result= await fetch('http://localhost:7000/supplier/getsupplierdetail',{
             method:'GET',
             headers:{'Content-Type':'application/json'}
            });
            result= await result.json();
            setSupplier(result)
           console.log(result)
         }catch(err){
             console.log(err)
         }
    }

    const signup = async () => {
        try {
            hideform();
            let result = await fetch('http://localhost:7000/supplier/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, mobile, address, password })
            });
            console.log(result)
            alert(result.msg);
        } catch (err) {
            console.log(err)
        }
    }
    const displayform = () => {
        let form = document.getElementById('addadminform');
        form.style.display = 'block'
    }
    const hideform = () => {
        document.getElementById('addadminform').style.display = 'none'
    }
    return (
        <>
        

            <div className="container ms-0 me-0" style={{ maxWidth: '100%' }}>
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-0 m-0 p-0">
                        <div className="page admins">
                            <div className=" d-flex flex-column align-items-center">
                                <img src="" alt="" style={{ height: '10vw', width: '10vw', borderRadius: '50%' }} />
                                <div className='bg-white dc p-0 w-100' style={{ borderRight: '2px solid navy' }}>
                                    <h2 className='mb-0 mt-0 pt-0 ps-4 pe-4'>{admin.adminName}</h2>
                                    <p className="fs-6 pb-0 mb-0">Role: Admin</p>
                                </div>
                            </div>
                            <div className="admins ps-4">

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-3 col sm-12" style={{ marginTop: "10px" }}>

                    <h1>Welcome To admin Home Page</h1>
            <Button className='btn addbtn mt-3' onClick={displayform}>Add New Supplier</Button>
            {/* ---------------add supplier---------- */}
            <div className="loginForm2 dfdc jcac w-100" id='addadminform' style={{ display: 'none', position: 'absolute', maxWidth: '50vw', left: '25%' }}>
                <div className="login_field login_field2 dfdc jcac">
                    <h2 className="fw-bold login_title"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                    </svg>Register new Supplier</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="dfdc">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                                    <label htmlFor="Mobile Number">Mobile Number</label>
                                    <input type="text" id="directorPassword" onChange={(e) => setMobile(e.target.value)} placeholder="9999999999" />
                                    <div>
                                        <label htmlFor="profilephoto">Profile Photo</label>
                                        <input type="file" onChange={(e) => setImgUrl(e.target.files[0])} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="dfdc">
                                    <label htmlFor="directorEmail">Enter Address</label>
                                    <input type="text" id="directorEmail" onChange={(e) => setAddress(e.target.value)} placeholder="Noida" />
                                    <label htmlFor="directorPassword2">Enter Password</label>
                                    <input type="text" id="directorPassword2" onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                                </div>
                            </div>
                            <div className="text-center">
                                <Button className='me-4 btn btn-primary mt-4 ps-4 pe-4' onClick={signup}>Register</Button>
                                <Button className='btn btn-primary mt-4 ps-4 pe-4' onClick={hideform}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-0 m-0 p-0">
                        <div className="page">
                            <div className="admins">
                                <div className='bg-white dr'><h4 className='mt-2'>Admins</h4></div>
                                {/* <button className='btn addbtn mt-3' onClick={displayform}>Add New Admin</button> */}
                                <ul>
                {supplier.map((s) => (
                  <li>
                    <p>{s.name}</p>
                    {/* <Dropdown as={ButtonGroup} className='adminbtn'>
                      <Button style={{ color: admin.isActive ? 'white' : '#ababab', }} className='adminname d-flex justify-content-evenly'> <img src={admin.imgUrl} alt="" style={{ height: '28px', width: '28px', borderRadius: '50%' }} /> {admin.adminName}</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{ background: 'midnightblue', width: '10px' }} />
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => removeadmin(admin.email)}>Remove</Dropdown.Item>

                        {admin.isActive ? <Dropdown.Item onClick={() => deactivate(admin.email)}>Deactivate</Dropdown.Item> :
                          <Dropdown.Item onClick={() => activate(admin.email)}>Activate</Dropdown.Item>}
                      </Dropdown.Menu>
                    </Dropdown> */}
                  </li>
                ))}
              </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}