import React from 'react'
import lightImg  from '../../Resources/lightmode.png'
import darkImg  from '../../Resources/newdark.png'
import './Navbar.css'

function Nabar({lightmode, setlightMode}) {
    
  const containerStyle = {
    backgroundImage : lightmode ? "url(" + lightImg  +")" : "url(" + darkImg  +")",
    border : lightmode ? "solid 1px #8693a8" : "solid 1px #e6d3a5"
  }

  const circleStyle = {
    backgroundColor : lightmode ?  "#aab8d1" : "#ffc636",
    left : lightmode ? "5px" : "45px",
  }

  const handleLightMode = ()=>{
    setlightMode(!lightmode)
    localStorage.setItem("theme", !lightmode);
  }

  return (
      <nav className="navbar pfx">
        <div className="fakeLink">Gmail</div>
        <div className="fakeLink">Images</div>
        <span class="material-symbols-outlined">apps</span>
        <div className="fakeLink">
          <div className="container" id="cont" style={containerStyle}>
            <button style={circleStyle}
             className="circle" id="circle" onClick={handleLightMode}>
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Nabar
