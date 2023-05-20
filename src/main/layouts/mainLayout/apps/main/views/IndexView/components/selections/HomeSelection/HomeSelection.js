import React from "react";
import ParticlesBg from "particles-bg";
import "./home.css"


class HomeSelection extends React.Component {
    render() {
        return (
            <>
                <div id="homeBlock" className="vh-100">
                    <ParticlesBg type="circle" bg={true} num="30" />
                    <div className="row banner">
                        <div className="banner-text">
                            <div>
                                <h1 className="main-text">Конструктор для сборки БПЛА</h1>
                                <h3>Информация, разработка, интересные факты и многое другое</h3>
                            </div>
                            <ul className="social">
                                <button className="btn instruction-btn">
                                    <i className="fa fa-book"></i>Инструкция
                                </button>
                                <button className="btn github-btn ms-3">
                                    <i className="fa fa-github"></i>Исходники на Github
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default HomeSelection
