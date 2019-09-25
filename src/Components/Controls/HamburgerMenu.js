import React from 'react';
import { menuAnimation, slideTwo, slideThree, cross} from '../../Library/sharedLib';
import $ from 'jquery';
import '../../Stylesheets/HamburgerMenu.css';

export default function HamburgerMenu(){
    
    const hamburgerClicked = () =>{
        const animSequence = [slideTwo, slideThree, cross];
        $('#two').hasClass('slide') ? menuAnimation(animSequence.reverse()) : menuAnimation(animSequence)
    }
    

    return (
        <div className="HamburgerMenu">
            <div className="hamburger" onClick={hamburgerClicked}>
                <div className="hamburgerBar" id="one"></div>
                <div className="hamburgerBar" id="two"></div>
                <div className="hamburgerBar" id="three"></div>
                <div className="hamburgerBar" id="four"></div>
            </div>
        </div>
    );
}