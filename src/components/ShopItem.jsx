export default function ShopItem({ item, key }) {
  const { name, price, color, img } = item;
  return (
    <li className="item">
      <img className="item-img" src={img} alt={key} />
      <h3 className="card_name">{name}</h3>
      <p className="card_color">{color}</p>
      <p className="card_price">${price}</p>
      <button className="btn">ADD TO CART</button>
    </li>
  )
}