import React from 'react';
import '../../Stylesheets/Project.css';
import {HashLink as Link} from 'react-router-hash-link';

export default function Project({Title, Stack, ProjectParams, ProjectLinks, ProjectDescription, ProjectBackground, ProjectIcon}){
    
    return (
        <div className='Project' style={{backgroundImage:`url(${ProjectBackground})`}}>
        <div className='projectBackground' style={{backgroundImage:`url(${ProjectIcon})`}}></div>
        <div className='projectCard'>
            <div className='projectContent'>
                <Link className='backLink' to='/#PORTFOLIO'>BACK</Link>
                <h1 className='projectTitle'>{Title}</h1>
                <div className='projectStack'>
                    {Stack.map((icon)=>{
                        return(
                            <img src={icon} alt='icon'/>
                        );
                    })}
                </div>
                <div className='projectParams'>
                    {ProjectParams.map(param=>{
                        let paramKeyValue = Object.entries(param)[0];
                        return(
                                <p><b>{paramKeyValue[0]}</b>{paramKeyValue[1]}</p>
                        );
                    })}
                    {ProjectLinks.map(link=>{
                        let linkKeyValue = Object.entries(link)[0];
                        return(
                            <p><b>{linkKeyValue[0]}</b><a href={linkKeyValue[1]} rel='noopener noreferrer' target='_blank'>Click Here</a></p>
                        );
                    })}
                </div>
                <div className="projectSeparator"></div>
                <div className="projectDescription">
                    <p>{ProjectDescription}</p>
                </div>
            </div>
        </div>
    </div>
    );
}