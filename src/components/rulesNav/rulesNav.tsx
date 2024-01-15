import './rulesNav.scss';
import { FC } from "react";
import { NavLink } from 'react-router-dom';

export const RulesNav:FC = () => {
  return (
    <ul className="rules__nav">
      <NavLink
        className='rules__navLink'
        to='forum' 
      >
        <button 
          className="rules__navLink-btn"
        >
          Форум
        </button>
      </NavLink>
      <NavLink
        className='rules__navLink'
        to='server' 
      >
        <button 
          className="rules__navLink-btn"
        >
          Сервер
        </button>
      </NavLink>
      <NavLink
        className='rules__navLink'
        to='admin' 
      >
        <button 
          className="rules__navLink-btn"
        >
          Админ
        </button>
      </NavLink>
      <NavLink
        className='rules__navLink'
        to='other' 
      >
        <button 
          className="rules__navLink-btn"
        >
          другое
        </button>
      </NavLink>
      <NavLink
        className='rules__navLink'
        to='other2' 
      >
        <button 
          className="rules__navLink-btn"
        >
          Другое2
        </button>
      </NavLink>
    </ul>
  );
};