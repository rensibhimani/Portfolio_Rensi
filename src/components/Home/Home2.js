import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ImPointRight } from "react-icons/im";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>       
          <Row style={{ justifyContent: "center" }}>
            <Col md={10} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Hello!! <strong className="purple">Everyone</strong>
              </h1>
              <p className="home-about-body">
                {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ */}
                I am <span className="purple">Rensi Bhimani </span>
                from <span className="purple"> Gujarat, India.</span>
                <br />
                I have completed Computer Science Engineering at B.H.Gardi college, Gujarat.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple">  Javascript, React and more  </b>
                </i>
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products. </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">JavaScript</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js</b>
                </i>
                <br />
                <br />
                Apart from coding, some other activities that I love to do!

                
                  <p style={{ textAlign: "justify" }}>  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Graphic Design
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Photography
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Gaming
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Watching Movies
                    </li>
                  </ul>
                  <br />
                  <blockquote className="blockquote mb-0">
                  <p style={{ color: "rgb(155 126 172)" , textAlign: "center"}}>
                    "Strive to build things that make a difference!"{" "}
                  </p>
                  <footer className="blockquote-footer" style={{textAlign: "center"}}>Rensi Bhimani </footer>
                </blockquote>
              </p>              
            </Col>            
          </Row>
      </Container>
    </Container>
  );
}
export default Home2;
