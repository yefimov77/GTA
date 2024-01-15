import './shopCard.scss';
import { FC } from "react";
import { ShopItem } from "../../types/ShopItem";
import { shop } from '../../store/shopBoxStore';

interface Props {
  item: ShopItem,
 
}

export const ShopCard:FC<Props> = ({ item }) => {
  const {name, imgUrl, price} = item;
  
  const onAdd = () => {
    shop.addItem(item);

    console.log(shop.itemsInBox);
  };
  
  return (
    <li 
      className="shop-card"
      onClick={onAdd}
    >
        <div className="shop-card__content">
          <img 
            src={`../../../${imgUrl}`} 
            alt="item" 
            className="shop-card__img" 
          />
          <h3 className="shop-card__tittle">{name}</h3>
          <p className="shop-card__price">{`$ ${price}`}</p>
        </div>
    </li>
  )
}