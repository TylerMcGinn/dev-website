import React,{useEffect} from 'react';
import $ from 'jquery';
import SlideHeader from './Controls/SlideHeader';
import '../Stylesheets/Portfolio.css';
import ProjectCard from './Controls/ProjectCard';
import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';
import fauna from '../Media/Icons/fauna.png';
import ts from '../Media/Icons/typescript.png';
import cs from '../Media/Icons/cs.png';
import sql from '../Media/Icons/sql.png';
import node from '../Media/Icons/nodejs.png';
import react from '../Media/Icons/react.png';
import xamarin from '../Media/Icons/xamarin.png';
import jquery from '../Media/Icons/jquery.png';
import ps from '../Media/Icons/ps.png';
import xd from '../Media/Icons/xd.png';
import postman from '../Media/Icons/postMan.png';
import electronics from '../Media/Icons/electronics.png';
import insightIcon from '../Media/ProjectCard/insightIcon.png';
import insightScreenShot from '../Media/ProjectCard/InsightScreenShot.png';
import questIcon from '../Media/ProjectCard/questIcon.png';
import QuestScreenShot from '../Media/ProjectCard/QuestScreenShot.png';
import devWebsiteIcon from '../Media/ProjectCard/devWebsiteIcon.png';
import devWebsiteScreenShot from '../Media/ProjectCard/devSiteScreenShot.png';
import windiIcon from '../Media/ProjectCard/windiIcon.png';
import WindiScreenShot from '../Media/ProjectCard/WindiScreenShot.png';
import electronicsProjIcon from '../Media/ProjectCard/electronicsProjIcon.png';
import samdScreenShot from '../Media/ProjectCard/samdScreenShot.PNG';


export default function Portfolio({props}){
    
    let viewWidth = window.innerWidth;
    let viewHeight = window.innerHeight;
    let previousSections = 1 * viewHeight;
    let twentyPercentViewHeight = viewHeight/5;


    const nextSlide = () => {
        var mySwiper = document.querySelector('.swiper-container').swiper
        mySwiper.slideNext();
    }


    const previousSlide = () => {
        var mySwiper = document.querySelector('.swiper-container').swiper
        mySwiper.slidePrev();
    }


    useEffect(()=>{
        if(props.scrollCurrent > (previousSections + twentyPercentViewHeight)){
            let x = $('#portfolioTitle').position();
            if(viewWidth > 720 && x.left < 0){
                $('#portfolioTitle').css({'transform':'translateX(0%)'});
            }
            if(viewWidth < 720 && x.left > 0){
                $('#portfolioTitle').css({'transform':'translateX(-50%)'});
            }
        }
        if(props.scrollCurrent > (previousSections + twentyPercentViewHeight) && $('.swiperView').css('opacity') === '0'){
            new Swiper('.swiper-container',{
                effect:'coverflow',
                slidesPerView:'auto',
                centeredSlides:false,
                grabCursor:true,
                spaceBetween:0,
                speed:500,
                coverflowEffect:{
                    rotate:0,
                    stretch:0,
                    depth:500,
                    modifier:1,
                    slideShadows:false
                }
            });
        $('.swiperView').css({'opacity':'1'});
      }
    },[props.scrollCurrent, previousSections, twentyPercentViewHeight, viewWidth]);

   
    return (
        <div className="Portfolio" id="PORTFOLIO">
            <SlideHeader heading="PROJECTS" ID='portfolioTitle'/>
            <div className="swiperView">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <ProjectCard 
                                projectTitle='INSIGHT' 
                                stack={[ts, node, ps]}
                                projectType='VS Code Extension'
                                projectDescription='VS Code extension for quick access and smart queries of developer resources such as Google, Stackoverflow, Youtube as well as documentation for popular languages and frameworks.'
                                projectIcon={{backgroundImage: `url(${insightIcon})`}}
                                projectBackground={insightScreenShot}
                            />
                        </div>
                        <div className="swiper-slide">
                            <ProjectCard 
                                projectTitle='QUEST' 
                                stack={[cs, sql]}
                                projectType='WPF Desktop Application'
                                projectDescription='As a mostly self taught developer I decided to build a study journal application to document important concepts and track my progress.'
                                projectIcon={{backgroundImage: `url(${questIcon})`}}
                                projectBackground={QuestScreenShot}
                            />
                        </div>
                        <div className="swiper-slide">
                            <ProjectCard 
                                projectTitle='WINDI' 
                                stack={[cs, xamarin]}
                                projectType='Android Application'
                                projectDescription='Windi is a personalized weather appliction for calculating the daily probability for being able to go kiteboarding based on local weather data.'
                                projectIcon={{backgroundImage: `url(${windiIcon})`}}
                                projectBackground={WindiScreenShot}
                            />
                        </div>
                        <div className="swiper-slide">
                            <ProjectCard 
                                projectTitle='DEV WEBSITE' 
                                stack={[react, jquery, fauna, ps, xd, postman]}
                                projectType='Full Stack Web Application'
                                projectDescription='I hope your enjoying it.'
                                projectIcon={{backgroundImage: `url(${devWebsiteIcon})`}}
                                projectBackground={devWebsiteScreenShot}
                            />
                        </div>
                        <div className="swiper-slide">
                            <ProjectCard 
                                projectTitle='ATSAMD10/11 DEV BOARD' 
                                stack={[electronics]}
                                projectType='Developement Board/PCB'
                                projectDescription='A custom developement board based around the ATSAMD10/11 microcontroller.'
                                projectIcon={{backgroundImage: `url(${electronicsProjIcon})`}}
                                projectBackground={samdScreenShot}
                            />
                        </div>
                    </div>
                        <div className="swiper-button-prev" onClick={previousSlide}/>
                        <div className="swiper-button-next" onClick={nextSlide}></div>
                </div>
            </div>
        </div>
    );
}