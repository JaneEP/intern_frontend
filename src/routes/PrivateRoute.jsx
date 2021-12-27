import React from 'react'
import {useSelector} from "react-redux";
import {getCheckedAuthSelector, getIsAuthSelector} from "../store/auth/selectors";
import {Navigate, Outlet } from "react-router-dom";
import {AUTH_PATH} from "./config";

const PrivateRoute = () => {
  // ===== Data =====
  const isAuth = useSelector(getIsAuthSelector)
  const checkedAuth = useSelector(getCheckedAuthSelector)

  if(!isAuth && !checkedAuth) return <div>Loading...</div>
  //если не сделали проверку и не залогин - лоадинг(не важно какой адрес)

  if(!isAuth && checkedAuth) return <Navigate to={AUTH_PATH} />
  // если не залогин, но сделалаи проверку, то на страницу авторизации идем

  if(isAuth && checkedAuth) return <Outlet />
  // если и залогин и прошли проверку - пропускает вложенные роуты
}

export default PrivateRoute

// Outlet - то место, куда мы хотим вставить всё остальное(все вложенные роуты)