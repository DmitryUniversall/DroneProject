import HomeSelection from "./components/selections/HomeSelection/HomeSelection";
import AboutSelection from "./components/selections/AboutSelection/AboutSelection";
import InfoSelection from "./components/selections/InfoSelection/InfoSelection";
import ReviewSelection from "./components/selections/ReviewSelection/ReviewSelection";
import BlockView from "../../../../../../generics/views/BlockView/BlockView";
import React from "react";


class IndexView extends BlockView {
    constructor(props) {
        super(props);

        this.toggleTheme = this.props.toggleTheme
        this.getTheme = this.props.getTheme
    }

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
