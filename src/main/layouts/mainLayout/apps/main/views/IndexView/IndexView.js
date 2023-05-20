import BaseView from "../../../../../../../core/generics/views/base/BaseView";
import HomeSelection from "./components/selections/HomeSelection/HomeSelection";
import AboutSelection from "./components/selections/AboutSelection/AboutSelection";
import InfoSelection from "./components/selections/InfoSelection/InfoSelection";
import ReviewSelection from "./components/selections/ReviewSelection/ReviewSelection";


class IndexView extends BaseView {
    renderView() {
        return (
            <>
                <div className="d-flex flex-column w-100">
                    <HomeSelection />
                    <AboutSelection />
                    <InfoSelection />
                    <ReviewSelection />
                </div>
            </>
        )
    }
}


export default IndexView
