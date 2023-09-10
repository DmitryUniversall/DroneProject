import React from "react";
import "./instruction.css"
import '../../../../../../../projectCSS.css'
import {Col, Container, Row} from "reactstrap";
import instruction from "./instruction";
import BaseView from "../../../../../../../core/generics/views/base/BaseView";
import {scrollTo} from "../../../../../../utils/scroll";


class InstructionView extends BaseView {
    constructor(props) {
        super(props);

        this.state = {
            activeBlock: instruction[0].blockName
        }

        this.activeBlockClassName = "active"
    }

    setBlock(blockName) {
        if (blockName === this.state.activeBlock) return

        this.setState({
            activeBlock: blockName
        })

        scrollTo(blockName)
    }

    renderView() {
        return (
            <div className="pt-5 pb-5 w-100">
                <Container className="mt-md-3">
                    <Row>
                        <Col lg={9}>
                            {
                                instruction.map((data) =>
                                    <section className="p-3 mb-sm-5 mb-lg-0" id={data.blockName} key={Math.random()}>
                                        <Row>
                                            <Col lg={6}>
                                                <Row>
                                                    <h2>{data.title}</h2>
                                                </Row>
                                                <Row>
                                                    <div
                                                        className="d-flex flex-column justify-content-center h-100 step_text">
                                                        {data.description}
                                                    </div>
                                                </Row>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="h-100 w-100 d-flex flex-column justify-content-center pt-3 pt-lg-0">
                                                    <img className="w-100" src={data.image.path}
                                                         alt={data.image.alt}/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                )
                            }
                        </Col>
                        <Col lg={3}>
                            <div className="content_nav no-select">
                                <h2>Table of Content</h2>
                                <div className="d-flex flex-column justify-content-start">
                                    {
                                        instruction.map((data) =>
                                            <div
                                                className={"link_button " + (this.state.activeBlock === data.blockName ? this.activeBlockClassName : "")}
                                                onClick={() => this.setBlock(data.blockName)}
                                                key={Math.random()}
                                            >
                                                {data.title}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default InstructionView
