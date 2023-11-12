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

        <Frame content={"This website is one of my projects, created using React.js with Bootstrap. I used git as a vesrion control tool and put the source code on my github. The site is hosted using github pages. The page is still in development since I plan to include more projects, on which I'm still working."} image={Webpage}/>
        <Frame content={"I contributed to the development of new functionalities in our projects, including integration with external APIs such as payment providers and certified signatures. Additionally, I worked on the integration of payment terminals with our software."} image={elliteq}/>
        <Frame content={"The software for an online cosmetics store was created to calculate loyalty points from client purchases. The application used a simple file database, which was considered the most suitable solution. It was developed using .NET technology for desktop devices."} image={tiande}/>
        <Frame content={"The mobile game, developed on the Unity engine, had its game logic implemented in C#. The application utilized the built-in accelerometer for controlling in-game objects. Additionally, the game featured an in-game shop for purchasing cosmetic upgrades."} image={Game}/>
        <Frame content={"One of my engineering projects involved designing and manufacturing a CNC machine using 3D printing techniques. The entire machine was designed in Fusion 360 and then fabricated and assembled. The control system is based on Arduino, which manages the motors responsible for moving the machine."} image={CNC}/>
        <Frame content={"I developed an application to merge graphics using multiple processor cores. The application, written in C#, incorporates two external libraries—one in C++ and the other in ASM. This program enables the comparison of the speed between assembly language and C++ language."} image={asm}/>
        <Frame content={"I built the front-end web page for a Mobile Photokiosk using Blazor technology, .NET, and C#. Integrating with Google API to download images from Google was one of bigger parts of this project. This website was developed during my internship at Pixel-Tech."} image={pixel}/>

    </div>



    </article>
  )
}
