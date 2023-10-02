import React from "react"

function Snippets(){
    return(
        <>
        <section className="section_snippet">
            <h2>Keep track of your snippets</h2>
            <p>Clipboard instantly stores any item you copy in the cloud, 
                meaning you can access your snippets immediately on all your devices.
                Our Mac and iOS apps will help you organize everything. 
            </p>
            <div className="snippet_container">
           <img src="images/image-computer.png" className="image_snippet"/>
                
                <div className="snippet_content">
                    <div className="content">
                      <h4>Quick Search</h4>
                      <p>Easily search your snippets by content, category, web address, application, and more.</p>
                    </div>

                    <div className="content">
                      <h4>iCloud Sync</h4>
                      <p>Instantly saves and syncs snippets across all your devices.</p>
                    </div>

                    <div className="content">
                      <h4>Complete History</h4>
                      <p>Retrieve any snippets from the first moment you started using the app</p>
                    </div>
                    
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Snippets