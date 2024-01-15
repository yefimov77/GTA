import { domains } from "../../types/domains";
import { valdiateObj } from "../../types/validateObj";

export const validateLogin = (login: string): boolean => {
  const regex = /^[a-zA-Z0-9]+$/;

  if (regex.test(login.trim())) {
    console.log('all symbols matches english letters or numebrs');
    return true;
  } else {
    console.log('fail');
    return false;
  }
};

export const validateEmail = (email: string): boolean => {
  const emailPart = email.split('@')[0];
  const domainPart = email.split('@')[1];

  if (domains.includes(domainPart) && emailPart.length >= 3) {
    console.log('correct domain');
    return true;
  } else {
    console.log('enter correct domain');
    return false;
  }
}

function hasLetterAndNumber(str: string): boolean {
  const letterRegex = /[a-zA-Z]/;
  const digitRegex = /\d/;

  return (letterRegex.test(str) && digitRegex.test(str));
}


export const validatePassword = (
  login: string,
  email: string,
  password: string,
  checkPassword: string,
): boolean => {
  if (!password) {
    console.log('no password');
    return false;
  }

  if (!hasLetterAndNumber(password)) {
    console.log('password should contain at least 1 char and 1 numebr');
    return false;
  }

  if (password === email || password === login) {
    console.log('password shouldn`t match login or e-mail')
    return false;
  }

  if (password === checkPassword) {
    console.log('correct')
    return true;
  } else {
    console.log('passwords doesn`t match')
    return false;
  }
}


export const validateAll = (obj: valdiateObj) => {
  const {
    login,
    email,
    password,
    checkPassword,
  } = obj;

  return (validateLogin(login) 
    && validateEmail(email) 
    && validatePassword(login, email, password, checkPassword));
}

export const validateField = (
  param: string,
  func: React.Dispatch<React.SetStateAction<boolean | null>>,
  validationFunc: (param: string) => boolean  // Explicitly define the type
) => {
  return func(validationFunc(param));
}