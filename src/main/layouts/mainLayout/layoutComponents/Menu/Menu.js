import React from "react";
import "./menu.css"


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.backgroundColor = `rgba(30, 30, 30, {})`
        this.state = {
            backgroundOpacity: 0,
            slidebarOpened: false
        }
    }

    setOpacity() {
        let opacity = (window.scrollY / 4) / 100
        if (opacity > 1) {
            opacity = 1
        }

        this.setState({
            backgroundOpacity: opacity
        })
    }

    componentDidMount() {
        this.setOpacity()
        let global_menu_element = document.getElementById("GMenu")

        window.addEventListener('scroll', () => this.setOpacity())
        window.addEventListener("click", (event) => {
            if (this.state.slidebarOpened && !global_menu_element.contains(event.target)) {
                this.toggleSlidebar()
            }
        })
    }

    scrollTo(id) {
        let menu = document.getElementById("HMenu")
        let element = document.getElementById(id)

        window.scrollTo({
            top: element.offsetTop - menu.offsetHeight,
            behavior: 'smooth',
        });
    }

    toggleSlidebar() {
        this.setState({
            slidebarOpened: !this.state.slidebarOpened
        })
    }

    getLinks() {
        return [
            {
                title: "Главная",
                onClick: () => this.scrollTo("homeBlock"),
                icon: <i className="fa fa-home" aria-hidden="true"></i>
            },
            {
                title: "О нас",
                onClick: () => this.scrollTo("about"),
                icon: <i className="fa fa-info-circle" aria-hidden="true"></i>
            },
            {
                title: "Про разработку",
                onClick: () => this.scrollTo("InfoSelection"),
                icon: <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            },
            {
                title: "Интересные факты",
                onClick: () => this.scrollTo("facts"),
                icon: <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
            },
            {
                title: "Оставить отзыв",
                onClick: () => this.scrollTo("reviews"),
                icon: <i className="fa fa-star-o" aria-hidden="true"></i>
            }
        ]
    }

    render() {
        return (
            <div id="GMenu">
                <div id="HMenu" className="nav navbar-expand-lg fixed-top text-dark text-center" style={{backgroundColor: this.backgroundColor.replace("{}", this.state.backgroundOpacity.toString())}}>
                    <div className="col-md-12 d-none d-md-block">
                        <div className="d-flex justify-content-evenly align-items-center">
                            {
                                this.getLinks().map((link) => (
                                    <div className="nav-item" key={Math.random()}>
                                        <span onClick={link.onClick} className="nav-link text-white">
                                            {link.title}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="d-md-none d-flex">
                        <button className="btn collapseBtn" onClick={() => this.toggleSlidebar()}>
                            <i className="fa fa-align-justify" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className={"d-flex d-md-none slidebar " + (this.state.slidebarOpened ? "open" : "")}>
                    <div className="p-3 w-100">
                        {
                            this.getLinks().map((link) => (
                                <div className="slidebar-item" key={Math.random()}>
                                    <div className="d-flex flex-row">
                                        <div className="icon">
                                            {link.icon}
                                        </div>

                                        <span className="title" onClick={() => {link.onClick();this.toggleSlidebar()}}>
                                            {link.title}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu
