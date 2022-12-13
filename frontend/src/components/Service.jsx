import {useDispatch, useSelector} from "react-redux";
import {fetchAddToBasketAction} from "../store/actions/basketAction";
import dayjs from "dayjs";

export const Service = ({service}) => {
    const {authorized, user} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    const handleAdd = () => {
        const order_date = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        const values = {
            id_service:service.idservice,
            id_user:user.id,
            status: 0,
            order_date,
        }
        console.log(values)
        dispatch(fetchAddToBasketAction(values))
    }
    return (
        <div className="p-4 flex flex-col gap-2">
            <p className="text-xl font-semibold">{service.name}</p>
            <p className="text-s">{service.description}</p>
            <p className="text-2xl font-semibold">{service.price} ₽</p>
            {authorized && <button className="bg-green-200 w-fit" onClick={handleAdd}>Добавить в корзину</button>}
        </div>
    )
}