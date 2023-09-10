import {Route, Routes} from "react-router-dom";
import NotFound404View from "../apps/main/views/NotFound404View/NotFound404View";
import React from "react";


class MainLayoutContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.get_routes = this.props.get_routes
    }

    render() {
        return (
            <>
                {/* Main content*/}
                <div id='MainContainer' className='d-flex justify-content-center w-100 h-100'>
                    <Routes>
                        {this.get_routes()}
                        <Route path='*' element={<NotFound404View />}/>
                    </Routes>
                </div>
                {/* END Main content*/}
            </>
        );
    }
}


export default MainLayoutContent
