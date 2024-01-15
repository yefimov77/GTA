import './navbar.scss'
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { appLvl } from '../../store/accessLvlStore';
import { AnimationsBtn, InputsBtn, RulesBtn, ShopBtn } from '../StyledComponents/NavBtn/NavBtn';

export const Navbar: FC = observer(() => {
  const isInputsDisabled = appLvl.lvl < 2;
  const isShopDisabled = appLvl.lvl < 3;
  const isAnimationsDisabled = appLvl.lvl < 4;
  const location = useLocation().pathname;

  return (
    <nav className="nav">
      <ul className="menu__list">
        <li 
          className={cn('menu__list-item',
            { active: location.includes('rules') },
          )}
        >
          <RulesBtn>
            <NavLink 
              to={'rules'}
              className='navlink'
            >
              Правила
            </NavLink>
          </RulesBtn>
        </li>

        <li 
          className={cn('menu__list-item',
            { active: location === '/inputs' },
          )}
        >
          <InputsBtn
            disabled={isInputsDisabled}
          >
            <NavLink 
              className={cn('navlink', {isDisabled: isInputsDisabled})}
              to={'inputs'}
            >
              Инпуты
            </NavLink>
          </InputsBtn>
        </li>

        <li 
          className={cn('menu__list-item',
            { active: location === '/shop' },
          )}
        >
          <ShopBtn
            disabled={isShopDisabled}
          > 
            <NavLink 
              className={cn('navlink', {isDisabled: isShopDisabled})}
              to={'shop'}
            >
              Магазин
            </NavLink>
          </ShopBtn>
        </li>

        <li 
          className={cn('menu__list-item',
            { active: location === '/animations' },
          )}
        >
          <AnimationsBtn
            disabled={isAnimationsDisabled}
          >
            <NavLink 
              className={cn('navlink', {isDisabled: isAnimationsDisabled})}
              to={'animations'}
            >
              Анимации
            </NavLink>
          </AnimationsBtn>
        </li>

      </ul>
    </nav>
  );
})