import { ResponsiveLine } from '@nivo/line'

function formatData(data) {

    let newObject = [
        {
            "id": "goals",
            "data": [],
        },
        {
            "id": "assists",
            "data": [],
        },
        {
            "id": "apps",
            "data": [],
        }
    ];

    for (let item of data) {
        newObject[0].data.push({
            x: item.season,
            y: item.goals
        });

        newObject[1].data.push({
            x: item.season,
            y: item.assists
        });

        newObject[2].data.push({
            x: item.season,
            y: item.apps
        });
    }

    return newObject;
}

const theme = {
    background: "#2e3138",
    axis: {
        fontSize: "14px",
        tickColor: "#eee",
        ticks: {
            line: {
                stroke: "#555555"
            },
            text: {
                fill: "#ffffff"
            }
        },
        legend: {
            text: {
                fill: "#aaaaaa"
            }
        }
    },
    grid: {
        line: {
            stroke: "#555555"
        }
    }
};

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

const formartLabel = (text) => {
    return text.slice(0, -3);
}

const Line = (props) => (
    <>
        <div style={{ height: 500, width: '100%' }}>
            <ResponsiveLine
                data={formatData(props.data)}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                theme={theme}
                legends={legends}
                axisBottom={axisBottom}
                tooltip={(input) => {
                    return (
                        <div className="tooltip-chart">
                            <div className="d-flex pa-5">
                                <strong>Season: </strong> {input.point.data.x}
                            </div>

                            <div>
                                <strong>{formartLabel(input.point.id)}: </strong> {input.point.data.y}
                            </div>
                        </div>
                    )
                }}
            />
        </div>
    </>
)

export default Line;