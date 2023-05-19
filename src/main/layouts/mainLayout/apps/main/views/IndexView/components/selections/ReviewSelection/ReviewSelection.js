import React from "react";
import "./review.css"
import {Col, Row} from "reactstrap";


class ReviewSelection extends React.Component {
    render() {
        return (
            <>
                <div id="reviews">
                    <Row className="section-head">
                        <Col lg={2} className="header-col">
                            <h1>
                                <span>Get In Touch.</span>
                            </h1>
                        </Col>

                        <Col lg={10}>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8}>
                            <div>
                                <div>
                                    <div>
                                        <label htmlFor="contactName">
                                            Имя <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            name="contactName"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactMessage">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea
                                            cols="50"
                                            rows="15"
                                            id="contactMessage"
                                            name="contactMessage"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button className="submit">Submit</button>
                                        {/*<span id="image-loader"> TODO: spinner*/}
                                        {/*  <img alt="" src="images/loader.gif"/>*/}
                                        {/*</span>*/}
                                    </div>
                                </div>
                            </div>

                            {/*<div id="message-warning">Error boy</div> TODO: error handle*/}

                            {/*<div id="message-success"> TODO: success handle*/}
                            {/*    <i className="fa fa-check"></i>Your message was sent, thank you!*/}
                            {/*    <br/>*/}
                            {/*</div>*/}
                        </Col>

                        <Col lg={4} className="footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Some other info</h4>
                                {/*<p className="address">*/}
                                {/*    {name}*/}
                                {/*    <br/>*/}
                                {/*    {street} <br/>*/}
                                {/*    {city}, {state} {zip}*/}
                                {/*    <br/>*/}
                                {/*    <span>{phone}</span>*/}
                                {/*</p>*/}
                            </div>

                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                                        <b>
                                            <a href="./">2 Days Ago</a>
                                        </b>
                                    </li>
                                    <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                                        <b>
                                            <a href="./">3 Days Ago</a>
                                        </b>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}


export default ReviewSelection
