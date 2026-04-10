import React, { useEffect, useState } from "react";
import axios from "axios";

export const PriceSetting = ({ listingId, reload }) => {

    const [price, setPrice] = useState("");
    const [weekendPrice, setWeekendPrice] = useState("");
    const [weeklyDiscount, setWeeklyDiscount] = useState("");
    const [monthlyDiscount, setMonthlyDiscount] = useState("");

    useEffect(() => {
        loadPricing();
    }, [listingId]);

    const loadPricing = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/listing/${listingId}/get/price`
        );

        setPrice(res.data.price);
        setWeekendPrice(res.data.weekendPrice);
        setWeeklyDiscount(res.data.weeklyDiscount);
        setMonthlyDiscount(res.data.monthlyDiscount);
    };

    // update function
    const updateField = async (field, value) => {

        await axios.patch(
            `${process.env.REACT_APP_API_URL}/listing/${listingId}/price`,
            {
                [field]: value
            }
        );

        reload();
    };

    return (

        <div className="price-panel m-0 p-0 overflow-y-auto p-3 pt-0">
            <div>
                <h4 className="fw-semibold mb-3">Price Settings</h4>
                <small>These apply to all nights, unless you customise them by date.</small>

                <h6 className="fw-semibold mt-3 mb-3" >Base Price &#8377;</h6>
                <div className="section p-4 d-flex justify-content-between">
                    <div>
                        <label>Per night</label><br></br>
                        <div>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => updateField("price", price)}>
                            Save
                        </button>
                    </div>
                </div>


                <h6 className="fw-semibold mb-3 mt-3">Weekend Price &#8377;</h6>
                <div className="section p-4 d-flex justify-content-between">
                    <div>
                        <label>custom weekend price</label>
                        <div>
                            <input
                                type="number"
                                value={weekendPrice}
                                onChange={(e) => setWeekendPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => updateField("weekendPrice", weekendPrice)}>
                            Save
                        </button>
                    </div>
                </div>

                {/* Weekly Discount */}
                <h6 className="fw-semibold mb-2 mt-3">Discounts</h6>
                <small>Adjust your pricing to attract more guests.</small>
                <div className="section p-4 mt-3 d-flex justify-content-between">
                    <div className="">
                        <label>Weekly %</label> <br></br>
                        <small>For 7 nights or more</small>
                        <div>
                            <input
                                type="number"
                                value={weeklyDiscount}
                                onChange={(e) => setWeeklyDiscount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => updateField("weeklyDiscount", weeklyDiscount)}>
                            Save
                        </button>
                    </div>
                </div>

                {/* Monthly Discount */}
                <div className="section p-4 d-flex justify-content-between">
                    <div>
                        <label>Monthly %</label> <br></br>
                        <small>For 28 nights or more</small>
                        <div>
                            <input
                                type="number"
                                value={monthlyDiscount}
                                onChange={(e) => setMonthlyDiscount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => updateField("monthlyDiscount", monthlyDiscount)}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );

};