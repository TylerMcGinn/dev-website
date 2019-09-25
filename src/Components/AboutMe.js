import React,{useState, useEffect} from 'react';
import '../Stylesheets/AboutMe.css';
import me from '../Media/meCompressed.jpg';

export default function AboutMe({viewState}){
    
    const [aboutMeState, setAboutMeState] = useState({transition:'opacity 1s', opacity:'0'});


    useEffect(()=>{
        if(viewState[0].AboutMe.display !== 'none'){
            setTimeout(() => {
                setAboutMeState({transition:'opacity 1s', opacity:'1'});
            }, 500);
        }
        else{
            setAboutMeState({transition:'opacity 1s', opacity:'0'});
        }
    },[viewState]);

    
    return (
        <div className="AboutMe" style={viewState[0].AboutMe}>
            <div className="aboutMeContentWrapper" style={aboutMeState}>
                <div className="aboutMeText">
                    <h1>ABOUT ME</h1>
                    <p>
                        Hi I'm Tyler, A former electronics 
                        engineering student and NDT technician 
                        persuing a career in software development. 
                        During my previous career as an NDT technician
                        I specialized in industrial ultrasonics and 
                        spent the majority of time as a pipeline 
                        welding inspector on major projects across 
                        Canada. I enjoy working in a team and as a 
                        mentor. Above all I love to code, design 
                        and create. 
                    </p>
                </div>
                <div className="aboutMeImg">
                    <img src={me} alt="pic"/>
                </div>
            </div>
        </div>
    );
}