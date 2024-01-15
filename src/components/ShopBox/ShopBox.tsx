import './ShopBox.scss'
import { FC } from "react";
import { ShopList } from "../ShopList/ShopList";

export const ShopBox:FC = () => {
  return (
    <div className="shop-box">
      <ShopList />
    </div>
  );
}