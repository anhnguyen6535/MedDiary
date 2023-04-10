import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Center(prop) {
  const {width, height} = useWindowDimensions()
  
  const divStyle = {
    maxWidth: width,
    minHeight: height,
  }

  return (

    <div className='container d-flex align-items-center justify-content-center' style={divStyle}>
      {prop.children}
    </div>
  );
}
