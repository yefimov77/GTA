import './shop.scss';
import { FC } from "react";
import { ShopBag } from '../../components/ShopBag/ShopBag';
import { ShopBox } from '../../components/ShopBox/ShopBox';
import { PayBlock } from '../../components/PayBlock/PayBlock';
import { shop } from '../../store/shopBoxStore';
import { observer } from 'mobx-react-lite';


export const Shop:FC =  observer(() => {

  return (
    <div className="shop">
      <ShopBox />
      <div className="div">
        <ShopBag />
        {shop.totalPrice > 0 && <PayBlock />}
      </div>
    </div>
  );
})