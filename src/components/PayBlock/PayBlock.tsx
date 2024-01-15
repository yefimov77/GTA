import { FC } from 'react';
import './PayBlock.scss';
import { shop } from '../../store/shopBoxStore';
import { wallet } from '../../store/cashStore';
import { Button } from '../StyledComponents/Button/Button';

export const PayBlock:FC = () => {
  const handlePayment = () => {
    wallet.pay(shop.totalPrice);
    shop.deleteAll(); 
  };
  
  return (
    <div className="pay-block">
      <div className="pay-block__header">
        <p className="pay-block__description">к оплате</p>
        <p className="pay-block__price">{`$ ${shop.totalPrice}`}</p>
      </div>

      <div className="pay-block__footer">
        <button 
          className="resetBag-btn"
          onClick={shop.deleteAll}
        />
        <Button
          onClick={handlePayment}
        >
          Оплатить
        </Button>
      </div>
    </div>
  );
}