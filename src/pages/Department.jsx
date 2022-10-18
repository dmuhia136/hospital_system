import React from 'react'
import AsideBar from '../components/AsideBar'

function Department() {
  return (
    <div className="flex">
    {/* Aside bar */}
    <div className="w-2/12 only-mobile non-mobile">
      <AsideBar />
    </div>
    {/* Main body */}
   
  </div>
  )
}

export default Department