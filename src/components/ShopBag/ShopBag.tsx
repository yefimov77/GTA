import { FC } from "react";
import './ShopBag.scss'
import { ShopBagList } from "../ShopBagList/ShopBagList";

export const ShopBag:FC = () => {
  return (
    <div className="shop-bag">
      <ShopBagList />
    </div>
  );
};