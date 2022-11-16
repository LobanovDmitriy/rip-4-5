import {useParams} from "react-router";
import {Service} from "../components/Service";
import {Link} from "react-router-dom";

export const ServicePage = ({services}) =>{
    const {id} = useParams()
    const service = services.filter(service=>service.id === +id)
    return (
    <div>
        <Link to="/">Главная</Link>
        /
        {service[0] ? <Link to={`/service/${service[0].id}`} key={service[0].id}>{service[0].name}</Link> : <></>}
        {service[0] ? <Service service={service[0]}/> : <h1>Таких услуг не существует:(</h1>}
    </div>)
}