import React from 'react';
import '../../Stylesheets/ProjectCard.css';
import {Link} from 'react-router-dom';

export default function ProjectCard({projectTitle, stack, projectType, projectDescription, projectIcon, projectBackground}){
    
    return (
        <div className="swiper-img">
            <div className="ProjectCard">
                <div className="description">
                    <div className="discriptionBackground" style={projectIcon}></div>
                    <div className="descriptionContentWrapper">
                        <h1 className="descriptionTitle">{projectTitle}</h1>
                        <div className="projectCardStack">
                            {stack.map(icon=>{
                                return(
                                    <img src={icon} alt="v"/>
                                )
                            })}
                        </div>
                        <p className="projectType">{projectType}</p>
                        <p>{projectDescription}</p>
                        <Link to={`./${projectTitle}`} className="viewProjectButton">View Project</Link>
                    </div>
                </div>
                <div className="picture">
                    <img  src={projectBackground} alt="gif"/>
                </div>
            </div>
        </div>
    );
}