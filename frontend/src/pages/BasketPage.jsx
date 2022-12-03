import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetBasketAction} from "../store/actions/basketAction";
import {BasketCard} from "../components/BasketCard";
import {LinkRoute} from "../components/LinkRoute";

export const BasketPage = () =>{
    const dispatch = useDispatch()
    const {services, fetchActionStatus} = useSelector(store=>store.basket)

    useEffect(()=>{dispatch(fetchGetBasketAction())},[dispatch, fetchActionStatus])


    return (<div className="gap-3">
        <div><LinkRoute to="/basket">Корзина</LinkRoute></div>
        <div className="flex flex-col gap-2 p-3">
            {!!services && services.map(note=><BasketCard key={note.iduserservice} note={note}/>)}
        </div>
    </div>
    )
}