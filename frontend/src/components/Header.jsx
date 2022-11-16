import {Link} from "react-router-dom";

export const Header = () =>{
    return (
        <div style={{display:"flex", width:"100vw", justifyContent:"center", gap:"20px"}}>
            <Link to="/">Домашняя</Link>
            <Link to="new">Новая</Link>
        </div>
    )
}