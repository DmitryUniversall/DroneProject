import React from "react";
import {Route} from "react-router-dom";
import mainLayoutUrlPatterns from "./layoutRouting";
import MainLayoutContent from "./layoutComponents/MainLayoutContent";
import './layoutCSS.css'
import Menu from "./layoutComponents/Menu/Menu";


class MainLayout extends React.Component {
    get_routes() {
        return mainLayoutUrlPatterns.map(
            (path) => <Route key={path.name} path={path.path} element={<path.view/>}/>
        )
    }

    render() {
        return (
            <>
                {/* MENU */}
                <Menu />
                {/* END MENU*/}

                <div id='mainContent'>
                    <MainLayoutContent get_routes={() => this.get_routes()}/>
                </div>
            </>
        )
    }
}


export default MainLayout
