import Hero from "./components/Hero"
import Snippets from "./components/Snippets"
import Access from "./components/Access"
import Tool from "./components/Tool"
import Clipboard from "./components/Clipboard"
import Footer from "./components/Footer"

import './App.css'

function App() {


  return (
    <>
    < Hero/>
    <Snippets/>
    <Access/>
    <div className="tools">
    <Tool
      img = "images/icon-blacklist.svg"
      tooltext = "Create blacklists"
      toolcontext = "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
    />
     <Tool
      img = "images/icon-text.svg"
      tooltext = "Plain text snippets "
      toolcontext = "Remove unwanted formatting from copied text for a consistent look."
    />
     <Tool
      img = "images/icon-preview.svg"
      tooltext = "Sneak preview"
      toolcontext = "Quick preview of all snippets on your Clipboard for easy access."
    />

    </div>
    <Clipboard/>
    <Footer/>
    
    </>

   
  )
}

export default App
