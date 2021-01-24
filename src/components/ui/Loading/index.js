import { Spinner } from 'react-bootstrap';
import './style.css';

const Loading = (props) => (
    <>
        <div className="Loading">
            <div className="d-flex flex-row justify-content-center align-items-center h-100">
                <Spinner animation="border" variant="primary"/>
            </div>
        </div>
    </>
)

export default Loading;