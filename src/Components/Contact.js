import React,{useState, useEffect} from 'react';
import $ from 'jquery'
import axios from 'axios';
import SlideHeader from './Controls/SlideHeader';
import '../Stylesheets/Contact.css';
import github from '../Media/Icons/github.png';
import instagram from '../Media/Icons/instagram.png';
import codepen from '../Media/Icons/codePen.png';
import easyEDA from '../Media/Icons/easyEDA.png';

export default function Contact({props}){

    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;
    let previousSections = 2 * viewHeight;
    let twentyPercentViewHeight = viewHeight/5;
    const [formValidity, setFormValidity] = useState(false);


    const [formData, setFormData] = useState({
        Name:'',
        Email:'',
        Phone:'',
        Company:'',
        Message:''
    });


    const changeState = (e) =>{
        const name = e.target.name;
        const value = e.target.value; 
        let field = document.getElementsByName(name);
        if($(field).hasClass('invalidEntry')){
            $(field).removeClass('invalidEntry invalidPlaceholder');
            $(field).attr({"placeholder":`${name}`});
        }  
        let updatedForm = {...formData};
        updatedForm[name] = value;
        setFormData(updatedForm);
    }


    useEffect(()=>{
        checkFormValidity();
    },[formData])


    const checkFormValidity = (displayInvalid = false) =>{
        let entries = Object.entries(formData);
        let entriesToValidate = entries.filter((entry)=>{
            return !(entry[0].includes("Company") || entry[0].includes("Phone"));
        });
        let validFields = []
        entriesToValidate.forEach((entry,index) => {
            if(entry[1] === null || entry[1] === ""){
                if(displayInvalid){
                    let field = document.getElementsByName(entry[0]);
                    $(field).addClass('invalidEntry');
                    $(field).attr({"value":"", "placeholder":`${entry[0].toUpperCase()} REQUIRED`}).addClass('invalidPlaceholder');
                }
                validFields[index] = false;
            }
            else{
                validFields[index] = true;
            }
        });
        if(!displayInvalid){
            setFormValidity(validFields.every(index=>index === true));
        }
    }


    const submitData = (e) =>{
        let sender = e.currentTarget;
        if(formValidity === true){
            $(sender).attr('disabled','true');
            axios.post(`${window.location.href}/.netlify/functions/server/mailService`, formData).then((res)=>{
                $(sender).removeAttr('disabled');
                if(res.data === 'OK'){
                    $('.emailPopUpText').text('Email Sent Successfully!');
                }
                else{
                    $('.emailPopUpText').text('Oops something went wrong!'); 
                }
                $('.emailPopUp').addClass('emailPopUpVisible');
                setTimeout(() => {
                    $('.emailPopUp').removeClass('emailPopUpVisible');
                }, 2000);
            }).catch(err=>{
                $('.emailPopUpText').text('Oops something went wrong!');
                setTimeout(() => {
                    $('.emailPopUp').removeClass('emailPopUpVisible');
                }, 2000);
                $(sender).removeAttr('disabled');
            });
        }
        else{
            checkFormValidity(true);
        }
    }


    useEffect(()=>{
        if(props.scrollCurrent > (previousSections + twentyPercentViewHeight)){
            let x = $('#contactTitle').position(); 
            if(viewWidth > 720 && x.left < 0){
                $('#contactTitle').css({'transform':'translateX(0%)'});
            }
            if(viewWidth < 720 && x.left > 0){
                $('#contactTitle').css({'transform':'translateX(-50%)'});
            }
            if($('.Contact').css('opacity') === '0'){
                $('.Contact').css({'opacity':'1', 'transform':'translateY(0%)'});
            }
        }
    },[props.scrollCurrent, previousSections, twentyPercentViewHeight, viewWidth]);


    return (
        <div className="Contact" id="CONTACT">
            <SlideHeader heading="CONTACT" ID='contactTitle'/>
            <div className="formWrapper">
                <div className="contactForm">
                    <input className="formField" id="nameField" type="text" placeholder="NAME*" autoComplete="off" name="Name"onChange={changeState}/>
                    <input className="formField" id="emailField" type="text" placeholder="EMAIL*" autoComplete="off" name="Email" onChange={changeState}/>
                    <input className="formField" id="phoneField" type="text" placeholder="PHONE" name="Phone" autoComplete="off" onChange={changeState}/>
                    <input className="formField" id="companyField" type="text" placeholder="COMPANY" name="Company" autoComplete="off" onChange={changeState}/>
                    <textarea className="formField" id="messageField" name="Message" placeholder="MESSAGE*" autoComplete="off" onChange={changeState}/>
                    <button id="submitButton" onClick={submitData}>SEND</button>
                </div>
            </div>
            <div className='emailPopUp'>
                <p className='emailPopUpText'></p>
            </div>
            <div className="footer">
                <div className="footerIconWrapper">
                    <div className="footerIcon">
                        <a id="githubIcon" href="https://github.com/TylerMcGinn" rel='noopener noreferrer' target='_blank'><img className="footerLink" src={github} alt='github icon'/></a>
                    </div>
                    <div className="footerIcon">
                        <a id="codePenIcon" href="https://codepen.io/tylermcginn" rel='noopener noreferrer' target='_blank'><img className="footerLink" src={codepen} alt='github icon'/></a>
                    </div>
                    <div className="footerIcon">
                        <a id="instagramIcon" href="https://www.instagram.com/mcginntyler/" rel='noopener noreferrer' target='_blank'><img className="footerLink" src={instagram} alt='github icon'/></a>
                    </div>
                    <div className="footerIcon">
                        <a id="easyEdaIcon" href="https://easyeda.com/TylerDaRacer" rel='noopener noreferrer' target='_blank'><img className="footerLink" src={easyEDA} alt='easyEDA icon'/></a>
                    </div>
                </div>
                <p>Tyler McGinn &copy;2019</p>   
            </div>
        </div>
    );
}