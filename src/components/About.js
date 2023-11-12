import React from 'react'
import './About.css'



export default function About() {
  return (
    <article className="articleabout">
        <div id="abanchor"></div>
     <div className="topsection">About me</div>
    <div className="d-flex flex-column align-self-center justify-content-around containerabout">
        <div> <div className="pinksq1">  Who am I? <p> I am software developer who worked on few applications in many 
                                         technologies form html/css through blazor/c#, React.js, 
                                         microcontrollers such as Arduino, and many more. I'm a fast learner, who has a lot of motivation to work on even the hardest projects.</p>  </div></div>
                                         
        <div > <div className="violsq1">  My education and expirience <p> I graduated Silesian Univesity of Technology with a degree of Bachelor of Science in Computer Science with specialization in software and computer graphics. 
                                          I worked on different programming projects during course of my studies in C ,C++, C# and Java Script, Java and assembler. I gained my experience working as a commercial software developer for elliteq.
          
          </p>  </div></div>
    </div>



    </article>
  )
}
