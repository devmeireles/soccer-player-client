import './style.css';
import {GiNewBorn, MdPlace, GiBodyHeight} from 'react-icons/all';

function PlayerCard(props) {
    return (
        <div className="PlayerCard d-flex flex-row">
            <div className="d-flex align-items-center">
                <img alt={props.name} src={props.image} className="img-fluid" />
            </div>

            <div className="d-flex flex-column align-items-start justify-content-start pl-5">
                <h1 className="fw900 uppercase h4 pt-5 mb-0">{props.name}</h1>
                <h2 className="fw400 h6">{props.position}</h2>

                <ul className="p-0 pt-1">
                    <li className="mb-1">
                        <GiNewBorn /> {props.birth}
                    </li>

                    <li className="mb-1">
                        <MdPlace /> {props.birth_place} - {props.birth_country}
                    </li>

                    <li className="mb-1">
                        <GiBodyHeight /> {props.height}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PlayerCard;