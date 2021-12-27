import React from 'react'
import {useSelector} from "react-redux";
import {getIsAuthSelector} from "../store/auth/selectors";
import {Navigate, Outlet} from "react-router-dom";
import {ROOT_PATH} from "./config";

const AuthRoute = () => {
  // ===== Data =====
  const isAuth = useSelector(getIsAuthSelector)

  if(isAuth) return <Navigate to={ROOT_PATH} />

  if(!isAuth) return <Outlet />
}

export default AuthRoute