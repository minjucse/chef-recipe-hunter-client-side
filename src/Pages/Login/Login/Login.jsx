import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {

  const { signIn, signInGoogle, signInGitub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      });

  };

  const handleSignInGoogle = () => {
    signInGoogle()
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true })
      }).catch(error => {
        console.log('error', error.message);

      })
  };
  const handleSignInGitHub = () => {
    signInGitub().then(result => {
      const user = result.user;
      navigate(from, { replace: true })
    }).catch(error => {
      console.log('error', error.message);

    })

  };
  return (
    <Container className='w-50 wrap-login mx-auto '>
      <h3 className='form-title'>Please Login</h3>
      <Form onSubmit={handleLogin} className='login-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit" className='signin-button added-bg-btn'>
          Login
        </Button>
        <br />

        <div className="text-center sign-area">
          <span className="txt1">
            Or login with
          </span>
        </div>
        <div className="d-flex login-social">
          <button className="login-social-item" onClick={handleSignInGoogle}> <FcGoogle></FcGoogle></button>
          <button className="login-social-item" onClick={handleSignInGitHub}> <FaGithub></FaGithub></button>
        </div>
        <div className='text-center'>
          Don't Have an Account?
          <br></br>
          <Link to="/sign-up">
            Sign up now
          </Link>
        </div>

        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </Container>
  )
}

export default Login