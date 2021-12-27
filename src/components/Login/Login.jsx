import React, {useState, useEffect} from 'react';
import './authorization.css'
import Input from "../Input/Input";
import {Button} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../store/auth/thunks";
import {getAuthErrorSelector} from "../../store/auth/selectors"
import { handleErrors } from '../../store/auth/auth';

const Login = () => {
  const dispatch = useDispatch()

  // ===== Local state =====

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const error = useSelector(getAuthErrorSelector)
//   const [emailDirty, setEmailDirty] = useState(false)
//   const [passwordlDirty, setPasswordDirty] = useState(false)
//   const [emailError, setEmailError] = useState("Email не может быть пустым!")
//   const [passwordError, setPasswordlError] = useState("Пароль не может быть пустым!")
  
  useEffect(() => {
      return () => {
          dispatch(handleErrors(null))
      }
  }, [dispatch])

  // ===== Handlers =====

//   const blurHandler = (e) => {
//       switch(e.target.valueType) {
//           case "email":
//               setEmailDirty(true)
//               break
//               case "password" :
//                   setPasswordDirty(true)
//                   break
//       }
//   }

  const loginHandler = () => dispatch(loginThunk(name, email, password))

    return (
        <form>
        <div className='authorization'>
            <div className="authorization__header">Авторизация</div>
            {/* <Input value={name} setValue={setName} type="text" placeholder="Введите ваше имя..."/> */}
            {/* {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>} */}
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            {/* {(passwordlDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>} */}
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <div style={{color:"red"}}>{error}</div>
            <Button className="authorization__btn" variant="outlined" color="primary" onClick={loginHandler}>Вoйти</Button>
        </div>
        </form>
    );
};

export default Login;