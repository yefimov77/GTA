import { ShopItem } from '../../types/ShopItem';
import { Counter } from '../ui/counter/counter';
import './ShopBagCard.scss';
import { FC } from "react";

interface Props {
  item: ShopItem
}

export const ShopBagCard:FC<Props> = ({ item }) => {
  const {name, imgUrl, price} = item;

  return (
    <li
      className='bag-card'
    >
      <div className="bag-card__content">
        <img 
          src={`/${imgUrl}`} 
          alt="logo" 
          className="bag-card__content-img" 
        />

        <div className="bag-card__contentBox">
          <h3 className="bag-card__content-title">{name}</h3>
          <div className="bag-card__priceBox">
            <p className="bag-card__price">
              {`$ ${price}`}
            </p>
            <Counter />
          </div>
        </div>
      </div>
    </li>
  )
}