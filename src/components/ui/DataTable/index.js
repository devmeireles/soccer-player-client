import './style.css';

function renderHeader(items) {
    return items.head.map((value) => {
        return (<th>{value}</th>)
    })
}

function renderBody(data, keys) {
    return data.map((value, index) => {
        return (
            <tr>
                {keys.map((key, keyIndex) => {
                    if (key === 'club_badge' || key === 'league_badge') {
                        return (
                            <td className="first-column">
                                <img className="club-badge" src={value.[key]} alt={value.[key]} />
                            </td>
                        )
                    }
                    return (<td>{value.[key]}</td>)
                })}
            </tr>
        )
    })
}

const DataTable = (props) => {
    return (
        <div className="DataTable d-flex flex-row flex-wrap mt-5">
            <table className="table tableFixHead table-dark table-hover">
                <thead>
                    <tr>
                        {renderHeader(props.head)}
                    </tr>
                </thead>
                <tbody>
                    {renderBody(props.data, props.head.keys)}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;