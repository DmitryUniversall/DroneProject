import React from "react";
import "./modal.css"


class ModalWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpened: false,
            title: this.props.title
        }

        this.modalRef = React.createRef();
        this.windowEvents = [];
    }

    toggleModal() {
        this.setState({isModalOpened: !this.state.isModalOpened})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                title: this.props.title,
            })
        }
    }

    render() {
        return (
            <div className={"modal-window " + (this.state.isModalOpened ? "modal-window-opened" : "")} ref={this.modalRef}>
                <div className="modal-dialog w-100 w-md-50">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{this.state.title}</h3>
                            <span title="Close" className="close no-select" onClick={() => this.toggleModal()}>×</span>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class ModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }
}


class ModalFooter extends React.Component {
    render() {
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        );
    }
}


export {
    ModalWindow,
    ModalBody,
    ModalFooter
}
