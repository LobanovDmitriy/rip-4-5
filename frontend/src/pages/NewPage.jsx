import {Link} from "react-router-dom";

export const NewPage = () =>{
    return <div>
        <Link to="/">Главная</Link>
        /
        <Link to='/new'>Новая</Link>
        <h1>Новая страница.</h1>
    </div>
}