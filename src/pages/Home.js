import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import TypeWriter from "typewriter-effect"
import "../styles/Home.css";
import ToTop from "../components/ToTop";

function Home() {
  const email = "hassan.baig@ucalgary.ca";
  return (
    <div className="home">
      <div className="intro">
        <img src="/profilePic.png" alt="Profile Pic"/>
      <div className="typewriter">
        <h2> Hello I am...</h2>
        <p>
          <TypeWriter
          options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              "Hassan Baig",
              "A Software Engineer",
              "A coffee addicted, animal loving, software nerd"
            ]
          }}
          />
        </p>
        </div>
      <div className="prompt">
        <p>Feel free to connect with me and explore my work!</p>
        <a href="https://www.linkedin.com/in/mirza-hassan-baig-a33780229/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{cursor:"pointer"}}/>
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <EmailIcon style={{cursor:"pointer"}} />
        </a>
        <a href="https://github.com/MirzaHB" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{cursor:"pointer"}} />
        </a>
      </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
          <p>
          When I first started my academic journey, I wasn't sure if software engineering was the right path for me.
          But as I got deeper into it, I realized how much I loved it. Instead of seeing the challenges as roadblocks, I saw them as exciting problems to solve.
          Late nights of coding and constant learning became my norm, and I developed a real passion for technology.
          Software engineering isn't just a job for me; it's a way to follow my passion. 
          I'm excited to use technology to solve problems and make a difference in the world.
          </p>
          <p>
          As I enter my third year of pursuing a software engineering degree, I couldn't be happier with my decision to enter this field.
          What started as a tentative choice has blossomed into a true passion.
          Through a combination of coursework, personal projects, and even joining a club that builds and programs drones,
          I've gained invaluable hands-on experience that has fueled my love for software development.
          </p>
        </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
        <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, Sql, Assembly</span>
          </li>
          <li className="item">
            <h2> Frameworks and Libraries</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, NPM,
              TailwindCSS, BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>
              Git, GitHub, Google Cloud, VSCode, Terminal
            </span>
          </li>
        </ol>
      </div>
      <ToTop/>
    </div>
  );
}

export default Home;
