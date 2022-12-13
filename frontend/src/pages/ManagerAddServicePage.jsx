import {useDispatch, useSelector} from "react-redux";
import {fetchAddToBasketAction} from "../store/actions/basketAction";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {fetchAddServiceAction, fetchSaveServiceAction} from "../store/actions/serviceAction";

export const ManagerAddServicePage = () => {
    const {authorized, user} = useSelector(store => store.user)
    const dispatch = useDispatch()
    const [newName, setNewName] = useState();
    const [newDescription, setNewDescription] = useState();
    const [newPrice, setNewPrice] = useState();

    const handleAdd = () => {
        const values = {
            name: newName,
            description: newDescription,
            price: newPrice,
        }
        console.log(values)
        dispatch(fetchAddServiceAction(values))
        window.location.reload();
    }

    return (
        <div>
            {authorized && user.is_superuser && (
                <div className="p-4 flex flex-col gap-2">
                    <input className="text-xl font-semibold" placeholder="Название услуги" value={newName}
                           onChange={(e) => setNewName(e.target.value)}/>
                    <input className="text-s" placeholder="Описание услуги" value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}/>
                    <input className="text-2xl font-semibold" type='number' placeholder="Цена" value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}/>
                    <button className="bg-gray-200 w-fit" onClick={handleAdd}>Добавить</button>
                </div>
                )}
        </div>
    )
}

