import {useRouteError} from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return(
        <div className="error">
            <h2 className="error-text">error</h2>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    )
}

export default Error;