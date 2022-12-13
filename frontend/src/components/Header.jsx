import {LinkStyled} from "./LinkStyled";
import {useDispatch, useSelector} from "react-redux";
import {handleAuthorized} from "../store/reducers/userReducer";
import {fetchLogoutAction, fetchSigninAction} from "../store/actions/authAction";
import {fetchGetUserAction} from "../store/actions/userAction";
import {fetchRemoveFromBasketAction} from "../store/actions/basketAction";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export const Header = () =>{
    const {authorized, user} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    // const handleAuth = () => {
    //     dispatch(handleAuthorized())
    // }
    const location = useLocation()
    const isAuth = location.pathname.includes('auth')

    const handleLogout = () =>{
        localStorage.setItem('access', '')
        localStorage.setItem('refresh', '')
        window.location.reload();
    }

    return (
        <div className="flex justify-between w-full bg-gray-200 p-4">
            <div className="flex gap-2">
                <img className="h-6 w-auto" src={require("../static/SeekPng.com_scrubs-png_3136999.png")} alt="logo"/>
                <Link to="/" className="text-md text-red-600 font-bold">Sacred Heart Clinic</Link>
            </div>
            <div className="flex gap-4">
                {/*<LinkStyled to="/">Главная</LinkStyled>*/}
                {!isAuth && authorized && user.is_superuser && <LinkStyled to="/manager">Панель менеджера</LinkStyled>}
                {!isAuth && authorized && <LinkStyled to="/basket">Корзина</LinkStyled>}
                {!isAuth && authorized && user.username}
                {!isAuth && authorized && <button className="text-red-600" onClick={handleLogout}>Выйти</button>}
                {!authorized && <LinkStyled to="/auth/signin">Войти</LinkStyled>}
                {!authorized && <LinkStyled to="/auth/signup">Зарегистрироваться</LinkStyled>}
                {/*<button className="text-red-600" onClick={handleAuth}>{authorized? 'Выйти' : 'Войти'}</button>*/}
            </div>
        </div>

    )
}