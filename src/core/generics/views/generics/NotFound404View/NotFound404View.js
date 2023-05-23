import BaseView from "../../base/BaseView";

class NotFound404View extends BaseView {
    renderView() {
        return (
            <>
                <h1 className="mt-5">Страница не найдена</h1>
            </>
        )
    }
}


export default NotFound404View
