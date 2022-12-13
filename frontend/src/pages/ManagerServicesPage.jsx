import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

export const ManagerServicesPage = () =>{
    const navigate = useNavigate();
    const {services} = useSelector(store=>store.service)
    const {authorized, user} = useSelector(store => store.user)

    const handleTab = () => {
        navigate(`/manager/service/add`);
    };

    return (
        <div>
            {authorized && user.is_superuser && (
                <div className="flex flex-col gap-2 p-4">
                    <button className="py-1 px-2 text-md text-black font-semibold border-2 bg-green-200 border-green-500" onClick={() => handleTab('services')}>
                        Добавить услугу
                    </button>
                    {services.map(service => <Link to={`/manager/service/${service.idservice}`} key={service.idservice} className="w-1/3 text-xl font-semibold py-2 px-4 border-2 border-gray-500"><p>{service.name}</p><p className="text-sm">{service.price} ₽</p></Link>)}
                </div>)}
        </div>

    );
};