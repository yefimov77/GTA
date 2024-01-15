import './header.scss';
import { FC } from 'react';
import { Navbar } from '../Navbar/navbar';
import { wallet } from '../../store/cashStore';
import { observer } from 'mobx-react-lite';
import { appLvl } from '../../store/accessLvlStore';
import { NavLink } from 'react-router-dom';

export const Header: FC = observer(() => {
  const handleLvlUp = () => {
    if (appLvl.lvl === 5) {
      return;
    }

    appLvl.lvlUp();
  }

  const handleLvlDown = (e: React.MouseEvent) => {
    e.preventDefault()

    if (appLvl.lvl === 1) {
      return;
    }

    appLvl.lvlDown();
  }

  return (
    <header 
      className="header"
    >
      <div className="header__content">
        <div className="header__content-return return">
          <NavLink to='/'> 
            <button className="return-btn" />
          </NavLink>
          <h3 className="return-text">Меню</h3>
        </div>

        <Navbar />

        <img
          className="header__content-logo"
          src='../../../public/img/header-logo.svg'
          alt="logo"
        />

        <h3 
          className="header__content-access"
          onClick={handleLvlUp}
          onContextMenu={handleLvlDown}
        >
          {`Уровень доступа ${appLvl.lvl}`}
        </h3>
      </div>

      <div className="header__purse purse">
          <div className="purse-logo" />
          <div className="purse__box">
            <h3 className="purse__box-tittle">Денег с собой</h3>
            <p className="purse__box-cash">{`$ ${wallet.cash}`}</p>
          </div>
      </div>
    </header>
  );
});