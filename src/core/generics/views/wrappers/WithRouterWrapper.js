import {useLocation, useParams, useNavigate} from "react-router-dom";


function WithRouterWrapper(ViewComponent) {
    function Wrapper(props) {
        const params = useParams()
        const location = useLocation()
        const navigate = useNavigate()

        return (
            <ViewComponent {...{
                params: params,
                location: location,
                navigate: navigate,
                ...props
            }}/>
        )
    }

    return Wrapper
}


export default WithRouterWrapper
