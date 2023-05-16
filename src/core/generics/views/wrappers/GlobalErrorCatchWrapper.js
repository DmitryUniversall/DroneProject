import globalState from "../../../state/globalState";


function GlobalErrorCatchWrapper(ViewComponent) {
    function Wrapper(props) {
        if (globalState.state.globalError) {
            console.log(globalState.state.globalError)  // TODO
        }

        return (
            <ViewComponent {...{
                ...props
            }}/>
        )
    }

    return Wrapper
}


export default GlobalErrorCatchWrapper
