import React from "react";
import { Spinner } from 'react-bootstrap';
import './style.css';

class Loading extends React.Component {

    state = {
        height: 'h-100'
    };

    render() {
        return (
            <>
                <div className="Loading d-flex align-items-center justify-content-center">
                    <div className={`d-flex flex-row justify-content-center align-items-center ${this.props.height}`}>
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            </>
        )
    }
}

export default Loading;