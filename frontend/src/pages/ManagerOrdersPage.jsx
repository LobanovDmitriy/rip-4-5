import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetBasketAction, fetchGetUserBasketAction} from "../store/actions/basketAction";
import {LinkRoute} from "../components/LinkRoute";
import {BasketCard} from "../components/BasketCard";
import {ManagerBasketCard} from "../components/ManagerBasketCard";

export const ManagerOrdersPage = () =>{
    const dispatch = useDispatch()
    const {services, fetchActionStatus} = useSelector(store=>store.basket)
    const {authorized, user} = useSelector(store=>store.user)

    useEffect(()=>{
        dispatch(fetchGetBasketAction())
    },[dispatch, fetchActionStatus])


    return (
        <div>
            {authorized && user.is_superuser && (
                <div className="gap-3">
                    <div className="flex flex-col gap-2 p-3">
                        {!!services && services.map(note=><ManagerBasketCard key={note.iduserservice} note={note}/>)}
                    </div>
                </div>
            )}
        </div>
    )
};