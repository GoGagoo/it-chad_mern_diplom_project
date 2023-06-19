import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import { logout, checkIsAuth } from "../redux/features/auth/authSlice"
import {toast} from "react-toastify";

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const activeStyles = {
    color: 'white',
  }

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из аккаунта')
  }

  return (
    <div className='flex py-4 justify-between items-center'>
            <span className='flex justify-center items-center w-24 h-8 bg-gray-600 text-xl   text-white rounded-sm'>
              <Link to={'/'}> IT CHAD </Link>
            </span>

      {isAuth && (
        <ul className='flex gap-8'>
          <li>
            <NavLink
              to={'/'}
              href='/'
              className='text-base text-gray-400 hover:text-white'
              style={({ isActive }) =>
                isActive ? activeStyles : undefined
              }
            >
              Лента
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              href='/'
              className='text-base text-gray-400 hover:text-white'
              style={({ isActive }) =>
                isActive ? activeStyles : undefined
              }
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/new'}
              href='/'
              className='text-base text-gray-400 hover:text-white'
              style={({ isActive }) =>
                isActive ? activeStyles : undefined
              }
            >
              Создать пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
        {isAuth ? (
          <button
            onClick={logoutHandler}
          >Выйти</button>
        ) : (
          <Link to={'/login'}> Войти </Link>
        )}
      </div>
    </div>
  )
}