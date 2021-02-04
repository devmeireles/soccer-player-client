import React from "react";
import './style.css';
import { BsArrowsFullscreen } from 'react-icons/all';
import CustomModal from '../Modal/';
import { Modal, Button } from "react-bootstrap";


class CustomCard extends React.Component {

    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <div
                className={
                    `secondary-bg custom-card mx-auto d-flex
                ${this.props.xcenter ? "justify-content-center" : ""}
                ${this.props.ycenter ? "align-items-center" : "align-items-start"}`
                }
            >
                <div className={`d-flex flex-column flex-fill ${this.props.classes}`}>
                    <div className="d-flex flex-row align-items-center">
                        <div className="w-100">
                            {
                                (this.props.title)
                                    ? <p className="h6 fw700 uppercase pt-4 pb-1 text-center">{this.props.title}</p>
                                    : null
                            }
                        </div>

                        {
                            (this.props.full)
                                ? <div className="ml-auto">
                                    <BsArrowsFullscreen className="fullscreen" color="#FFF" onClick={this.openModal} />
                                </div>
                                : null
                        }
                    </div>

                    <div>
                        {this.props.children}
                    </div>

                    <p className="py-2 text-center">{this.props.alt}</p>
                </div>

                <CustomModal show={this.state.isOpen} onHide={this.closeModal} />

                <Modal show={this.state.isOpen} onHide={this.closeModal} dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="text-center">
                                {
                                    (this.props.title)
                                        ? <p className="h6 fw700 uppercase pt-4 pb-1 text-center">{this.props.title}</p>
                                        : null
                                }
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

}

export default CustomCard;