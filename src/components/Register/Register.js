import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const {signInUsingGoogle,setName,setEmail,setPassword,createNewUser}=useAuth();
  
  
  const handleUserName=e=>setName(e.target.value);
  const handleUserEmail=e=>setEmail(e.target.value);
  const handleUserPassword=e=>setPassword(e.target.value);


  const handleSubmit=e=>{
    e.preventDefault();
    console.log('heee');
    createNewUser();
  }

    return (
        <div>
                 <form className='mt-5' >
  <div className="mb-3">
    <input onBlur={handleUserName} type="name"  className='form-control' placeholder='Enter Your Name '/>
  </div>
  <div className="mb-3">
    <input onBlur={handleUserEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email ' required/>
  </div>
  <div className="mb-3">
    <input onBlur={handleUserPassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
  </div>
 
 <input type="button" value="Submit" onClick={handleSubmit}/>
 <p>  ---------------------------------or-------------------------------------
</p>

</form>
<Button className="mt-3 d-flex  mx-auto" variant="outline-warning" onClick={signInUsingGoogle}>Google SignIn</Button>

        </div>
    );
};

export default Register;