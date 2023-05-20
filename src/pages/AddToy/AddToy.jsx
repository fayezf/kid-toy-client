import React from 'react';
import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // const handleAddToy = event => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const name = form.name.value;
    //     const quantity = form.quantity.value;
    //     const seller = form.seller.value;
    //     const email = form.email.value;
    //     const price = form.price.value;
    //     const ratings = form.ratings.value;
    //     const photo = form.photo.value;
    //     const details = form.details.value;
    //     const subtoy = form.subtoy.value;

    //     const newToy = {name, quantity, seller, email, price, ratings, photo,details,subtoy}
    //     console.log(newToy);
    // }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center mb-4 font-extrabold">Add a Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* form name and available quantity row */}
                <div className="md:flex gap-x-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" {...register("toyName")} placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" {...register("availableQuantity")} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Seller name and email row */}
                <div className="md:flex gap-x-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" {...register("sellerName")} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" {...register("sellerEmail")} placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form toy price and ratings row */}
                <div className="md:flex gap-x-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" {...register("price")} placeholder="Toy Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratings" {...register("ratings")} placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url and details row */}
                <div className="flex gap-x-3 mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" {...register("pictureURL")} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" {...register("detailDescription")} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <select className="input input-bordered w-full" {...register("category")}>

                                <option></option>
                                <option value="science kits">science kits</option>
                                <option value="math learning toys">math learning toys</option>
                                <option value="engineering kits">engineering kits</option>

                            </select>
                        </label>
                    </div>
                </div>
                <input className="btn btn-block" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToy;