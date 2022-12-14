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
        <p className="text-xl">{note.id_service.name}</p>
        <p>Стоимость: {note.id_service.price} ₽</p>
        <p>Дата добавления: {dayjs(note.order_date).format('YYYY.MM.DD HH:mm')}</p>
        {note.status === 0 ? <p className="bg-gray-300">Статус: Услуга заказана </p>: ''}
        {note.status === 1 ? <p className="bg-blue-300">Статус: Услуга подтверждена </p>: ''}
        {note.status === 2 ? <p className="bg-green-300">Статус: Услуга оказана </p>: ''}
        {note.status === 3 ? <p className="bg-red-300">Статус: Услуга отменена </p>: ''}
        <button className="bg-red-200" onClick={handleRemove}>Убрать</button>
    </div>
}