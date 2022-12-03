import {Link} from "react-router-dom";

export const LinkRoute = (props) => {
    return <Link to={props.to} className="py-1 px-2 text-md text-blue-800 font-semibold border-2 rounded-md border-blue-800">{props.children}</Link>
}