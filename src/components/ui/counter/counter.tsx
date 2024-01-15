import './counter.scss';
import { FC, useState } from "react";

export const Counter:FC = () => {
const [counter, setCounter] = useState(1);

const increment = () => {
  setCounter(prev => prev += 1);
}

const decrement = () => {
  setCounter(prev => prev -=1);
}

  return (
    (!!counter
      && (
        <div className="counter">
          <button
            className="counter__increment"
            onClick={decrement}
          />

          <p 
            className="counter__count"
          >
            {counter}
          </p>

          <button 
            className="counter__decrement"
            onClick={increment}
          />
        </div>
      )
    )
  );
};