import React, {useState, useEffect} from 'react';
import SlideHeader from './Controls/SlideHeader';
import '../Stylesheets/About2.css';
import $ from 'jquery';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Interests from './Interests';

export default function About2({props}){
   
    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;


    useEffect(()=>{
        if(props.scrollCurrent > (.5 * viewHeight)){
            let x = $('#aboutTitle').position(); 
            if(viewWidth > 720 && x.left < 0){
                $('#aboutTitle').css({'transform':'translateX(0%)'});
            }
            if(viewWidth < 720 && x.left > 0){
                $('#aboutTitle').css({'transform':'translateX(-50%)'});
            }
            if($('.aboutView').css('opacity') === '0'){
                $('.aboutView').css({'opacity':'1'});
            }
            if(!$('.tabName').siblings().hasClass('highlighted')){
                $('#AboutMe').siblings().addClass('highlighted');
            }
        }
    },[props.scrollCurrent, viewHeight, viewWidth]);


    const [viewState, setViewState] = useState([
        {AboutMe:{display:'initial'}},
        {Skills:{display:'none'}},
        {Interests:{display:'none'}}
    ]);


    const updateView = (e) =>{
        const selectedView = e.target.id;
        let displayOptions;
        $('.tabHighlight').removeClass('highlighted');
        $(e.currentTarget).siblings().addClass('highlighted');
        switch (selectedView) {
            case 'AboutMe':
                displayOptions = {display:'initial'};
                break;
            case 'Skills':
                displayOptions = {display:'initial'};
                break;
            case 'Interests':
                displayOptions = {display:'flex'};
                break;
            default:
                displayOptions = {display:'initial'};
                break;
        }
        let newState = [...viewState];
        newState.forEach(view=>{
            let name = Object.keys(view).toString();
            if(name === selectedView){
                view[name] = displayOptions;
            }
            else{
                view[name] = {display:'none'};
            }
        });
        setViewState(newState);
    }


    return (
        <div className="About2" id="ABOUT">
            <SlideHeader heading="ABOUT" ID="aboutTitle"/>
            <div className="aboutView">
                <AboutMe viewState={viewState}/>
                <Skills viewState={viewState}/>
                <Interests viewState={viewState}/>
            </div>
            <div className="viewControls">
                <div className="tabSeparator"></div>
                <div className="viewTabs">
                    <div className="aboutTabItem">
                        <li className="tabName" id="AboutMe" onClick={updateView}>ABOUT ME</li>
                        <div className="tabHighlight"></div>
                    </div>
                    <div className="aboutTabItem">
                        <li className="tabName" id="Skills" onClick={updateView}>SKILLS</li>
                        <div className="tabHighlight"></div>
                    </div>
                    <div className="aboutTabItem">
                        <li className="tabName" id="Interests" onClick={updateView}>INTERESTS</li>
                        <div className="tabHighlight"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}