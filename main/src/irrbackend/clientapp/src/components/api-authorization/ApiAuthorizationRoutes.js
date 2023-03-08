import React from 'react';
import { Login } from './Login'
import { Logout } from './Logout'
import { ApplicationPaths, LoginActions, LogoutActions } from './ApiAuthorizationConstants';

const ApiAuthorizationRoutes = [
  {
    path: ApplicationPaths.Login,
    page: loginAction(LoginActions.Login)
  },
  {
    path: ApplicationPaths.LoginFailed,
    page: loginAction(LoginActions.LoginFailed)
  },
  {
    path: ApplicationPaths.LoginCallback,
    page: loginAction(LoginActions.LoginCallback)
  },
  {
    path: ApplicationPaths.Profile,
    page: loginAction(LoginActions.Profile)
  },
  {
    path: ApplicationPaths.Register,
    page: loginAction(LoginActions.Register)
  },
  {
    path: ApplicationPaths.LogOut,
    page: logoutAction(LogoutActions.Logout)
  },
  {
    path: ApplicationPaths.LogOutCallback,
    page: logoutAction(LogoutActions.LogoutCallback)
  },
  {
    path: ApplicationPaths.LoggedOut,
    page: logoutAction(LogoutActions.LoggedOut)
  }
];

function loginAction(name){
  return <Login action={name}></Login>;
}

function logoutAction(name) {
  return <Logout action={name}></Logout>;
}

export default ApiAuthorizationRoutes;
