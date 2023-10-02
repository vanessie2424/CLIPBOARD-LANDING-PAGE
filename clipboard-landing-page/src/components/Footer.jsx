import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'




function Footer(){
    return(
        <>
        <div className="footer-container">
            <img src="images/logo.svg" />
            <div className="links">
                <div className="link1">
                <li> <a href="#"> FAQs </a></li>   
                <li> <a href="#"> Contact Us </a></li>
                </div>
                <div className="link2">
                <li> <a href="#"> Privacy Policy </a></li>
                <li> <a href="#"> Press Kit </a></li>
                </div>
                <div className="link3">
                <li> <a href="#"> Install Guide </a></li>
                </div>
                
            </div>
            <div className="icons">
               <FontAwesomeIcon icon={faFacebookSquare} className="facebook"></FontAwesomeIcon>
               <FontAwesomeIcon icon={faTwitter} className="twitter"></FontAwesomeIcon>
               <FontAwesomeIcon icon={faInstagram} className="instagram"></FontAwesomeIcon>
            </div>
        </div>
        </>

    )
  

}

export default Footer