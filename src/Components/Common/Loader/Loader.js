import React from 'react';
import './Loader.css'
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className='loader-contaainer'>
      <CircularProgress />
    </div>
  )
}

export default Loader
