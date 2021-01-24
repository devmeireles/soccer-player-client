import { ResponsiveBar } from '@nivo/bar'

const legends = [
    {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
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
    tickRotation: 40,
    legendPosition: "middle",
    legendOffset: 32
};

const Bar = (props) => (
    <>
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveBar
                data={props.data}
                margin={{ top: 60, right: 120, bottom: 120, left: 80 }}
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