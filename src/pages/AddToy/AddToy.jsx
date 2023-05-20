import React from 'react';

const AddToy = () => {
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const subtoy = form.subtoy.value;

        const newToy = {name, quantity, seller, email, price, ratings, photo,details,subtoy}
        console.log(newToy);
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center mb-4 font-extrabold">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form name and available quantity row */}
                <div className="md:flex gap-x-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
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
                            <input type="text" name="price" placeholder="Toy Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Sub Toys</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subtoy" placeholder="Sub Toys" className="input input-bordered select w-1/2" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToy;