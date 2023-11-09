import React from 'react'
import './Contact.css'
import Linkedin from '../image/linkedin-3-32.png'
import Github from '../image/github-8-32.png'
import Mail from '../image/mail-32.png'
import Phone from '../image/mobile-phone-8-32.png'


function Contacts({content, linkurl, image}){

    if(linkurl === "")
    {
        return(
            <div className="contacts col">
                <img alt="project" src={image}/>
                <div className="linktext">{content}</div>
                
            </div>
        );
    }else{
        return(
            <div className="contacts col">
                <img alt="project" src={image}/>
                <a className="linktext" href={linkurl} >{content}</a>
                
            </div>
        );
    }


    

}



export default function Contact() {
  return (
    <article className="articlecontact">
        <div id="cnanchor"></div>
     <div className="topsection">Contact info</div>
    <div className="d-flex flex-row flex-wrap justify-content-around">

    </div >

        <div className="container">
            <div className="row align-items-center">
                <Contacts content={"LinkedIn"} linkurl = {"https://www.linkedin.com/in/kamil-tla%C5%82ka-b13012259/"} image={Linkedin}/>
            </div>
            <div className="row align-items-center">
                <Contacts content={"GitHub"} linkurl = {"https://github.com/kamiltlalka"} image={Github}/>
            </div>
            <div className="row align-items-center">
                <Contacts content={"kamiltlalkabis@gmail.com"} linkurl = {""} image={Mail}/>
            </div>
            <div className="row align-items-center">
                <Contacts content={"+48 664792420"} linkurl = {""} image={Phone}/>
            </div>
        </div>
        

    </article>
  )
}
