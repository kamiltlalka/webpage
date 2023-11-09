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
                                         microcontrollers such as Arduino, and many more. I learn very quick 
                                         and have a lot of motivation to work.</p>  </div></div>
                                         
        <div > <div className="violsq1">  My education and expirience <p> My name is kamil and i just graduated from university.</p>  </div></div>
    </div>



    </article>
  )
}
