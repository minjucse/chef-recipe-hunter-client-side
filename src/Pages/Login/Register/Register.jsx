import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';

export const Register = () => {

  const { createUser,updateUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;

        updateUser(name, photo).then(console.log(createdUser)).catch(error => {
          console.log(error);
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  return (
    <Container className='w-50 mx-auto wrap-login'>
      <h3 className='form-title'>Please Register</h3>
      <Form onSubmit={handleRegister} className='login-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo URL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit"className='signin-button added-bg-btn' >
          Register
        </Button>
        <br />
        <div className='text-center mt-3'>
        Already Have an Account?
          <br></br>
          <Link to="/sign-in">Sign In Now</Link>
        </div>
        
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </Container>
  )
}
