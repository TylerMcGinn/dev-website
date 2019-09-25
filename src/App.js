import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import $ from 'jquery';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About2 from './Components/About2';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Project from './Components/Pages/Project';
import ts from './Media/Icons/typescript.png';
import cs from './Media/Icons/cs.png';
import sql from './Media/Icons/sql.png';
import node from './Media/Icons/nodejs.png';
import react from './Media/Icons/react.png';
import xamarin from './Media/Icons/xamarin.png';
import jquery from './Media/Icons/jquery.png';
import ps from './Media/Icons/ps.png';
import xd from './Media/Icons/xd.png';
import postman from './Media/Icons/postMan.png';
import fauna from './Media/Icons/fauna.png';
import electronics from './Media/Icons/electronics.png';
import insightIcon from './Media/ProjectCard/insightIcon.png';
import insightGif from './Media/ProjectCard/insightGif.gif';
import questIcon from './Media/ProjectCard/questIcon.png';
import questGif from './Media/ProjectCard/questGif.gif';
import windiIcon from './Media/ProjectCard/windiIcon.png';
import windiGif from './Media/ProjectCard/windiGif.gif';
import devWebsiteIcon from './Media/ProjectCard/devWebsiteIcon.png';
import devWebsiteGif from './Media/ProjectCard/DevSite.gif';
import electronicsProjIcon from './Media/ProjectCard/electronicsProjIcon.png';
import samdScreenShot from './Media/ProjectCard/samdScreenShot.PNG';

export default function App() {
  
  const [scrollCurrent, setScrollCurrent] = useState(0);
  const [scrollPrevious, setScrollPrevious]= useState(0);


  useEffect(()=>{
    $(window).scroll(function(){
      setScrollCurrent($(window).scrollTop());
    });
  },[]);


  useEffect(()=>{
    setScrollPrevious($(window).scrollTop());
    setScrollPrevious(scrollCurrent);
  },[scrollCurrent]);

  
  return (
    <Router>
      <div className="App">
        <Route exact path='/' render={()=>(
          <React.Fragment>
            <Navbar props={{scrollCurrent, scrollPrevious}}/>
            <Landing />
            <About2 props={{scrollCurrent}}/>
            <Portfolio props={{scrollCurrent}}/>
            <Contact props={{scrollCurrent}}/>
          </React.Fragment>
        )}/>
        <Route exact path='/INSIGHT' render={()=>(
          <React.Fragment>
            <Project
              Title='INSIGHT'
              Stack={[ts,node,ps]}
              ProjectParams={[
                  {'Project: ':'Insight' },
                  {'Type: ':'Vs Code Extension'},
                  {'Stack: ':'Typescript, NodeJs, Photoshop'},
                  {'Status: ':'Complete/Deployed'}
                ]}
              ProjectLinks={[
                {'Microsoft marketplace: ':'https://marketplace.visualstudio.com/items?itemName=TMcGinn.insight'},
                {'GitHub: ':'https://github.com/TylerMcGinn/Insight'}
              ]}
              ProjectDescription='Insight is a VS Code extension for quick access and smart queries 
                                  of developer resources such as Google, Stackoverflow, Youtube as well
                                  as documentation for popular languages and frameworks. I 
                                  developed Insight to fulfill my desire for faster access to 
                                  resources right from the code editor itself. The extension is
                                   written with Typescript and uses NodeJs as means of making HTTP 
                                   requests  as well as Gzip data decompression. Photoshop was used
                                    to make several custom icons for the main menu as well as submenu 
                                    components.'
              ProjectBackground={insightGif}
              ProjectIcon={insightIcon}
            />
          </React.Fragment>
        )}/>
        <Route exact path='/QUEST' render={()=>(
          <React.Fragment>
            <Project
              Title='QUEST'
              Stack={[cs, sql]}
              ProjectParams={[
                  {'Project: ':'Quest' },
                  {'Type: ':'WPF Desktop Application'},
                  {'Stack: ':'C#, SQL'},
                  {'Status: ':'Complete/Deployed'}
                ]}
              ProjectLinks={[
                {'GitHub: ':'https://github.com/TylerMcGinn/Quest'}
              ]}
              ProjectDescription="As a mostly self taught developer I decided to build a study 
                                  journal application to document important concepts and track 
                                  my progress. The application itself is essentially a databasing 
                                  application where a user is able to create, read, update and delete
                                  blog style posts of the days events as well as view graphical data of 
                                  post topics vs. number of days studied. The application is a WPF desktop 
                                  app written in C# with styling in XAML(Microsoft's markup language). The 
                                  data is persisted to a local Microsoft SQL server database using Entity framework."
              ProjectBackground={questGif}
              ProjectIcon={questIcon}
            />
          </React.Fragment>
        )}/>
        <Route exact path='/WINDI' render={()=>(
          <React.Fragment>
            <Project
              Title='WINDI'
              Stack={[cs, xamarin]}
              ProjectParams={[
                  {'Project: ':'Windi' },
                  {'Type: ':'Android Application'},
                  {'Stack: ':'C#, Xamarin'},
                  {'Status: ':'Functional/In Progress'}
                ]}
              ProjectLinks={[
                {'GitHub: ':'https://github.com/TylerMcGinn/windi'}
              ]}
              ProjectDescription='Windi is a personalized weather appliction for calculating the daily
                                  probability for being able to go kiteboarding based on local weather data.
                                  The application performs a web scrape of the local weather forcast in the morning and
                                  parses the data to perform calculations to give a rough estimate if the weather 
                                  conditions will be suitable for kiteboarding and at what time. For a future addition 
                                  my hope is to have automatic notification alerts as well as morning weather reports.  
                                  The application is a cross platform native mobile app written using Xamarin/C#.'
              ProjectBackground={windiGif}
              ProjectIcon={windiIcon}
            />
          </React.Fragment>
        )}/>
        <Route exact path='/DEV WEBSITE' render={()=>(
          <React.Fragment>
            <Project
              Title='DEV WEBSITE'
              Stack={[react, jquery, fauna, ps, xd, postman]}
              ProjectParams={[
                  {'Project: ':'Developer Website and Portfolio'},
                  {'Type: ':'Full Stack Web App'},
                  {'Stack: ':'React, Jquery, Fauna DB, Photoshop, Adobe XD, Postman'},
                  {'Status: ':'Complete/Deployed'}
                ]}
              ProjectLinks={[
                {'GitHub: ':'https://github.com/TylerMcGinn/dev-website'}
              ]}
              ProjectDescription="I hope your enjoying it. The goal of this website and portfolio is to try and 
                                  show my creativity, style, skill and maybe a bit of personality. On the front-end 
                                  I'm using React with a little help from Jquery. The back-end uses AWS Serverless lambda
                                  functions, Googles Gmail API and a Fauna DB database to create an email service for the
                                  contact section. Layouts were designed using Adobe XD along with Photoshop  
                                  for image and icon formatting. Postman was used for testing API endpoints."
              ProjectBackground={devWebsiteGif}
              ProjectIcon={devWebsiteIcon}
            />
          </React.Fragment>
        )}/>
        <Route exact path='/ATSAMD10/11 DEV BOARD' render={()=>(
          <React.Fragment>
            <Project
              Title='ATSAMD10/11 DEV BOARD'
              Stack={[electronics]}
              ProjectParams={[
                  {'Project: ':'ATSAMD10/11 Developement Board'},
                  {'Type: ':'Developement Board/PCB'},
                  {'Stack: ':'Electronics Project'},
                  {'Status: ':'Complete'}
                ]}
              ProjectLinks={[
                {'EasyEDA: ':'https://easyeda.com/TylerDaRacer/SAMD21-DevBoard'}
              ]}
              ProjectDescription="During my time as an electronics engineering student I gained a deep love for both
                                  hardware and software. I was actually first introduced to programming by playing 
                                  with the popular Arduino hobbiest microcontroller boards. I used to really enjoy 
                                  using Arduino Uno/Nano boards however I eventually grew out of them. The Uno/Nano are 
                                  decent boards however I find some of the features lacking, such as the relatively slow
                                  16MHz clock which is defaulted even slower when using the Arduino library, only 8-Bit 
                                  registers, 5V logic and no debugging features other than compile time errors when using 
                                  Arduino IDE. For these reasons I switched to using the ATSAMD series of microcontrollers
                                  as well as writing code at the hardware level in C language. The ATSAMD10/11 has a 48MHz clock,
                                  32-Bit registers, 3.3v logic, real time debugging when using a dedicated programmer/debugger
                                  along with Atmel Studio(Atmel Studio is based off Microsoft Visual Studio) and is of ARM 
                                  architecture instead of AVR which has a far less cryptic instruction set for C language. 
                                  There are a few manufacturers that make ATSAMD boards however, most are equiped with significant
                                  bloatware as well as a cost of over $25... so I decided to make my own. I designed a PCB 
                                  with only the essentials to save on both power and package size, including a voltage regulator,
                                  ICSP header for programming/debugging, reset button and GPIO headers for all IO pins. I hope to 
                                  start using these boards in other electronics projects."
              ProjectBackground={samdScreenShot}
              ProjectIcon={electronicsProjIcon}
            />
          </React.Fragment>
        )}/>
      </div>
    </Router>
  );
}