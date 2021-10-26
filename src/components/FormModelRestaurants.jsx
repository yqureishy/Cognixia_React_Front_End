import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createRestaurant } from '../services/ReviewService';
import RestaurantForm from './RestaurantForm';

const FormModalRestaurants = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var restaurant, buttonColor, buttonText, crudFunction;

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'create':
      buttonColor = 'primary';
      buttonText = type.toString().toUpperCase();
      crudFunction = (restaurant) => { createRestaurant(restaurant); }
      restaurant = {};
      break;
    case 'update':
      buttonColor = 'warning';
      buttonText = type.toString().toUpperCase();
      crudFunction = props.handleUpdate;
      restaurant = props.restaurant;
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
          <Modal.Title>{buttonText + ' restaurant'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><RestaurantForm restaurant={restaurant} handleCrud={crudFunction} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModalRestaurants;