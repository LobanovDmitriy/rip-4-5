import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchGetAllServicesAction} from "../store/actions/serviceAction";
import {LinkStyled} from "../components/LinkStyled";
import {Link} from "react-router-dom";
import {LinkRoute} from "../components/LinkRoute";
import {useDebounce} from "../hooks/useDebounce";

export const HomePage = () =>{
    const dispatch = useDispatch()
    const {services} = useSelector(store=>store.service)
    const [value, setValue] = useState('')
    const [minCost, setMinCost] = useState('')
    const [maxCost, setMaxCost] = useState('')
    const debouncedValue = useDebounce(value)
    const debouncedMinCost = useDebounce(minCost)
    const debouncedMaxCost = useDebounce(maxCost)

    const handleMinCost = (e) => {
        +e.target.value === 0 ? setMinCost('') : setMinCost(+e.target.value)
    }

    const handleMaxCost = (e) => {
        +e.target.value === 0 ? setMaxCost('') : setMaxCost(+e.target.value)
    }


    useEffect(()=>{
        const values = {name:debouncedValue || '', min_cost:debouncedMinCost, max_cost:debouncedMaxCost}
        dispatch(fetchGetAllServicesAction(values))

    }, [dispatch, debouncedValue, debouncedMinCost, debouncedMaxCost])

    // useEffect(()=>{dispatch(fetchGetAllServicesAction())},[dispatch])

    return <div>
        <div><LinkRoute to="/">Главная</LinkRoute></div>
        <div className="flex flex-col float-right gap-1">
            <div className="w-fit font-semibold border-2 rounded-md border-blue-400 float-right flex flex-col">
                Поиск по названию: <input className="bg-transparent" placeholder="Введите название" value={value} onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <div className="w-fit font-semibold border-2 rounded-md border-blue-400 float-right flex flex-col">
                Минимальная стоимость: <input className="bg-transparent" type="number" value={minCost} onChange={handleMinCost} placeholder="0"/>
                Максимальная стоимость: <input className="bg-transparent" type="number" value={maxCost} onChange={handleMaxCost} placeholder="99999"/>
            </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
            {services.map(service => <Link to={`/service/${service.idservice}`} key={service.idservice} className="w-1/3 text-xl font-semibold py-2 px-4 border-2 rounded-md border-red-500">{service.name}</Link>)}
        </div>
    </div>
}