import globalState from "../../../state/globalState";
import {Navigate} from "react-router-dom";
import {pathSearch} from "../../../routing/path";


function AuthenticationRequiredWrapper(ViewComponent) {
    return (props) => {
        if (!globalState.state.authData.isAuthenticated) {
            return <Navigate to={pathSearch('auth=>login')}/>
        }

        return <ViewComponent {...props}/>
    }
}


export default AuthenticationRequiredWrapper
