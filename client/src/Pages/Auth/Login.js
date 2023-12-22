
import react from"react";
import'../../css/Login.CSS';
const Login =() =>{
   return (<div className="login-container">
    <h1>Login Form</h1>
   

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

   </div>
   );
};
export default Login;