import React from 'react'
import './Child.css';


function Child({imagen="child"}) {
  return (
    <div>
        <div className="child">
     <img src={imagen} /> 
     </div>
    </div>
  )
}
export default Child