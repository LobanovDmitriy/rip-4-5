import {useDispatch, useSelector} from "react-redux";
import {fetchRemoveFromBasketAction, fetchUpdateBasketStatusAction} from "../store/actions/basketAction";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {fetchGetAllServicesAction} from "../store/actions/serviceAction";
import {reset} from "../store/reducers/serviceReducer";
import {Link} from "react-router-dom";

export const ManagerBasketCard = ({note}) => {
    const dispatch = useDispatch()
    const [newStatus, setNewStatus] = useState();

    // const {services} = useSelector(store=>store.service)
    const handleUpdStatus = () =>{
        const values = {
            id : note.iduserservice,
            status : newStatus,
        }
        console.log(values)
        dispatch(fetchUpdateBasketStatusAction(values))
        window.location.reload();
    }
    const handleStatusAccept = () =>{
        const values = {
            id : note.iduserservice,
            status : 1,
        }
        console.log(values)
        dispatch(fetchUpdateBasketStatusAction(values))
        window.location.reload();
    }
    const handleStatusDone = () =>{
        const values = {
            id : note.iduserservice,
            status : 2,
        }
        console.log(values)
        dispatch(fetchUpdateBasketStatusAction(values))
        window.location.reload();
    }
    const handleStatusRejected = () =>{
        const values = {
            id : note.iduserservice,
            status : 3,
        }
        console.log(values)
        dispatch(fetchUpdateBasketStatusAction(values))
        window.location.reload();
    }
        const handleStatusWanted = () =>{
        const values = {
            id : note.iduserservice,
            status : 0,
        }
        console.log(values)
        dispatch(fetchUpdateBasketStatusAction(values))
        window.location.reload();
    }

    // useEffect(()=>{dispatch(fetchGetAllServicesAction())},[dispatch])

    return <div className="w-fit py-1 px-1 border-2 rounded-md border-green-500">
        <p className="text-2xl">Имя клиента: {note.id_user.username}</p>
        <p className="text-xl">{note.id_service.name}</p>
        <p>Стоимость: {note.id_service.price} ₽</p>
        <p>Дата добавления: {dayjs(note.order_date).format('YYYY.MM.DD HH:mm')}</p>
        {note.status === 0 ? <p className="bg-gray-300">Статус: Услуга заказана </p>: ''}
        {note.status === 1 ? <p className="bg-blue-300">Статус: Услуга подтверждена </p>: ''}
        {note.status === 2 ? <p className="bg-green-300">Статус: Услуга оказана </p>: ''}
        {note.status === 3 ? <p className="bg-red-300">Статус: Услуга отменена </p>: ''}
        {/*<select value={newStatus}*/}
        {/*        onChange={(e) => setNewStatus(e.target.value)}>*/}
        {/*    <option value="0">Услуга заказана</option>*/}
        {/*    <option value="1">Услуга подтверждена</option>*/}
        {/*    <option value="2">Услуга оказана</option>*/}
        {/*    <option value="3">Услуга отменена</option>*/}
        {/*</select>*/}
        <div className="flex gap-2 p-1">
        {note.status === 0 ? <button className="bg-gray-200" onClick={handleStatusAccept}>Подтвердить</button>: ''}
        {note.status === 1 ? <button className="bg-gray-200" onClick={handleStatusDone}>Завершить</button>: ''}
        {note.status === 1 ? <button className="bg-gray-200" onClick={handleStatusRejected}>Отменить</button>: ''}
        {note.status === 3 ? <button className="bg-gray-200" onClick={handleStatusWanted}>Вернуть</button>: ''}
        </div>
    </div>
}