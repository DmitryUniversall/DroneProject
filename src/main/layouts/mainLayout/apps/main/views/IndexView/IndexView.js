import HomeSelection from "./components/selections/HomeSelection/HomeSelection";
import AboutSelection from "./components/selections/AboutSelection/AboutSelection";
import InfoSelection from "./components/selections/InfoSelection/InfoSelection";
import ReviewSelection from "./components/selections/ReviewSelection/ReviewSelection";
import BlockView from "../../../../../../generics/views/BlockView/BlockView";


class IndexView extends BlockView {
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
