import React from "react";


export default function ShopCard({card, index}) {
  const { name, price, color, img } = card;
  return (
      <div className="card">
          <h3 className="card_name">{name}</h3>
          <p className="card_color">{color}</p>
          <img className="img-card" src={img} alt={index}/>
          <div className="footer">
              <p className="card_price">${price}</p>
              <button className="btn">ADD TO CART</button>
          </div>
      </div>
  )
}