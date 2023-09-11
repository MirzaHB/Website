import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowLeft from "@material-ui/icons/ArrowLeftOutlined"
import ArrowRight from "@material-ui/icons/ArrowRightOutlined"
import "../styles/ProjectDisplay.css";
import ToTop from "../components/ToTop";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  
  const slideLeft =()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight =()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="imgContainer">
      <ArrowLeft onClick={slideLeft} />
        <div className="imgList" id="slider">
          {project.imageArr.map((item)=>(
            <img src={item} alt="project pic"/>
          ))}
        </div>
        <ArrowRight onClick={slideRight} />
      </div>
      <p style={{color:"#e9d35b"}}>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.link} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      <div className="about-me">
        <h2>About The project</h2>
          <p>{project.description}</p>
        </div>
        <ToTop/>
    </div>
  );
}

export default ProjectDisplay;
