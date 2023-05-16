import globalState from "../../../state/globalState";
import {useState} from "react";
import {uuid4} from "../../../utils/utils";


function IsInitializedWrapper(ViewComponent) {
    function Wrapper(props) {
        let [, setState] = useState(0)
        globalState.subscribe(uuid4(), () => setState(Math.random()))

        if (!globalState.state.isInitialized) {
            return (
                <p className='w-100 text-center position-absolute bottom-0'>
                    Страница загружается. Пожалуйста подождите...
                </p>
            )
        }

        return <ViewComponent {...props} />
    }

    return Wrapper
}


export default IsInitializedWrapper
