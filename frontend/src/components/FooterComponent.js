import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
        <div className="container">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Project Details</h5>
                <p>Back-end technologies: Java(Spring Boot, MVC & Security), MySQL & Hibernate ORM</p>
                <p>Front-end technologies: JavaScript(React.js)</p>
            </MDBCol>
            <MDBCol md="6" className="float-right">
              <h5 className="title">My Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.linkedin.com/feed/?trk=onboarding-landing">LinkedIn</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://gist.github.com/Vasyl20">GitHub</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
        </div>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href=""> Vasyl Sivitskyi</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
export default class FooterComponent extends React.Component {
    

    render() {
        return (
            FooterPage()
        )
    }
}