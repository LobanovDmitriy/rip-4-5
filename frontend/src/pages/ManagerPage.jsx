import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {LinkRoute} from "../components/LinkRoute";

export const ManagerPage = () =>{
    const navigate = useNavigate();
    const {authorized, user} = useSelector(store => store.user)

    const handleTab = (path) => {
        navigate(`/manager/${path}`);
    };

    return (
        <div>
            {authorized && user.is_superuser && (
                <div className="flex justify-start w-full p-4 gap-4">
                    <button className="py-1 px-2 text-md text-black font-semibold border-2 border-gray-500" onClick={() => handleTab('services')}>
                        Редактировать услуги
                    </button>
                    {/*<button className="py-1 px-2 text-md text-black font-semibold border-2 border-gray-500" onClick={() => handleTab('users')}>*/}
                    {/*    Редактировать пользователей*/}
                    {/*</button>*/}
                    <button className="py-1 px-2 text-md text-black font-semibold border-2 border-gray-500" onClick={() => handleTab('orders')}>
                        Редактировать заказы
                    </button>
                </div>
                )}
        </div>
    );
};