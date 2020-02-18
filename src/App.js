import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name.js'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button,FormControl,Nav,Navbar , NavItem, NavDropdown, MenuItem,Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Weather from './components/Weather'
import Calendars from './components/Calendar'


class App extends Component  {
  
  constructor (props) {
    super(props)
  this.state = { 
    title : 'Eric Dearing',
   
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Eric Dearing',
        subTitle: 'Software Developer',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title : 'My Projects'
      },
      contact : {
        title : 'Contact Form'
      }
    }
  }
   
  
  
  // triggerAddTripState = () => {
  //   this.setState({
  //     ...this.state,
  //     isEmptyState: false,
  //     isAddTripState: true
  //   })
  // }

  render () {
  return (
    <div className="App">
      
      <Router>
        <Container className="py-0" fluid={true}>
          
          <Navbar className="border-bottom"  bg="transparent" expand="lg">
            <Navbar.Brand>Eric Dearing</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

           <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> 
          <Route path="/about" render={() => <AboutPage title={this.state.about.title } />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> 
           
        
        </Container>
      </Router>
      {/* <Weather updateWeather = {this.props.updateShow}/> */}
      <Calendars />
      {/* <Header /> */}

      {/* <h1>Eric Dearing</h1>
      {this.state.isEmptyState && <Header addTrip={this.triggerAddTripState} />}

      {this.state.isAddTripState && <Name />} */}

    </div>
  );
}
  }
export default App;
