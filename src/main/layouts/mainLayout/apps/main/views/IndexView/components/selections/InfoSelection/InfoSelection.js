import React from "react";
import "./infoSelection.css"
import data from "../../../data";
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
        const skillmessage = data.resume.skillmessage;
        const education = data.resume.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });

        const work = data.resume.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            );
        });

        const skills = data.resume.skills.map((skills) => {
            const backgroundColor = this.getRandomColor();
            const className = "bar-expand " + skills.name.toLowerCase();
            const width = skills.level;

            return (
                <li key={skills.name}>
                    <span style={{width, backgroundColor}} className={className}></span>
                    <em>{skills.name}</em>
                </li>
            );
        });

        return (
            <section id="resume">
                <Container>
                    <Row className="education">
                        <Col lg={3} className="header-col">
                            <h1>
                                <span>Про разработку</span>
                            </h1>
                        </Col>

                        <Col lg={9} className="main-col">
                            <Row className="item">
                                <div className="twelve columns">
                                    <div>
                                        <h3>
                                            Проектирование
                                        </h3>
                                        <p className="info">
                                            3D дизайнер<span>&bull;</span>
                                            <em className="date">
                                                Белов Максим
                                            </em>
                                        </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.</p>
                                    </div>
                                </div>
                            </Row>
                            <Row className="item">
                                <div className="twelve columns">
                                    <div>
                                        <h3>
                                            Написание web-сайта
                                        </h3>
                                        <p className="info">
                                            3D дизайнер<span>&bull;</span>
                                            <em className="date">
                                                Белов Максим
                                            </em>
                                        </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.</p>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>

                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>Work</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">{work}</div>
                    </div>

                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <p>{skillmessage}</p>

                            <div className="bars">
                                <ul className="skills">{skills}</ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default InfoSelection
