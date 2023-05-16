import React from "react";
import {pathSearch} from "../../../../../core/routing/path";
import {Link} from "react-router-dom";
import "./menu.css"

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolling: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                this.setState({
                    isScrolling: true
                })
            } else {
                this.setState({
                    isScrolling: false
                })
            }
        })
    }

    render() {
        return (
            <>
                <div className={"nav fixed-top text-dark text-center d-flex flex-row " + (this.state.isScrolling ? "scrolled " : "")}>
                    <div className="col-md-8 mx-auto">
                        <div className="d-flex justify-content-evenly align-items-center ">
                            <div className="nav-item">
                                <Link to={pathSearch("main=>index")} className="btn nav-link bg-transparent text-white">
                                    Главная
                                </Link>
                            </div>
                            <div className="nav-item">
                                <button className="btn nav-link text-white">
                                    Инструкция
                                </button>
                            </div>
                            <div className="nav-item">
                                <a href="#dev" className="btn nav-link text-white">
                                    Про разработку
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#facts" className="btn nav-link text-white">
                                    Интересные факты
                                </a>
                            </div>
                            <div className="nav-item">
                                <Link to={pathSearch("main=>reviews")} className="btn nav-link text-white">
                                    Оставить отзыв
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Menu
