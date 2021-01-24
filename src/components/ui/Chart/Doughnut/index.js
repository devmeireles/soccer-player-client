import { ResponsivePie } from '@nivo/pie'
import ToolTip from '../ToolTip/index';


const data = [
    {
        "id": "total",
        "label": "Total",
        "value": 100,
        "color": "hsl(44, 70%, 50%)"
    },
    {
        "id": "remaining",
        "label": "Remaining",
        "value": 25,
        "color": "hsl(35, 70%, 50%)"
    }
]

const Doughnut = () => (
    <>
        <div style={{ height: 150, width: 150 }}>
            <ResponsivePie
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.7}
                padAngle={0.9}
                colors={{ scheme: 'nivo' }}
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabelsTextColor={{ theme: 'labels.text.fill' }}
                radialLabelsTextColor="#f6f6f7"
                tooltip={(input) => {
                    return (
                        <ToolTip data={input} />
                    )
                }}
            />
        </div>
    </>
)

export default Doughnut;