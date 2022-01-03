import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle,formLogIn,setEmail,setPassword}=useAuth();

  const handleUserEmail=e=>setEmail(e.target.value);
  const handleUserPassword=e=>setPassword(e.target.value);

  const handleLoginForm=(e)=>{
     e.preventDefault();
    formLogIn();
  }
    return (
      <div>
        <h3>Please LogIn</h3>
        <div style={{height:'60vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
          
            <form>
  <div className="mb-3">
    <input type="email" onBlur={handleUserEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email '/>
  </div>
  <div className="mb-3">
    <input type="password" onBlur={handleUserPassword} className="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
  </div>

  <Button type="submit" className="btn btn-primary" variant="warning" onClick={handleLoginForm} >LogIn</Button>
 <p>  ---------------------------------or-------------------------------------
</p>
  <Button className="mt-3 d-flex  mx-auto" variant="outline-warning" onClick={signInUsingGoogle}>Google SignIn</Button>
</form>
        </div>
        <p>New User? <Link to='/register'>Register now!</Link> </p>
        </div>
    );
};

export default Login;