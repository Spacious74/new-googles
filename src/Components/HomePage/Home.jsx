import React, { useState } from 'react'
import './Home.css'
import logo from '../../Resources/google logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Nabar'

function Home() {

  const [lightmode, setlightMode] = useState(
    localStorage.getItem("theme") || true
  );
  const [searchText, setSearchText] = useState("");

  const backStyle = {
    backgroundColor : (lightmode) ? "#ffffff" : "#22222b",
    color : (lightmode) ? "#797979" : "#ffffff"
  }
  const navigate = useNavigate();

  const handleSearch = (e)=>{
    e.preventDefault();
    console.log(searchText);
    navigate('/search?searchQuery=' + searchText)
  }

  return (
    <div className='homeContainer pfx' style={backStyle} >
      <Navbar lightmode={lightmode} setlightMode={setlightMode} />
      <div className='midSec-cont pfx'>

        {/* Google logo image */}
        <div className="googleLogo pfx">
          <img src={logo} alt="" />
        </div>


        {/* Input field */}
        <form method='POST' className="input-field pfx" onSubmit={handleSearch}>
          <input autoFocus={true} style={backStyle} value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}
          type="text" className="inp" placeholder='Search here...' />
          <button className="searchIcon" onClick={handleSearch}>
            <i className='fa-solid fa-search'></i>
          </button>
        </form>

        {/* Social media link containers */}
        <div className="linkCont pfx" >
        <Link to="/" className="link pfx" style={backStyle} target={'_blank'} >  
          <span className="icon">
            <i className='fa-brands fa-linkedin'></i>
          </span>
          <span className="linkName">
            LinkedIn
          </span>
        </Link>
        <Link to="https://github.com/Spacious74" 
        style={backStyle} target={'_blank'} className="link pfx">
            <span className="icon">
              <i className='fa-brands fa-github'></i>
            </span>
            <span className="linkName">
              Github
            </span>
        </Link>
        </div>
      </div>
      <div className="linesContainer" style={backStyle}>
        <div className="line l1"></div>
        <div className="line l2"></div>
        <div className="line l3"></div>
        <div className="line l4"></div>
      </div>
    </div>
  )
}

export default Home
