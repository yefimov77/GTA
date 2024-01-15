import './inputsPage.scss';
import cn from 'classnames';
import { validateAll, validateEmail, validateField, validateLogin, validatePassword } from './helpers';
import { FC, useState } from "react";
import { Button } from '../../components/StyledComponents/Button/Button';

export const InputsPage:FC = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isChecked, setIscChecked] = useState(false);
  const [isValidLogin, setIsValidLogin] = useState<boolean | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [isValidPassword, setIsValidPassword] = useState<boolean | null>(null);
  const [shouldShowPass, setShouldShowPassword] = useState(false);
  const [shouldShowCheckPass, setShouldShowCheckPassword] = useState(false);

  const resetForm = () => {
    setLogin('');
    setEmail('');
    setPassword('');
    setCheckPassword('');
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    resetForm();
  }

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  
    setLogin(inputValue);
  
    validateField(login, setIsValidLogin, validateLogin);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  
    setEmail(inputValue);
  
    validateField(inputValue, setIsValidEmail, validateEmail);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  
    setCheckPassword(inputValue);
  
    validateField(inputValue, setIsValidPassword, () => validatePassword(login, email, password, inputValue));
  }

  const isAllValidated: boolean = validateAll(
    {login,
     email,
     password,
     checkPassword
    }
  ) && isChecked;

  

  return (
    <section className="section__content inputs">
      <form 
        action="POST" 
        className="inputs__form"
        onSubmit={submitHandler}
      >
        <div className="inputs__form-inputs inputs">
          <input 
            type="text" 
            className={cn('inputs__input',
                { 
                  error: isValidLogin === false,
                  success: isValidLogin,
                }
              )
            }
            placeholder="Логин"
            minLength={3}
            maxLength={16}
            value={login}
            onChange={handleLoginChange}
          />

          <input 
            type="email"
            className={cn('inputs__input',
                { 
                  error: isValidEmail === false,
                  success: isValidEmail,
                }
              )
            }
            placeholder="E-mail"
            minLength={3}
            value={email}
            onChange={handleEmailChange}
          />
          <div className="password">

            <input 
              type={shouldShowPass ? 'text' : 'password'}
              className={cn('inputs__input', 'password',
                  { 
                    error: isValidPassword === false,
                    success: isValidPassword,
                  }
                )
              }
              placeholder="Пароль"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              className="password-btn"
              onClick={(e) => {
                e.preventDefault();
                setShouldShowPassword(!shouldShowPass);
              }}
            />

          </div>
          <div className="password">
            <input 
              type={shouldShowCheckPass ? 'text' : 'password'}
              className={cn('inputs__input', 'password',
                  { 
                    error: isValidPassword === false,
                    success: isValidPassword,
                  }
                )
              }
              placeholder="Повторите Пароль"
              minLength={6}
              value={checkPassword}
              onChange={handlePasswordChange}
            />
            <button 
              className="password-btn"
              onClick={(e) => {
                e.preventDefault();
                setShouldShowCheckPassword(!shouldShowCheckPass);
              }}
            />
          </div>
        </div>

        <label 
          htmlFor="checkbox"
          className='inputs__form-checkbox'
        >
          <input
            id='checkbox' 
            type="checkbox"
            className='inputs__form-checkbox'
            checked={isChecked}
            onChange={() => setIscChecked(!isChecked)}
          />
          <span 
            className='inputs__form-checkbox-span'
          >
            Принимаю правила и соглашаюсь
          </span>
        </label>

        <Button
          type='submit'
          disabled={!isAllValidated}
        > 
          Check
        </Button>
      </form>
    </section>
  );
}