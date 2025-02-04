import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function Login() {
  const [newUser, setNewUser] = useState(false);
  return (
    <div class="container p-0"> 
    <h4 class= "text-center m-4 mb-3" style={{"color": "#fff", "margin": "auto"}}>Please enter your login details</h4>  
    <div style={{"width": "500px", "height": "390px", "margin": "auto"}}>
       <Form className="p-3" style={{"background-color": "#ffff", "margin": "auto", "border-radius": "15px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {newUser && (<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Retype Password" />
        </Form.Group>)}
        <div class="d-flex flex-row">
          <div style={{"width": "58%"}}>
            <a href='/' class="btn btn-primary" style={{"background-color": "#006D5B", "color": "#ffff"}}>
                Submit
            </a>
          </div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Text>New User?</Form.Text>
            <a onClick={e => setNewUser(true)} class="btn btn-primary ms-1" style={{"background-color": "#006D5B", "color": "#ffff"}}>
              Register Here
            </a>
          </Form.Group>
        </div>
         
      </Form>
    </div>
    </div>
  );
}
export default Login;
