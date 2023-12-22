import react from"react";
import'../../css/Register.CSS';
const Register =() =>{
   return (



<div className="Register-container">
    <h1>Registration Form</h1>
   

    <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="type" placeholder="full Name " />
       
      </Form.Group>
      <Form.Group className="mb-4" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="please enter your email" />
       
      </Form.Group>

      <Form.Group className="mb-5" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=" please enter your Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

   </div>
);   };
   export default Register