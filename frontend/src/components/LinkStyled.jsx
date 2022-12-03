import {Link} from "react-router-dom";

export const LinkStyled = (props) => {
    return <Link to={props.to} className="text-md text-blue-500 font-bold">{props.children}</Link>
}