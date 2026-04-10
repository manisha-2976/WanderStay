import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FormInput } from "./FormInput";
import { PhotoTour } from "./PhotoTour";

export const EditListings = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/host/listing/${id}/edit`, { withCredentials: true });
                reset({
                    title: res.data.title,
                    description: res.data.description,
                    price: res.data.price.toLocaleString("en-IN"),
                    country: res.data.country,
                    image: res.data.image,
                    amenities: res.data.amenities,
                    safetyItems: res.data.safetyItems,
                    roomType: res.data.roomType,
                    guest: res.data.guest,
                    weeklyDiscount: res.data.weeklyDiscount,
                    monthlyDiscount: res.data.monthlyDiscount,
                });

                console.log(res.data);
            } catch (error) {
                console.error("Error fetching listing:", error);
            }
        };

        fetchListing();
    }, [id, reset]);

    const handleSave = async (field, value) => {
        try {
            await axios.put(
                `${process.env.REACT_APP_API_URL}/listing/${id}`,
                {
                    field,
                    value
                },
                { withCredentials: true }
            );

            alert(`${field} updated successfully`);
        } catch (err) {
            console.log(err);
            alert("Update failed");
        }
    };

    return (
        <>
            <div className="col ms-3 edit-page d-flex">
                <div className="p-5 w-50 border-end" >
                    <h3 className="p-3">Listing editor</h3>
                    <div className="scroll-container p-3">
                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Title"
                                    name="title"
                                    register={register}
                                    error={errors.title}
                                    rules={{ required: "Title required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("title", data.title)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    type="text"
                                    label="Description"
                                    name="description"
                                    register={register}
                                    error={errors.description}
                                    rules={{ required: "Description is required" }}
                                />

                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("description", data.description)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Room Type"
                                    name="roomType"
                                    register={register}
                                    error={errors.roomType}
                                    rules={{ required: "Room type is required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("roomType", data.roomType)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Number of guests"
                                    name="guest"
                                    register={register}
                                    error={errors.guest}
                                    rules={{ required: "Guest is required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("guest", data.guest)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Price &#8377;"
                                    name="price"
                                    register={register}
                                    error={errors.price}
                                    rules={{ required: "Price is required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("price", data.price)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Weekly discount"
                                    name="weeklyDiscount"
                                    register={register}
                                    error={errors.weeklyDiscount}
                                    rules={{ required: "Weekly discount is required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("weeklyDiscount", data.weeklyDiscount)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Monthly discount"
                                    name="monthlyDiscount"
                                    register={register}
                                    error={errors.monthlyDiscount}
                                    rules={{ required: "Monthly discount is required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("monthlyDiscount", data.monthlyDiscount)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="shadow mt-3 p-3 rounded d-flex justify-content-between">
                            <div className="w-75">
                                <FormInput
                                    label="Amenities"
                                    name="amenities"
                                    register={register}
                                    error={errors.amenities}
                                    rules={{ required: "Amenities are required" }}
                                />
                            </div>
                            <div>
                                <button className=" btn btn-dark p-1"
                                    type="button"
                                    onClick={handleSubmit((data) =>
                                        handleSave("amenities", data.amenities)
                                    )}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-50 p-5">
                    <div className="scroll-container">
                        <PhotoTour />
                    </div>
                </div>
            </div>
        </>
    )
}