import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../../key";
import './SearchResult.css'
import SearchNavbar from "../SearchNavbar/SearchNavbar";
import { Link } from "react-router-dom";
import data from "../../data";


function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");
  const [lightmode, setlightMode] = useState(
    Boolean(localStorage.getItem("theme")) || true
  )

  const [resultArr, setResultArr] = useState(data.items);
  const [searchInfo, setSearchInfo] = useState(data.searchInformation);

  const [searchText, setSearchText] = useState(searchQuery)

  useEffect(() => {
    // axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=b1c513dde30504bb5&q=${searchQuery}`)
    // axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=4255bb1f083db4cef&q=${searchQuery}`)
    // .then(res => {
    //   console.log(res.data);
    //   setResultArr(res.data.items)
    //   setSearchInfo(res.data.searchInformation)
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }, [searchQuery]);

  const backStyle = {
    backgroundColor : (lightmode) ? "#ffffff" : "#22222b",
    color : (lightmode) ? "#404040" : "#ffffff"
  }
  const linkStyle = {
    backgroundColor : (lightmode) ? "#ffffff" : "#22222b",
    color : (lightmode) ? "#797979" : "#b1afb8"
  }

  const handleSearch = ()=>{
    setSearchParams({searchQuery : searchText})
    console.log("handle clicked")
  }

  return (
  <div className="outer-container" style={backStyle}>
    <SearchNavbar 
    lightmode={lightmode} setlightMode={setlightMode}
    searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
    
    <div className="searchInformation">
      About {searchInfo.formattedTotalResults} results ({searchInfo.formattedSearchTime} seconds) for "{searchQuery}"
    </div>

    <div className="searchResults-container">
      {
        (resultArr.length>0) && resultArr.map((ra,i)=>{
          return <div key={i} className="resultCard" >

            <div className="logoandHeader">
              <div className="linkImage">
                <img src={ra.pagemap.cse_image[0].src} alt="logo_link" />
              </div>

              <div className="linksHeader" >
                <Link to={ra.formattedUrl} style={backStyle} target={"_blank"} className="linktitle">
                  <div>
                  {ra.title}
                  </div>
                </Link>
                <Link to={ra.formattedUrl} style={linkStyle} target={"_blank"} className="displayLink">
                  {ra.displayLink}
                </Link>
              </div> 
            </div>

            <div className="linkSnip" style={linkStyle}>
              {ra.snippet}
            </div>
          </div>    
        })
      }
      
    </div>
      
    
  </div>
  );
}

export default SearchResult;
