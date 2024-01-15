import { Outlet } from 'react-router-dom';
import { RulesNav } from '../rulesNav/rulesNav';
import './rules.scss';
import { useState } from 'react';

export const Rules = () => {
  const [searchQuery, setSearchQueary] = useState('');

  return (
    <section className='section__content rules'>
      <div className="rules__input-content">
        <input 
          className='rules__input'
          placeholder='Поиск'
          type='text'
          value={searchQuery}
          onChange={e => setSearchQueary(e.target.value)}

        />
        <svg 
          className='rules__input-search' 
          width="24"
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle 
            cx="11.5" 
            cy="11.5" r="9.5" 
            stroke="white" 
            strokeOpacity="0.5" 
            strokeWidth="1.5"
          />
          <path 
            d="M18.5 18.5L22 22" 
            stroke="white" 
            strokeOpacity="0.5" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="rules__content">
        <RulesNav />
        <Outlet />
      </div>
      
    </section>
  );
}