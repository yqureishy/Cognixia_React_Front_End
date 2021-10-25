import React, {useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';
import Login from './Login';

const NavigationBar = (props) => {
    // State contains values for search bar to pass back up to App
    const [searchValue, setSearchValue] = useState('');
  
    // State changes logged to pass back up to app when search button is clicked
    const handleSearch = (evt) => {
      evt.preventDefault();
      props.search(searchValue, true);
    }

    let loggedIn = false;
  
    console.log(searchValue);
  
    return (
      <Navbar className="color-nav" variant="dark" sticky='top'>
        <Navbar.Brand>Eatopedia</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#popular">Popular</Nav.Link>
          <Nav.Link href="#recent">Recently reviewed</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSearch}>
          <div class="row">
          <div class="col">
          <FormControl  type="text" placeholder="Search by name" className="mr-sm-2" onChange={e=>setSearchValue(e.target.value)} />
          </div>
          <div class="col">
          <Button variant="info" type='submit'>Search</Button>
          </div>
          </div>
        </Form>
        { !loggedIn &&
          <div>
            <Login type='login' />
            <Login type='create' />
          </div>
          }

          { loggedIn &&
          <div>
            <Login type='update' />
            <Button variant="warning" type='logout'>Logout</Button>
          </div>
          }
      </Navbar>
    );
  }

export default NavigationBar;