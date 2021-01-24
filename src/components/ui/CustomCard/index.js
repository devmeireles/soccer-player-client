import React from 'react';
import './style.css';

function CustomCard(props) {
    return (
        <div
            className={
                `secondary-bg custom-card mx-auto d-flex
                ${props.xcenter ? "justify-content-center" : ""}
                ${props.ycenter ? "align-items-center" : "align-items-start"}`
            }
        >
            <div className={`d-flex flex-column flex-fill ${props.classes}`}>
                {
                    (props.title)
                        ? <p className="h6 fw700 uppercase pt-4 pb-1">{props.title}</p>
                        : null
                }
                {props.children}

                <p className="py-2">{props.alt}</p>
            </div>
        </div>
    )

}

export default CustomCard;