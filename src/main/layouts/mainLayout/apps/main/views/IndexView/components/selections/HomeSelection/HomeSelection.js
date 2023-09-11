import React from "react";
import ParticlesBg from "particles-bg";
import "./home.css"
import {Link} from "react-router-dom";
import {pathSearch} from "../../../../../../../../../../core/routing/path";


class HomeSelection extends React.Component {
    render() {
        return (
            <>
                <div id="home" className="vh-100">
                    <ParticlesBg type="circle" bg={true} num="15" />
                    <div className="row banner">
                        <div className="banner-text">
                            <div>
                                <h1 className="main-text theme-text-primary">Конструктор для сборки БПЛА</h1>
                                <h3 className="theme-text-secondary">Информация, разработка, интересные факты и многое другое</h3>
                            </div>
                            <ul className="social">
                                <Link to={pathSearch("main=>instruction")} className="btn instruction-btn">
                                    <i className="fa fa-book"></i>Инструкция
                                </Link>
                                <a href="https://github.com/DmitryMurashov/DroneProject" className="btn github-btn ms-sm-3">
                                    <i className="fa fa-github"></i>Исходники сайта на Github
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default HomeSelection
