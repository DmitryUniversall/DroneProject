import React from "react";
import "./infoSelection.css"
import {Col, Container, Row} from "reactstrap";


class InfoSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        // const skillmessage = data.resume.skillmessage;
        // const education = data.resume.education.map(function (education) {
        //     return (
        //         <div key={education.school}>
        //             <h3>{education.school}</h3>
        //             <p className="info">
        //                 {education.degree} <span>&bull;</span>
        //                 <em className="date">{education.graduated}</em>
        //             </p>
        //             <p>{education.description}</p>
        //         </div>
        //     );
        // });
        //
        // const work = data.resume.work.map(function (work) {
        //     return (
        //         <div key={work.company}>
        //             <h3>{work.company}</h3>
        //             <p className="info">
        //                 {work.title}
        //                 <span>&bull;</span> <em className="date">{work.years}</em>
        //             </p>
        //             <p>{work.description}</p>
        //         </div>
        //     );
        // });
        //
        // const skills = data.resume.skills.map((skills) => {
        //     const backgroundColor = this.getRandomColor();
        //     const className = "bar-expand " + skills.name.toLowerCase();
        //     const width = skills.level;
        //
        //     return (
        //         <li key={skills.name}>
        //             <span style={{width, backgroundColor}} className={className}></span>
        //             <em>{skills.name}</em>
        //         </li>
        //     );
        // });

        let work;
        let skills;
        let skillmessage;

        let data = [
            {
                title: "Про разработку",
                themes: [
                    {
                        title: "Исследование",
                        texts: [
                            {
                                author: "Галкин Максим",
                                author_role: "Исследователь",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            },
                            {
                                author: "Савёлов Никита",
                                author_role: "Исследователь",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }
                        ]
                    },
                    {
                        title: "Проектирование",
                        texts: [
                            {
                                author: "Белов Максим",
                                author_role: "3D дизайнер",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            },
                            {
                                author: "Злыдов Илья",
                                author_role: "Инженер/Работа с текстом",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }
                        ]
                    },
                    {
                        title: "Разработка web-сайта",
                        texts: [
                            {
                                author: "Мурашов Дмитрий",
                                author_role: "Программист",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }
                        ]
                    }
                ]
            },
            {
                title: "Интересные факты и полезные мелочи",
                themes: [
                    {
                        title: "Про дроны и БПЛА",
                        texts: [
                            {
                                author: "Злыдов Илья",
                                author_role: "Инженер/Работа с текстом",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }
                        ]
                    },
                    {
                        title: "Про наш конструктор",
                        texts: [
                            {
                                author: "Злыдов Илья",
                                author_role: "Инженер/Работа с текстом",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }
                        ]
                    }
                ]
            }
        ]

        return (
            <section id="InfoSelection">
                <Container>
                    {
                        data.map((block) => (
                            <Row className="block">
                                <Col lg={3} className="header-col">
                                    <div className="block-title">
                                        <h1>
                                            {block.title}
                                        </h1>
                                    </div>
                                </Col>

                                <Col lg={9} className="main-col">
                                    {
                                        block.themes.map((theme) => (
                                            <Row className="theme">
                                                <Col lg={12}>
                                                    <h2>
                                                        {theme.title}
                                                    </h2>
                                                    <div className="theme-texts">
                                                        {
                                                            theme.texts.map((text) => (
                                                                <div className="info-item">
                                                                    <div className="author-info">
                                                                        {text.author_role}<span>&bull;</span>
                                                                        <em className="author">
                                                                            {text.author}
                                                                        </em>
                                                                    </div>
                                                                    <div>
                                                                        {text.text}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </Col>
                            </Row>
                        ))
                    }
                </Container>
            </section>
        );
    }
}

export default InfoSelection
