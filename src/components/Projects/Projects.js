import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todolist from "../../Assets/Projects/home.png";
import quiz from "../../Assets/Projects/quiz.png";
import weather from "../../Assets/Projects/weather.png";
import grade from "../../Assets/Projects/student.png";
import qrcode from "../../Assets/Projects/main.png";
import watch from "../../Assets/Projects/watch.png";
import quote from "../../Assets/Projects/quote.png";
import tictactoe from "../../Assets/Projects/result.png";
import age from "../../Assets/Projects/age.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-tac-toe"
              description="One player plays X and the other plays O. The players take turns placing their marks on a grid of three-by-three cells. If a given player gets three marks in a row horizontally, vertically, or diagonally, then that player wins the game."
              ghLink="https://github.com/rensibhimani/tic_tac_toe_game"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="Welcome to QuizMaster, the ultimate trivia experience designed to challenge, educate, and entertain. Whether you're a seasoned quiz enthusiast or a casual learner, QuizMaster is your passport to a world of diverse and engaging quizzes that span a multitude of topics."
              ghLink="https://github.com/rensibhimani/QuizMania"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Quote Generate"
              description="Quiz Application is a collection of number of different types of quizzes like technical, games, sports, etc. A user can access/play all of the quiz and can attempt any of the one. There will be limited number of questions and for each correct answer user will get a credit score."
              ghLink="https://github.com/rensibhimani/QuoteMania"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A weather app can use US government data (and many do, The Guardian reported) which is free to use for any purpose, according to the National Weather Service's website. They can then make money by using your location data, feeding in ads, or charging for fun add-ons such as customization and sharing options."
              ghLink="https://github.com/rensibhimani/weather_kitty"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="Stop Watch"
              description="Pressing the top button starts the timer running, and pressing the button a second time stops it, leaving the elapsed time displayed. A press of the second button then resets the stopwatch to zero. The second button is also used to record split times or lap times."
              ghLink="https://github.com/rensibhimani/Stop_watch"
              
            />
          </Col>
 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrcode}
              isBlog={false}
              title="QR Code"
              description="Each QR code is based on a matrix barcode, which can be read by any mobile device with a camera. These codes are typically in a small white square box with black geometric shapes inside of it. This is by design and intential in that these codes, due to their unique design, are eye catching to those walking by."
              ghLink="https://github.com/rensibhimani/QR_Code"              
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="Age Calculator"
              description="Age Calculator is an android app developed for the purpose of calculating exact age of user. The application woks on any android devices fulfilling the basic requirement of app. It mainly focuses at determination of exact age of user depending upon the input date of birth."
              ghLink="https://github.com/rensibhimani/age_calculator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To Do List App"
              description="To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do."
              ghLink="https://github.com/rensibhimani/To_Do_List"
    
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grade}
              isBlog={false}
              title="Grade Calculator"
              description="Welcome to the Grade Calculator, your ultimate tool for effortlessly managing and predicting your academic success. This comprehensive app is designed to empower students by providing a quick and accurate way to calculate grades, plan assignments, and stay on top of academic goals."
              ghLink="https://github.com/rensibhimani/Grade_calculate"
              
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
