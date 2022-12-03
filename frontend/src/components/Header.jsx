import {LinkStyled} from "./LinkStyled";
import {useDispatch, useSelector} from "react-redux";
import {handleAuthorized} from "../store/reducers/userReducer";

export const Header = () =>{
    const {authorized, name} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    const handleAuth = () => {
        dispatch(handleAuthorized())
    }
    return (
        <div className="flex w-full justify-end gap-4 bg-gray-200 p-4 ">
            <LinkStyled to="/">Главная</LinkStyled>
            {authorized && <LinkStyled to="/basket">Корзина</LinkStyled>}
            {authorized && name}
            <button className="text-red-600" onClick={handleAuth}>{authorized? 'Выйти' : 'Войти'}</button>
        </div>

    )
}