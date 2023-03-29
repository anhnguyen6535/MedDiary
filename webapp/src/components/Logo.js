import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logo(prop) {
  const navigate = useNavigate()
  const size = {
    fontSize: prop.size
  }

  return (
    <div className='logo' style={size} onClick={() => navigate('/')}>MedDiary</div>
  )
}
