import React from 'react'

function Header({ itemCount }) {
  return (
    <><div style={{ textAlign: 'center' }}>
      <h2 style ={{fontSize: "40px"}}>My new Card using React</h2>
    </div>
    <div style={{ textAlign: 'right' }}>
      <button className ="mycartbtn" >My Cart {itemCount} </button>
    </div>
    </>
  )
}

export default Header