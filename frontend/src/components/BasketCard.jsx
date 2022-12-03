import {useDispatch, useSelector} from "react-redux";
import {fetchRemoveFromBasketAction} from "../store/actions/basketAction";
import dayjs from "dayjs";
import {useEffect} from "react";
import {fetchGetAllServicesAction} from "../store/actions/serviceAction";
import {reset} from "../store/reducers/serviceReducer";
import {Link} from "react-router-dom";

export const BasketCard = ({note}) => {
    const dispatch = useDispatch()
    // const {services} = useSelector(store=>store.service)
    const handleRemove = () =>{
        note.iduserservice && dispatch(fetchRemoveFromBasketAction(note.iduserservice))
    }

    // useEffect(()=>{dispatch(fetchGetAllServicesAction())},[dispatch])

    return <div className="w-fit py-1 px-1 border-2 rounded-md border-green-500">
        <p>Статус: {note.status ? 'Услуга заказана' : 'Услуга оказана'}</p>
        <p>Дата добавления: {dayjs(note.order_date).format('YYYY.MM.DD HH:mm')}</p>
        <button className="bg-red-200" onClick={handleRemove}>Убрать</button>
    </div>
}