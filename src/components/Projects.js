import React from 'react'
import './Projects.css'
import Webpage from '../image/webpg.png'
import Game from '../image/UnityGame.png'
import CNC from '../image/CNC.png'
import elliteq from '../image/elliteq.jpg'
import tiande from '../image/tiande.png'
import asm from '../image/asm.png'
import pixel from '../image/pixel.png'

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

        <Frame content={"This website is one of my projects. It was made using React.js with Bootstrap. The source code can be found on my github page, where the page is hosted"} image={Webpage}/>
        <Frame content={"Working on developing new functionalities in our projects. Integration with external API's for example payment providers or certified signatures. I also worked on integration with payment terminals to our software."} image={elliteq}/>
        <Frame content={"Software for internet droggery to count loyality points from purchases made by their clients. Aplicatin used simple file database with was most siutablke to this solution. Aplication was made in .Net technology for desktop devices"} image={tiande}/>
        <Frame content={"Game for mobile devices on Unity engine. The game logic was made in c#. The application used puilt in accelerometer for controling ingame object. The game also fetured in-game shop for purchasing cosmetic ubgrades"} image={Game}/>
        <Frame content={"One of my enginieering project was designing and manufacturing a CNC mashine using 3D printing techniques. The whole mashine was designed in Fusion 360 and then manufactured and assembled."} image={CNC}/>
        <Frame content={"Application to fuse graphics in to one using multiple procesor cores. The application is written in C# and has 2 externals libraries. One library is in C++ and second ASM. This program allows to compare speed of assembly language to C++ language"} image={asm}/>
        <Frame content={"Build front end web page for Mobile Photokiosk. The website was made using Blazor technology, .Net and C#. The site was made during internship at Pixel-Tech"} image={pixel}/>

    </div>



    </article>
  )
}