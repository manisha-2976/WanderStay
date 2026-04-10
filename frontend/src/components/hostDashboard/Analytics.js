import React, { useEffect, useState } from "react";
import axios from "axios";

export const Analytics = () => {
    const [listingPerformance, setListingPerformance] = useState([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/host/analytics`,
                    { withCredentials: true }
                );

                setListingPerformance(res.data);
                console.log(listingPerformance);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAnalytics();

    }, []);

    return (
        <div style={{ overflowY: "hidden", fontSize: 12, maxHeight: "" }}>
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

                    {listingPerformance.map((l, i) => (
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
                                ₹{l.revenue.toLocaleString("en-IN")}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>


        </div>
    )
}
