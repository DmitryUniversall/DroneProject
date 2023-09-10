import BaseView from "../../../../../../../core/generics/views/base/BaseView";

class ErrorView extends BaseView {
    renderView() {
        return (
            <>
                <h1>Произошла ошибка: {this.props.message}</h1>
            </>
        )
    }
}


export default ErrorView
