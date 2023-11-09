import React from 'react'
import './Projects.css'
import P1 from '../image/webpg.png'

function Frame({content, image}){
    return(
        <div className="projectframe">
            <img alt="project" src={image}/>
            <div className="projecttext">{content}</div>
            
        </div>

    );
    

}




export default function Projects() {
  return (
    <article className="articleprojects">
        <div id="pranchor"></div>
     <div className="topsection">Previous projects</div>
    <div className="d-flex flex-row flex-wrap justify-content-around">

        <Frame content={"This website is one of my projects. It was made using React.js with Bootstrap. The source code can be found on my github page, wher the page is hosted"} image={P1}/>
        <Frame content={"Lorem Ipsum is simply dan unknown printer took a galley of type and scrambled it to make a typummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "} image={P1}/>
        <Frame content={"Lorem Ipsum is simply dan unknown printer took a galley of type and scrambled it to make a typummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "} image={P1}/>
        <Frame content={"Lorem Ipsum is simply dan unknown printer took a galley of type and scrambled it to make a typummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "} image={P1}/>
        <Frame content={"Lorem Ipsum is simply dan unknown printer took a galley of type and scrambled it to make a typummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "} image={P1}/>
        <Frame content={"Lorem Ipsum is simply dan unknown printer took a galley of type and scrambled it to make a typummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "} image={P1}/>
        <Frame content={"Lorem Ipsum is simply dan unknown printer took a galley of type and scrambled it to make a typummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "} image={P1}/>


    </div>



    </article>
  )
}
