                        import React from "react";
                        import CarCard from "../Product/CarCard.js";
                        import Form from "react-bootstrap/Form";
                        const Home =() => {
                            return (
                            <div className="home-container p-5">
                                {/*search*/}
                                <Form>
                                <Form.Group className="mb-3 d-flex">
                                    <Form.Control
                                    type="text"
                                    placeholder="Search.."
                                    className="rounded-0"
                                    />
                                    <button className="btn btn-dark rounded-0">
                                    {" "}
                                    Search
                                    </button>
                                </Form.Group>
                                </Form>
                                {/*list of cars*/}

                                <div className="row">
                                <div className="col-3 card-car-container">
                                    <CarCard />
                                </div>
                                <div className="col-3 card-car-container">
                                    <CarCard />
                                </div>
                                <div className="col-3 card-car-container">
                                    <CarCard />
                                </div>
                                <div className="col-3 card-car-container">
                                    <CarCard />
                                </div>
                                <div className="col-3 card-car-container">
                                    <CarCard />
                                </div>
                                <div className="col-3 card-car-container">
                                    <CarCard />
                                </div>
                                </div>
                            </div>
                            );
                        };
                        export default Home;