import React from "react";
import {ModalBody, ModalFooter, ModalWindow} from "../../../../../../../../generics/components/modal/modal";
import "./instructionImag.css"


class InstructionImage extends React.Component {
    constructor(props) {
        super(props);

        this.image = this.props.image
        this.modalRef = React.createRef()
    }

    toggleModal() {
        if (this.modalRef && this.modalRef.current) {
            this.modalRef.current.toggleModal()
        }
    }

    render() {
        return (
            <div>
                <ModalWindow title={this.image.alt} ref={this.modalRef}>
                    <ModalBody>
                        <img className="w-100" src={this.image.path} alt={this.image.alt} />
                    </ModalBody>
                    <ModalFooter>
                        <button
                            className="btn btn-light"
                            onClick={() => window.open(this.image.path, '_blank').focus()}>
                            Открыть в отдельной вкладке
                        </button>
                    </ModalFooter>
                </ModalWindow>

                <img className="w-100 instruction-image" src={this.image.path} alt={this.image.alt} onClick={() => this.toggleModal()}/>
            </div>
        );
    }
}


export default InstructionImage
