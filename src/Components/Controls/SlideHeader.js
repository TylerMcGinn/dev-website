import React from 'react';
import '../../Stylesheets/SlideHeader.css';

export default function SlideHeader({heading, ID}){
    
    return (
        <div className="SlideHeader" id={ID} >
            <div className="slideHeaderWrapper">
                <div className="slideHeaderTitle">{heading}</div>
                <div className="slideHeaderUnderline"></div>
            </div>
        </div>
    );
}