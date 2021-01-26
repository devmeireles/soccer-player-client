import { ResponsiveBar } from '@nivo/bar'
import {isMobile} from 'react-device-detect';


const margin = () => {
    if (isMobile) {
        return { top: 60, right: 10, bottom: 120, left: 10 }
    }

    return { top: 60, right: 120, bottom: 120, left: 80 }
}

const legends = [
    {
        dataFrom: "keys",
        anchor: isMobile ? "top" : "bottom-right",
        direction: isMobile ? "row" : "column",
        justify: false,
        translateX: isMobile ? 0 : 120,
        translateY: isMobile ? -50 : 0,
        itemsSpacing: 2,
        itemWidth: isMobile ? 75 : 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        itemTextColor: "#ffffff",
        symbolSize: 20,
        effects: [
            {
                on: "hover",
                style: {
                    itemOpacity: 1
                }
            }
        ]
    }
];

const axisBottom = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: isMobile ? 90 : 40,
    legendPosition: "middle",
    legendOffset: 32
};

const Bar = (props) => (
    <>
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveBar
                data={props.data}
                margin={margin()}
                keys={['goals', 'assists', 'apps']}
                indexBy={props.indexKey}
                legends={legends}
                labelTextColor="inherit:darker(2.4)"
                labelSkipWidth={12}
                labelSkipHeight={12}
                axisBottom={axisBottom}
            />
        </div>
    </>
)

export default Bar;