import './ShopList.scss';
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { shopItems } from "../../services/shopItems";
import { ShopCard } from "../ShopCard/shopCard";

export const ShopList:FC = observer(() => {
  return (
    <ul className="shop__list">
      {shopItems.map(item => (
        <ShopCard
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  );
})