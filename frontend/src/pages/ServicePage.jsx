import {useParams} from "react-router";
import {Service} from "../components/Service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetOneServiceAction} from "../store/actions/serviceAction";
import {LinkStyled} from "../components/LinkStyled";
import {reset} from "../store/reducers/serviceReducer";
import {LinkRoute} from "../components/LinkRoute";

export const ServicePage = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const {service} = useSelector(store=>store.service)

    useEffect(()=>{dispatch(fetchGetOneServiceAction(id))
    return ()=>dispatch(reset())
    },[dispatch])

    return (
    <div>
        <LinkRoute to="/" >Главная</LinkRoute>
        {!!service && <LinkRoute to={`/service/${service.idservice}`} key={service.idservice}> {service.name}</LinkRoute>}
        {service ? <Service service={service}/> : <h1>Таких услуг не существует:(</h1>}
    </div>)
}