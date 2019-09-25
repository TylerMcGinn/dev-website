import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import '../Stylesheets/Interests.css';

export default function Interests({viewState}){
    
    const [interestState, setInterestState] = useState({transition:'opacity 1s', opacity:'0'});


    useEffect(()=>{
        if(viewState[2].Interests.display !== 'none'){
            setTimeout(() => {
                setInterestState({transition:'opacity 1s', opacity:'1'});
            }, 500);
        }
        else{
            setInterestState({transition:'opacity 1s', opacity:'0'});
        }
    },[viewState]);


    const selectInterest = (e) =>{
        let selected = e.currentTarget;
        $('.drawerDescription').removeClass('drawerMask');
        if($(selected).parent().hasClass('open') && $(selected).siblings()[0].id !== 'drawer5'){
            $(selected).parent().removeClass('open');
        }
        else{
            $('.interestContainer').removeClass('open');
            $(selected).parent().toggleClass('open');
        }
        if(!$('.interestContainer').hasClass('open')){
            $('#drawer5').parent().addClass('open');
        }
        setTimeout(() => {
            let sibling = $(selected).siblings()[0];
            let siblingChild = $(sibling).children()[0];
            $(siblingChild).addClass('drawerMask');
        }, 1000);
    }

    
    return (
        <div className="Interests" style={viewState[2].Interests}>
            <div className="interestsWrapper" style={interestState}>
            <div className="interestContainer">
                <div className="handle" onClick={selectInterest}>
                    <div className="textContainer">
                        <h2>FITNESS/NUTRITION</h2>
                    </div>
                </div>
                <div className="drawer" id="drawer1">
                    <div className="drawerDescription">
                        <h1>FITNESS</h1>
                        <p>When not nerding my alter ego is pushing it in the gym.</p>
                    </div>
                </div>
            </div>
            <div className="interestContainer">
                <div className="handle" onClick={selectInterest}>
                    <div className="textContainer">
                        <h2>ROCK CLIMBING</h2>
                    </div>
                </div>
                <div className="drawer" id="drawer2">
                    <div className="drawerDescription"> 
                        <h1>ROCK CLIMBING</h1>
                        <p>I feel very lucky to be a resident of Penticton,BC. Home to Skaha Bluffs, one of the best sport climbing destinations in all of Canada.</p>
                    </div>
                </div>
            </div>
            <div className="interestContainer">
                <div className="handle" onClick={selectInterest}>
                    <div className="textContainer">
                        <h2>KITEBOARDING</h2>
                    </div>
                </div>
                <div className="drawer" id="drawer3">
                    <div className="drawerDescription">
                        <h1>KITEBOARDING</h1>
                        <p>When the winds up you can usually find me kiteboarding on Skaha lake.</p>
                    </div>
                </div>
            </div>
            <div className="interestContainer">
                <div className="handle" onClick={selectInterest}>
                    <div className="textContainer">
                        <h2>ELECTRONICS</h2>
                    </div>
                </div>
                <div className="drawer" id="drawer4">
                    <div className="drawerDescription">
                        <h1>ELECTRONICS</h1>
                        <p>Formerly an electronics engineering student but still a hobbiest, Check out some of my hardware projects.</p>
                    </div>
                </div>
            </div>
            <div className="interestContainer open">
                <div className="handle" onClick={selectInterest}>
                    <div className="textContainer">
                        <h2>CODING</h2>
                    </div>
                </div>
                <div className="drawer" id="drawer5">
                    <div className="drawerDescription drawerMask">
                        <h1>CODING</h1>
                        <p>I really like to code. I enjoy leaning new languages/frameworks and solving new problems.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}