    import React from "react";
    import '../../css/CarDetails.css';
    import ReviewCar from "../../ReviewCar";

    const CarDetails =()=>{
        return (
        <div className="car-details-container p-5">
            <div className="row">
            <div className="col-3">
                <img
                className="car-image"
                src="https://picsum.photos/200/300"
                alt="car img"
                />
            </div>
            <div className="col-9 title"></div>
            <h3>car title</h3>
            <p>lorem ipasvkmfvmfmkkvfvkmv</p>
            </div>
            <hr />
            <h5 className="text-center bg-dark text-white p-2">Reviews..</h5>
            <ReviewCar />
            <ReviewCar />
            <ReviewCar />
        </div>
        );

    };
    export default CarDetails;