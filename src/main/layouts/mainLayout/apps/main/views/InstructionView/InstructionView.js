import React from "react";
import "./instruction.css"
import '../../../../../../../projectCSS.css'
import {Col, Container, Row} from "reactstrap";
import instruction from "./instruction";
import BaseView from "../../../../../../../core/generics/views/base/BaseView";
import {isInViewport, scrollTo} from "../../../../../../utils/scroll";


class InstructionView extends BaseView {
    constructor(props) {
        super(props);

        let group = Object.keys(instruction)[0]
        let block = instruction[group][0].blockName

        this.state = {
            activeGroup: group,
            activeBlock: block
        }

        this.activeBlockClassName = "active"
    }

    getGroupFromBlockName(blockName) {
        for (let [groupName, blocks] of Object.entries(instruction)) {
            for (let block of blocks) {
                if (block.blockName === blockName) {
                    return groupName
                }
            }
        }
    }

    setBlock(blockName) {
        if (blockName === this.state.activeBlock) return

        this.setState({
            activeGroup: this.getGroupFromBlockName(blockName),
            activeBlock: blockName
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            event.preventDefault()

            for (let blocks of Object.values(instruction)) {
                for (let block of blocks) {
                    let blockElement = document.getElementById(block.blockName)

                    if (blockElement !== null && isInViewport(blockElement)) {
                        this.setBlock(block.blockName)
                        return
                    }
                }
            }
        })
    }

    renderView() {
        return (
            <div className="instruction w-100">
                <Container className="mt-md-3">
                    <Row>
                        <Col lg={9}>
                            {
                                Object.entries(instruction).map(([group, blocks]) =>
                                    <div id={group} className="group">
                                        <div className="group_title">
                                            <h2>{group}</h2>
                                        </div>

                                        {
                                            blocks.map((block) =>
                                                <section className="block pt-3 pb-3 mb-sm-3 mb-lg-0" id={block.blockName} key={Math.random()}>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <Row>
                                                                <h3 className="text-center text-lg-start">{block.title}</h3>
                                                            </Row>
                                                            <Row>
                                                                <div
                                                                    className="d-flex flex-column justify-content-center h-100 step_text">
                                                                    {block.description}
                                                                </div>
                                                            </Row>
                                                        </Col>

                                                        <Col lg={6}>
                                                            <div className="h-100 w-100 d-flex flex-column justify-content-center pt-3 pt-lg-0">
                                                                <img className="w-100" src={block.image.path}
                                                                     alt={block.image.alt}/>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </Col>
                        <Col lg={3}>
                            <div className="content_nav no-select">
                                <h2>Table of Content</h2>
                                <div className="d-flex flex-column justify-content-start">
                                    {
                                        Object.entries(instruction).map(([group, blocks]) =>
                                            <div>
                                                <div
                                                    className={"nav_button group_button " + (this.state.activeGroup === group ? this.activeBlockClassName : "")}
                                                    onClick={() => scrollTo(group)}
                                                    key={Math.random()}
                                                >
                                                    {group}
                                                </div>
                                                {
                                                    this.state.activeGroup === group && blocks.map((block) =>
                                                        <div
                                                            className={"nav_button block_button " + (this.state.activeBlock === block.blockName ? this.activeBlockClassName : "")}
                                                            onClick={() => scrollTo(block.blockName)}
                                                            key={Math.random()}
                                                        >
                                                            {block.title}
                                                        </div>
                                                    )
                                                }
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
