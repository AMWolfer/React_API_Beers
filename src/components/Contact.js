import React from 'react';
import {Form, Button, Col} from "react-bootstrap";
import logo from '../logo.svg';


class Contact extends React.Component {
   
    state = {
        name: "",
        date: ""
    };

    handleSubmit = (event) => {
        const json = {
            name: event.target[0].value,
            date: event.target[1].value
        }

        this.setState({name: event.target[0].value, date: event.target[1].value})

        console.log(json);
        console.log(event);
        event.preventDefault();
   }

    render(){
        return(
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
        <p>Formulaire pour fixer un r-v</p>    
        <br/>  
        <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="mid">
                            <Form.Label>Nom </Form.Label>
                            <Form.Control required type="id" />
                        </Form.Group>
                        <br/>
                        <Form.Group  as={Col} controlId="joiningDate">
                            <Form.Label>Date </Form.Label>
                            <Form.Control required type="date" />
                        </Form.Group>
                        <br/>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br/>
                </Form>
                <br/>
                <p>Le contenu des variables est: Name= {this.state.name} and Date= {this.state.date}</p>
        </header>      
        </div>
        )
    }
}

  export default Contact;