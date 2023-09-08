import React from 'react'
import lightImg  from '../../Resources/lightmode.png'
import darkImg  from '../../Resources/newdark.png'
import googleLogo from '../../Resources/google logo.png'
import './SearchNavbar.css'


function SearchNavbar({lightmode, setlightMode, searchText, setSearchText, handleSearch}) {

        
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
  
  const backStyle = {
    backgroundColor : (lightmode) ? "#ffffff" : "#22222b",
    color : (lightmode) ? "#494949" : "#ffffff"
  }

  return (
    <nav className="search-nav" style={backStyle}>
    <div className="left-nav">
      
      <div className="logoImageCont">
        <div>
          <img src={googleLogo} alt="" className="logoimg" />
        </div>
        <div className="container" id="cont" style={containerStyle}>
            <button style={circleStyle}
            className="circle" id="circle" onClick={handleLightMode}>
            </button>
        </div>
      </div>

      <div className="sinput-field sinpf" style={backStyle}>
        <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}
        style={backStyle} type="text" className="inp" placeholder="Search here..." />
        <button className="searchIcon" onClick={handleSearch}>
          <i className='fa-solid fa-search'></i>
        </button>
      </div>

    </div>
    <div className="right-nav" style={backStyle}>
      <div className="iconCont">
        <i className="fa-solid fa-user profileIcon"></i>
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="container" id="cont" style={containerStyle}>
          <button style={circleStyle}
           className="circle" id="circle" onClick={handleLightMode}>
          </button>
      </div>
    </div>
  </nav>
  )
}

export default SearchNavbar
