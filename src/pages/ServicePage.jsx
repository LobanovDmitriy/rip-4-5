import {useParams} from "react-router";
import {Service} from "../components/Service";

export const ServicePage = ({services}) =>{
    const {id} = useParams()
    const service = services.filter(service=>service.id === +id)
    return (
        service[0] ? <Service service={service[0]}/> : <h1>Таких услуг не существует:(</h1>)
}