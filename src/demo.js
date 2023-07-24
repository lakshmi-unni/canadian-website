import React from 'react'

function demo() {
    return (
        <div>
            <section className="messages-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="featured text-center mt-4">The Canadian Home</h3>
                            <p className="featured text-center mt-4">What customers say about The Canadian Home experience</p>
                        </div>
                    </div>
                    <div className="slider-container mt-4">
                        <div className="slider">
                            <div className="slide">
                                <div className="card custom-card"> {/* Added "custom-card" class */}
                                    <div className="card-body">
                                        <p className="card-text">
                                            The experts are always available with correct answers to anything.
                                            The experts are always available with correct answers to anything.
                                            The experts are always available with correct answers to anything.
                                            The experts are always available with correct answers to anything.
                                            The experts are always available with correct answers to anything.
                                        </p>
                                        <h3 className="featured text-center mt-4">John Brown</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="card custom-card"> {/* Added "custom-card" class */}
                                    <div className="card-body">
                                        <p className="card-text text-center mt-4">
                                            The Canadian Home is absolutely amazing. It successfully surpasses all the other apps
                                            in this area. Their Chat function is what has been missing from online home search.
                                            The experts are always available with correct answers to anything.
                                        </p>
                                        <h3 className="featured text-center mt-4">John Brown</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="card custom-card"> {/* Added "custom-card" class */}
                                    <div className="card-body">
                                        <p className="card-text text-center mt-4">
                                            The Canadian Home is absolutely amazing. It successfully surpasses all the other apps
                                            in this area. Their Chat function is what has been missing from online home search.
                                            The experts are always available with correct answers to anything.
                                        </p>
                                        <h3 className="featured text-center mt-4">John Brown</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default demo