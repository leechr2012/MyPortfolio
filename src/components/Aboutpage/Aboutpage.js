import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Greetings and welcome! I am Christian Lee, a versatile professional with a wealth of experience in the technology space. As a Full Stack Software Engineer, I specialize in application development and software testing. Additionally, I have over five years of experience in various roles within the SaaS space. Roles such as Solutions Consultant, Account Executive, Account Manager, and Customer Success Manager. This unique blend of expertise has honed my problem-solving skills, analytical thinking, as well as my communication and organizational abilities. If you would like to know more, please do not hesitate to reach out!
                        </p>
                        <p>Email: leechr2012@gmail.com</p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>React Js</li>
                                    <li>Fast API</li>
                                    <li>REST API</li>
                                    <li>Agile</li>
                                </Col>
                                <Col md={5}>
                                    <li>Django</li>
                                    <li>HTML/CSS</li>
                                    <li>React-Bootsrap</li>
                                    <li>SQL</li>
                                    <li>NoSQL</li>
                                    <li>Git</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5} classNmae='my-column'>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
