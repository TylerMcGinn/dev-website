import React,{useEffect} from 'react';
import $ from 'jquery';
import {menuAnimation, slideTwo, slideThree, cross} from '../Library/sharedLib';
import HamburgerMenu from './Controls/HamburgerMenu';
import '../Stylesheets/Navbar.css';
import resume from '../Docs/TylerMcGinnResume.pdf';

export default function Navbar({props}){
    
    let screenWidth = window.innerWidth;


    const scrollTop = () => {
        $(window).scrollTop(0);
        if(screenWidth < 720 && $('.navbarMenuItems').hasClass('menuExpanded')){
            const animSequence = [slideTwo, slideThree, cross];
            menuAnimation(animSequence.reverse());
        }
    }


    const downloadResume = () =>{
        if(screenWidth < 720){
            const animSequence = [slideTwo, slideThree, cross];
            menuAnimation(animSequence.reverse());
        }
    }


    const scrollToSection = (e) => {
        let targetSection = e.currentTarget.innerText;
        try {
            document.getElementById(targetSection).scrollIntoView();
            const animSequence = [slideTwo, slideThree, cross];
            menuAnimation(animSequence.reverse());
        } 
        catch(error){}
    }
    

    useEffect(()=>{
        if(screenWidth > 720){
            if(props.scrollPrevious < props.scrollCurrent){
                $('.Navbar').slideUp(400);
                $('.navbarTitle,.menuItem,.resumeDownload').addClass('hovered');
            }
            else{
                $('.Navbar').slideDown(400).queue(function(){
                    $('.navbarTitle,.menuItem,.resumeDownload').removeClass('hovered');
                    $('.Navbar').dequeue();
                });
            }
        }
    },[props.scrollCurrent]);


    return (
        <div className="Navbar">
            <div className="navbarContent">
                <div className="navbarMobileWrapper">
                    <div className="navbarTitleWrapper"><h1 className="navbarTitle" onClick={scrollTop}>TYLER.MCGINN</h1></div>
                    <HamburgerMenu />
                </div>
                <div className="navbarMenuItems">
                    <li className="menuItem" onClick={scrollToSection}>ABOUT</li>
                    <li className="menuItem" onClick={scrollToSection}>PORTFOLIO</li>
                    <li className="menuItem" onClick={scrollToSection}>CONTACT</li>
                    <li className='resumeMobile'><a className="menuItem resumeDownload" href={resume} download onClick={downloadResume}>RESUME</a></li>
                </div>
            </div>
        </div>
    );
}