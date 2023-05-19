import React from "react";
import "./menu.css"


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.backgroundColor = `rgba(30, 30, 30, {})`
        this.state = {
            isScrolling: false,
            backgroundOpacity: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let opacity = (window.scrollY / 4) / 100
            if (opacity > 1) {
                opacity = 1
            }

            this.setState({
                backgroundOpacity: opacity
            })
        })
    }

    scrollTo(id) {
        let menu = document.getElementById("MainMenu")
        let element = document.getElementById(id)

        window.scrollTo({
            top: element.offsetTop - menu.offsetHeight,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <>
                <div id="MainMenu" className="nav fixed-top text-dark text-center flex-row  d-none d-sm-flex" style={{backgroundColor: this.backgroundColor.replace("{}", this.state.backgroundOpacity.toString())}}>
                    <div className="col-md-12">
                        <div className="d-flex justify-content-evenly align-items-center ">
                            <div className="nav-item">
                                <span onClick={() => this.scrollTo("homeBlock")} className="nav-link bg-transparent text-white">
                                    Главная
                                </span>
                            </div>
                            <div className="nav-item">
                                <span onClick={() => this.scrollTo("about")} className="nav-link text-white">
                                    О нас
                                </span>
                            </div>
                            <div className="nav-item">
                                <span onClick={() => this.scrollTo("InfoSelection")} className="nav-link text-white">
                                    Про разработку
                                </span>
                            </div>
                            <div className="nav-item">
                                <span onClick={() => this.scrollTo("facts")} className="nav-link text-white">
                                    Интересные факты
                                </span>
                            </div>
                            <div className="nav-item">
                                <span onClick={() => this.scrollTo("reviews")} className="nav-link text-white">
                                    Оставить отзыв
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Menu
