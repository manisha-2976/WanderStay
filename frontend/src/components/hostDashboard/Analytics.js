export const Analytics = ({analytics}) => {

    return (
        <div style={{fontSize: 14}}>
            <h6 className="mb-2">Listing Performance</h6>

            <table className="table table-sm">

                <thead>
                    <tr>
                        <th>Listing</th>
                        <th>Bookings</th>
                        <th>Occupancy</th>
                        <th>Revenue</th>
                    </tr>
                </thead>

                <tbody>

                    {analytics.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center text-muted">
                                No listing data
                            </td>
                        </tr>
                    ) : (
                        analytics.slice(0, 3).map((l, i) => (
                            <tr key={i}>
                                <td>{l.title}</td>
                                <td>{l.bookings}</td>

                                <td>
                                    <div className="progress" style={{ height: "6px" }}>
                                        <div
                                            className="progress-bar bg-success"
                                            style={{ width: `${l.occupancy}%` }}
                                        ></div>
                                    </div>
                                    {l.occupancy}%
                                </td>

                                <td className="text-success">
                                    &#8377;{l.revenue.toLocaleString("en-IN")}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}
