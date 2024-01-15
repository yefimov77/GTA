import { rules } from '../../services/rules';
import './forum.scss';
import { FC } from "react";

export const Forum:FC = () => {
  return (
    <div className="forun">
      <h1 className="forum__tittle">
        Форум
      </h1>
      
      <div className="content__box">
        {rules.filter(el => el.category === 'forum').map(el => (
          <div 
            key={el.id}
            className="forum__text-content content"
          >
            <h3 className="content__title">
              {el.title}
            </h3>
            <p className="content__text">
              {el.text}
            </p>
          </div>
        ))}
      </div>
    </div> 
  );
};