import React from "react";
import ShopItem from "./ShopItem";

export default function ListVeiw({ products }) {
  return (
    <ul className="list-view">
      {products.map((item, key) => <ShopItem item={item} key={key} />)}
    </ul>
  )
}

