import React from 'react';
import './SearchBar.css';


const SearchBar = ({keyword,setKeyword}) => {
  const BarStyle = {width:"20rem",background:"#363231", border:"solid", padding:"0.5rem"};
  return (
    <input className="classbar" 
     style={BarStyle}
     key=""
     value={keyword}
     placeholder={"Search a pokemon"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar