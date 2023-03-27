import React from 'react'

export default function Logo(prop) {
  const size = {
    fontSize: prop.size

  }

  return (
    <div className='logo' style={size}>MedDiary</div>
  )
}
