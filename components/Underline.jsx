import React from 'react'

const Underline = ({width,height}) => {
  return (
    <div className={`h-${height} mt-1 w-${width} m-auto bg-gradient-to-r from-red-500 via-amber-400 to-green-600`}></div>
  )
}

export default Underline
