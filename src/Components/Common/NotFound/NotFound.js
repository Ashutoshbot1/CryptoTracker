import React from 'react';
import './NotFound.css';
import Button from '../Button/Button';

const NotFound = ({setSearch}) => {

    // Function clearSearch
    function clearSearch(){
        setSearch("");
    }
  return (
    <div className='not-found-wrapper'>
      <div className="not-find-container">
        <p className='message'>Oops! Coin Not Found</p>
        <div className="btn-flex">

        <Button text={"Clear Search"} onClick={clearSearch} outlined={true}/>
        </div>
      </div>
    </div>
  )
}

export default NotFound
