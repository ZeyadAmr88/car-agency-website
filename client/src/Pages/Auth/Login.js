
import react from"react";
import'../../css/Login.CSS';
const Login =() =>{
   return (
   <div className="login-container">
    <h1>Login Form</h1>
   

    <Form>
    

      <Form.Group className="mb-1" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="please enter your email" />
       
      </Form.Group>

      <Form.Group className="mb-2s" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=" please enter your Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

   </div>
   );
};
export default Login;