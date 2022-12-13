import {useParams} from "react-router";
import {ManagerService} from "../components/ManagerService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetOneServiceAction} from "../store/actions/serviceAction";
import {LinkStyled} from "../components/LinkStyled";
import {reset} from "../store/reducers/serviceReducer";
import {LinkRoute} from "../components/LinkRoute";

export const ManagerServicePage = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const {service} = useSelector(store=>store.service)
    const {authorized, user} = useSelector(store => store.user)

    useEffect(()=>{dispatch(fetchGetOneServiceAction(id))
        return ()=>dispatch(reset())
    },[dispatch])

    return (
        <div>
            {authorized && user.is_superuser && (
                <div>
                    {service ? <ManagerService service={service}/> : <h1>Таких услуг не существует:(</h1>}
                </div>
            )}
        </div>
    )
}