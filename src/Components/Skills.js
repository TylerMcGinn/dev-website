import React,{useState, useEffect} from 'react';
import '../Stylesheets/Skills.css';
import js from '../Media/Icons/javascript.png';
import html from '../Media/Icons/HTML.png';
import css from '../Media/Icons/CSS.png';
import ts from '../Media/Icons/typescript.png';
import cs from '../Media/Icons/cs.png';
import sql from '../Media/Icons/sql.png';
import php from '../Media/Icons/php.png';
import python from '../Media/Icons/python.png';
import node from '../Media/Icons/nodejs.png';
import git from '../Media/Icons/Git.png';
import express from '../Media/Icons/express.png';
import react from '../Media/Icons/react.png';
import xamarin from '../Media/Icons/xamarin.png';
import jquery from '../Media/Icons/jquery.png';
import jest from '../Media/Icons/jest.png';
import ps from '../Media/Icons/ps.png';
import xd from '../Media/Icons/xd.png';
import postman from '../Media/Icons/postMan.png';
 

export default function Skills({viewState}){

    const [skillsState, setSkillsState] = useState({transition:'opacity 1s', opacity:'0'});


    useEffect(()=>{
        if(viewState[1].Skills.display !== 'none'){
            setTimeout(() => {
                setSkillsState({transition:'opacity 1s', opacity:'1'});
            }, 500);
        }
        else{
            setSkillsState({transition:'opacity 1s', opacity:'0'});
        }
    },[viewState]);

    
    return (
        <div className="Skills" style={viewState[1].Skills}>
        <div className="skillsWrapper" style={skillsState}>
            <h1>SKILLS</h1>
            <div className="separator"></div>
            <h2>LANGUAGES</h2>
            <div className="languages" >
                <li className="gridItems">Javascript<img src={js} alt="Javascript"/></li>
                <li className="gridItems">HTML<img src={html} alt="HTML"/></li>
                <li className="gridItems">CSS<img src={css} alt="CSS"/></li>
                <li className="gridItems">Typescript<img src={ts} alt="Typescript"/></li>
                <li className="gridItems">C#<img src={cs} alt="C#"/></li>
                <li className="gridItems">SQL<img src={sql} alt="SQL"/></li>
                <li className="gridItems">PHP<img src={php} alt="PHP"/></li>
                <li className="gridItems">Python<img src={python} alt="Python"/></li>
            </div>
            <div className="separator"></div>
            <h2>FRAMEWORKS</h2>
            <div className="languages">
                <li className="gridItems">Jquery<img src={jquery} alt="Jquery"/></li>
                <li className="gridItems">Xamarin<img src={xamarin} alt="Xamarin"/></li>
                <li className="gridItems">NodeJs<img src={node} alt="NodeJs"/></li>
                <li className="gridItems">React<img src={react} alt="React"/></li>
                <li className="gridItems">ExpressJs<img src={express} alt="ExpressJs"/></li>
                <li className="gridItems">Jest<img src={jest} alt="Jest"/></li>
            </div>
            <div className="separator"></div>
            <h2>TOOLS</h2>
            <div className="languages">
                <li className="gridItems">Adobe Photoshop<img src={ps} alt="Adobe Photoshop"/></li>
                <li className="gridItems">Adobe XD<img src={xd} alt="Adobe XD"/></li>
                <li className="gridItems">Git<img src={git} alt="Git"/></li>
                <li className="gridItems">Postman<img src={postman} alt="Git"/></li>
            </div>
            </div>
        </div>
    );
}