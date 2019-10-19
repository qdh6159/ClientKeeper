import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Row, Col } from "shards-react";


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      first_name: false,
      last_name: "",
      last_contact: "",
      notes: ""
     };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleChange = (e) => {
    this.setState ({
        [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPlant(this.state)
}

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}> + New Client</Button>
        <Modal  open={open} toggle={this.toggle}>
            <ModalHeader>+ New Client 🌿</ModalHeader>
            <ModalBody>👋 </ModalBody>
          
            <Container>
                
                    <Col >
                    <Form onSubmit={this.handleSubmit}>

                        
                        <FormGroup>
                            <label htmlFor="first_name">First Name</label>
                            <FormInput onChange={this.handleChange} name="first_name" id="first_name" placeholder="First Name" />
                        </FormGroup>
                
                        <FormGroup>
                            <label htmlFor="last_name">Last Name</label>
                        <FormInput onChange={this.handleChange} name="last_name" id="last_name" placeholder="Last Name" />                       
                        </FormGroup>

                        
                        

                        {/* <FormGroup>
                            <label htmlFor="water">Portfolio Value</label>
                            <FormInput onChange={this.handleChange} name="water" id="water" placeholder="Portfolio Value" />
                        </FormGroup> */}

                             
                        
                        
                        

                        <FormGroup>
                        <label htmlFor="notes">Notes</label>
                        <FormTextarea size="lg" onChange={this.handleChange} name="notes" placeholder="Notes"/> 
                        </FormGroup>

                        
                        

                        
                        <FormGroup>
                            <label htmlFor="last_contact">Last Contact</label>
                            <FormInput onChange={this.handleChange} type="text" name="last_contact" id="last_contact" placeholder="Last Contact" />
                        </FormGroup>
                        

                      
                        <br></br>
                        <Button block type="submit">Save</Button>
                        
                        <br></br>          
                    </Form>
                    </Col>
            </Container>
            </Modal>
      </div>
    );
  }
}