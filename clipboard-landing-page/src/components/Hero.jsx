import React from "react"

function Hero(){
    return(
        <div className="hero-container">
            <img src="./src/images/logo.svg" className="logo-image"/>
            <h1> A history of everything you copy  </h1>
            <p> Clipboard allows you to track and organize everything you copy. 
                Instantly access your clipboard on all your devices. </p>
            <div className="download-button">
                <button className="ios-download"> Download for iOS </button>
                <button className="mac-download"> Download for Mac </button>
            </div>    
        </div>
    )
}

export default Hero