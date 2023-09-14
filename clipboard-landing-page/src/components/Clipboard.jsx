import React from "react"

function Clipboard(){
    return(
        <>
        <div>
            <div className="clipboard-image">
            <img src="./images/logo-google.png"/>
            <img src="./images/logo-ibm.png" />
            <img src="./images/logo-microsoft.png" />
            <img src="./imagess/logo-hp.png" />
            <img src="./images/logo-vector-graphics.png" />
            </div>

            <div className="clipboard-content">
            <h2> Clipboard for iOS and Mac OS </h2>
            <p> Available for free on the App Store. 
                Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard. 
            </p>
            <div className="download-button">
                <button className="ios-download"> Download for iOS </button>
                <button className="mac-download"> Download for Mac </button>
            </div>  
            </div>

        </div>
        </>
    )
}

export default Clipboard