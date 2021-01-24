import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import ToolTip from '../ToolTip';

const Radar = (props) => (
    <>
        <div style={{ height: 500, width: 500 }}>
            <ResponsiveRadar
                data={props.data}
                keys={['apps', 'goals', 'assists']}
                indexBy="club"
                maxValue="auto"
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                curve="linearClosed"
                tooltip={(input) => {
                    return (
                        <ToolTip data={input} />
                    )
                }}
            />
        </div>
    </>
)

export default Radar;