import $ from 'jquery';

function menuAnimation(animationSeq){
    let animationDuration = .5;
    let stepDuration = animationDuration/animationSeq.length;
    for(let i=0; i < animationSeq.length; i++){
      animationSeq[i](stepDuration, stepDuration*i);
    }
    $('.navbarMenuItems').toggleClass('menuExpanded');
}


function slideTwo(stepDuration, delay){
    $('#two').css({ 'transition':`all ${stepDuration}s ${delay}s`}).toggleClass('slide');
}


function slideThree(stepDuration, delay){
    $('#three').css({ 'transition':`all ${stepDuration}s ${delay}s`}).toggleClass('slide');
}


function cross(stepDuration, delay){
    $('#one').css({ 'transition':`all ${stepDuration}s ${delay}s`}).toggleClass('crossTop');
    $('#four').css({ 'transition':`all ${stepDuration}s ${delay}s`}).toggleClass('crossBottom');
}


export {menuAnimation, slideTwo, slideThree, cross};