import React from 'react';
import { Jumbotron, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';

const card = {
    margin: '5rem auto',
    width: '600px',
    backgroundColor: '#f1f1f1',
    boxShadow: 'rgba(0,0,0,0.3) 0px 5px 5px 0px',
    zDepth: '1',
    fontWeight: '600',
    fontFamily: 'Lato'
}

const header = {
    textAlign: 'center',
    paddingBottom: '3rem',
    fontWeight: 'bold'
}

const my1 = {
    marginTop: '2rem',
    paddingTopBottom: '1rem',
    fontWeight: 'bold'
}

const needh = {
    textAlign: 'center',
    margin: '1rem auto',
    color: '#b2b2b2'
}

const fluid = {
    padding: '0',
    width: '100%'
}

const p3 = {
    padding: '2rem'
}

const full = {
    display: 'block'
}

const borb = {
    border: '0px',
    borderBottom: '1px solid #a2a2a2',
    backgroundColor: '#f1f1f1',
    borderRadius: '0px',
    marginTop: '1rem'
}

export default class Col2 extends React.Component {
    render() {
        return(
                <Row style={fluid}>

                    <Col>
                    <Jumbotron style={card}>
                    <h2 style={header}>Login with your Account</h2>
                        <Form>
                            <FormGroup row>
                            
                            <Col md={12}>
                                <Input style={full, p3, borb} type="text" name="username" id="username" placeholder="Username" bsSize="lg" />
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                            
                            <Col md={12}>
                                <Input style={full, p3, borb} type="password" name="pass" id="pass" placeholder="Password" bsSize="lg"/>
                            </Col>

                            <Col md={12}>
                            <Button color="primary" block style={my1} size="lg">Sign In</Button>
                            </Col>

                            <p style={needh}><a href='App.js'>Need Help?</a></p>

                            </FormGroup>
                        </Form>
                    </Jumbotron>
                    <p style={needh}>Design By Muhammad Ilham Julianto</p>

                    </Col>
                </Row>
        );
    }
}