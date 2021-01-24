import React from 'react';
import './style.css';

function ToolTip(props) {
    let data = props.data.datum;
    return (
        <div
            className="ToolTip secondary-bg d-flex flex-column px-2 py-1"
            style={{backgroundColor: data.color}}>
            <span className="pa-5">
                <strong>{data.label}:</strong> {data.value}
            </span>
        </div>
    )

}

export default ToolTip;