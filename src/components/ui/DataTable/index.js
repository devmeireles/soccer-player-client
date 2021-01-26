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
                    {/* {props.data.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.club}</td>
                                <td>{value.apps}</td>
                                <td>{value.goals}</td>
                                <td>{value.assists}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;