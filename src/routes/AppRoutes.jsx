import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {authThunk} from "../store/auth/thunks";
import Main from "../pages/Main";
import PrivateRoute from "./PrivateRoute";
import CheckersPage from "../pages/Checkers";
import {Route, Routes} from "react-router-dom";
import {AUTH_PATH, ROOT_PATH} from "./config";
import AuthRoute from "./AuthRoute";

const AppRoutes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authThunk())
  }, [dispatch]) 
  // юзеэффект-функц замена жизн циклу компонента,но более гибкая, потому что  
  // инициализируется проверка, вызывается санка,кот инициал проверку авторизации,
  // и если есть сохр токен у юзера, она санка его проверит и заполнит профиль юзера
  // в [] - изменения того,что мы отслеживаемж в юзеффекте срабатывается каждый раз при первом рендере,и каждый раз когда 
  //обновляется диспатч(то что в [])

  return <Routes>
    <Route path={AUTH_PATH} element={<AuthRoute/>}>
      <Route path='' element={<Main/>}/>
    </Route>
    <Route path={ROOT_PATH} element={<PrivateRoute/>}>
      <Route path='' element={<CheckersPage/>}/>
    </Route>
  </Routes>
}

export default AppRoutes