import {Link} from "react-router-dom";
import {services} from "../services";
import {useEffect, useState} from "react";
import {Service} from "../components/Service";

export const HomePage = () =>{
    const [display, setDisplay] = useState(false)
    const [service, setService] = useState(services[0])
    useEffect(()=>{setService(services[Math.floor(Math.random()*services.length)])},[display])
    return <div>
        <Link to="/">Главная</Link>
        <h1>Домашняя страница</h1>
        <p>Случайная медицинская услуга:</p>
        <Service service={service}/>
        <button onClick={()=>setDisplay((prev)=>!prev)}>{display? "Скрыть" : "Показать"}</button>
        {display && <div style={{display: "flex", flexDirection: "column"}}>
            {services.map(service => <Link to={`/service/${service.id}`} key={service.id}>{service.id}. {service.name}</Link>)}
        </div>}
    </div>
}