import React from "react";
import ShopCard from "./ShopCard"

export default function CardView({ products }) {
  return (
    <div className="card-view">
      {products.map((card, index) => <ShopCard card={card} index={index} />)}
    </div>
  )
}