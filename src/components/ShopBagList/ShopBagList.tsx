import { FC } from "react";
import './ShopBagList.scss'
import { ShopBagCard } from "../ShoBagCard/ShopBagCard";
import { shop } from "../../store/shopBoxStore";

export const ShopBagList:FC = () => {
  return (
    <ul className="shopBagList">
      {shop.itemsInBox.map(item => (
        <ShopBagCard 
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  )
};