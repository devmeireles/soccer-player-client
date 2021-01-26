import {OverlayTrigger, Tooltip } from 'react-bootstrap'

function PlayedClubs(props) {
    return (
        <div className="PlayedClubs d-flex flex-row flex-wrap">
            {props.data.map((value, index) => {
                return (
                    <OverlayTrigger
                        key={value.club}
                        placement="top"
                        overlay={
                            <Tooltip id={value.club}>
                                <strong>{value.club}</strong>
                            </Tooltip>
                        }
                    >
                        <img
                            alt={value.club}
                            key={value.club}
                            src={value.club_badge}
                            className="img-fluid m-2"
                            style={{ maxWidth: 50 }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Tooltip on top"
                        />
                    </OverlayTrigger>
                )
            })}
        </div>
    )
}

export default PlayedClubs;