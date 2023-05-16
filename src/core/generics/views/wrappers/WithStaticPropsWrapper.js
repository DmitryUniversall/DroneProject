function WithStaticPropsWrapper(ViewComponent, additionalProps) {
    function Wrapper (props) {
        return <ViewComponent {...{...props, ...additionalProps}}/>
    }

    return Wrapper
}


export default WithStaticPropsWrapper
