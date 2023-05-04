import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import projectswup from '../../Assets/projectswup.png'
import carcar from '../../Assets/CarCar.png'
import conferencego from '../../Assets/conferencego.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "75%" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectswup}
                isBlog={false}
                title="Project Swüp"
                description={
                  <>
                    Project SWÜP was an application we created to address the problem of trash that is difficult to dispose of. We wanted to create a website where people could feel a sense of community, knowing that their trash is being disposed of ethically and efficiently.
                    <br />
                    <br />
                    Stack: Fast API, React, PostgresSQL, Bootstrap, Python, JavaScript
                  </>
                }
                // "Project SWÜP was an application we created to address the problem of trash that is difficult to dispose of. We wanted to create a website where people could feel a sense of community, knowing that their trash is being disposed of ethically and efficiently.{'\n'}Tech stack: Fast API, React, PostgresSQL, Boostrap, Python, JavaScript"
                ghLink="https://projectswup.gitlab.io/module3-project-gamma/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={carcar}
                isBlog={false}
                title="CarCar Co."
                description={
                  <>
                  CarCar Co. is an application that serves as an automobile dealership web-page. CarCar Co. features include inventory management, sales data/management, and vehicle service related management. Each feature is categorized into microservices that utilize RESTful APIs in order to send data between one another.
                    <br />
                    <br />
                    Stack: Django, React, PostgresSQL, Boostrap, Python, JavaScript
                  </>
                }
                ghLink="https://gitlab.com/chris_lee253/project-beta"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={conferencego}
                isBlog={false}
                title="Conference GO!"
                description={
                  <>
                  Conference Go is an application for organizing and managing conferences. Users can create, update, and delete conferences, as well as add new locations and presentations. The app uses third-party APIs to get weather information and photos based on the conference location.
                  <br />
                  <br />
                  Stack: Django, React, PostgresSQL, Boostrap, Python, JavaScript
                  </>
                }
                ghLink="https://gitlab.com/chris_lee253/fearless-frontend"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
