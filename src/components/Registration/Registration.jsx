import React, {useState, useEffect} from 'react';
import "./registration.css"
import Input from "../Input/Input";
import {Button} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {registrationThunk} from "../../store/auth/thunks";
import {getAuthErrorSelector} from "../../store/auth/selectors";
import { handleErrors } from '../../store/auth/auth';


const Registration = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
        dispatch(handleErrors(null))
    }
}, [dispatch])

  // ===== Local state =====

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordRepiet, setPasswordRepiet] = useState("")
  const [name, setName] = useState("")
  const error = useSelector(getAuthErrorSelector)

  // ===== Handlers =====

  const registrationHandler = () => dispatch(registrationThunk(name, email, password))

  return (
    <div className='registration'>
      <div className="registration__header">Регистрация</div>
      <Input value={name} setValue={setName} type="text" placeholder="Введите ваше имя"/>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
      <Input id="pass1" value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
      <Input id="pass2" value={passwordRepiet} setValue={setPasswordRepiet} type="password" placeholder="Повторите пароль..."/>
      <div style={{color:"red"}}>{error}</div>
      <Button
        className="registration__btn"
        variant="outlined"
        color="primary"
        onClick={registrationHandler}
      >Войти</Button>
    </div>
  );
};

export default Registration
