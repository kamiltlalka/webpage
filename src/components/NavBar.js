import React from 'react'
import './NavBar.css'
import logo from '../image/logo.png'
export default function NavBar() {
  return (

    <header className="d-flex flex-row justify-content-between sticky-top">
        <div className="logo_nav">
            <img src={logo} alt="logo"/>
        </div>
        <div className="container_nav d-flex flex-row">
        <a href="#top"><div className="element_nav">
                Home
            </div></a>
            <a href="#pranchor"><div className="element_nav">
                Projects
            </div></a>
            <a href="#abanchor"><div className="element_nav">
                About
            </div></a>

            <a href="#cnanchor"><div className="element_nav">
                Contact
            </div></a>
        </div>
    </header>
    

  )
}
