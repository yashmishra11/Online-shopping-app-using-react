import "./Card.css"
import React from 'react';
function Card({  title, src, desc, itemCount, setItemCount}) {

  let addToCart = () => {
    setItemCount(itemCount + 1);
  };
  return (
    <div style={{display: "flex", flexWrap: "wrap"}} className='card-wrapper'>
      <h1>{title}</h1>
      <button onClick={addToCart}>Add to cart</button><br /><br />
      <img width="250" src={src} alt="" />
      <p>{desc}</p>

      <button>Buy now</button><br />
    </div>
  )
}
export default Card
