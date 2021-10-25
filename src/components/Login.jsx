import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';

const Login = (props) => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState(props.type);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    var student, buttonColor, buttonText, crudFunction, requireUsername, confirmationText, isUpdating;

    switch (type) {
        case 'login':
          buttonColor = 'primary';
          buttonText = 'Login';
          requireUsername = false;
          isUpdating = false;
          confirmationText = 'Login';
          //crudFunction = props.handleUpdate;
          //user = {};
          break;
        case 'create':
          buttonColor = 'primary';
          buttonText = 'Create an account';
          requireUsername = true;
          isUpdating = false;
          confirmationText = 'Create account';
          //crudFunction = (user) => { createUser(user); }
          //user = props.user;
          break;
        case 'update':
          buttonColor = 'primary';
          buttonText = 'User Settings';
          requireUsername = true;
          isUpdating = true;
          confirmationText = 'Save Changes';
          //crudFunction = props.handleUpdate;
          //user = {};
          break;
        default:
      }
  
    return (
      <>
        {<Button variant={buttonColor} onClick={handleShow}>
          {buttonText}
        </Button>}
  
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{buttonText}</Modal.Title>
          </Modal.Header>
          <Modal.Body><LoginForm type={buttonText} requireUsername={requireUsername} confirmationText={confirmationText} isUpdating={isUpdating}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Login;