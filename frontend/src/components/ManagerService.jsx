import {useDispatch, useSelector} from "react-redux";
import {fetchAddToBasketAction} from "../store/actions/basketAction";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {fetchDeleteServiceAction, fetchSaveServiceAction} from "../store/actions/serviceAction";

export const ManagerService = ({service}) => {
    const dispatch = useDispatch()
    const [newName, setNewName] = useState();
    const [newDescription, setNewDescription] = useState();
    const [newPrice, setNewPrice] = useState();

    useEffect(() => {
        setNewName(service.name);
        setNewDescription(service.description);
        setNewPrice(service.price);
    }, [service]);

    const handleSave = () => {
        const values = {
            id : service.idservice,
            name : newName,
            description : newDescription,
            price : newPrice,
        }
        console.log(values)
        dispatch(fetchSaveServiceAction(values))
    }

    const handleDelete = () => {
        const values = {
            id : service.idservice,
            name : newName,
            description : newDescription,
            price : newPrice,
        }
        console.log(values)
        dispatch(fetchDeleteServiceAction(values))
        window.location.reload();
    }

    return (
        <div className="p-4 flex flex-col gap-2">
            {/*<form >*/}
                <input className="text-xl font-semibold" defaultValue={service.name} value={newName}
                       onChange={(e) => setNewName(e.target.value)}/>
                <input className="text-s" defaultValue={service.description} value={newDescription}
                       onChange={(e) => setNewDescription(e.target.value)}/>
                <input className="text-2xl font-semibold"  type='number' value={newPrice}
                       onChange={(e) => setNewPrice(e.target.value)}/>
                <button  className="bg-gray-200 w-fit" onClick={handleSave}>Сохранить</button>
                <button  className="bg-gray-200 w-fit" onClick={handleDelete}>Удалить</button>
            {/*</form>*/}
        </div>
    )
}