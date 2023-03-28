import React, { useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Center(prop) {
  const {width, height} = useWindowDimensions()

  // const color = prop.color? prop.color :'white'
  
  const divStyle = {
    maxWidth: width,
    minHeight: height,
    // border: '10px solid red',
    // backgroundColor: color
  }

  return (

    <div className='container d-flex align-items-center justify-content-center' style={divStyle}>
      {prop.children}
    </div>
  );
}
