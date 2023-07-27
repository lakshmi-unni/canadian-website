import React from 'react';
import './Home.css';
import BannerImg from '../../Assets/Banner.png';
import PartnerLogo1 from '../../Assets/img1.png';
import PartnerLogo2 from '../../Assets/img2.png';
import PartnerLogo3 from '../../Assets/img3.png';
import PartnerLogo4 from '../../Assets/img4.png';
import PartnerLogo5 from '../../Assets/img5.png';
import AimImg1 from '../../Assets/aim1.png';
import AimImg2 from '../../Assets/aim2.png';

import AimImg3 from '../../Assets/aim3.png';

import AimImg4 from '../../Assets/aim4.png';
import DotImg from '../../Assets/dot.svg';



const Home = () => {
    return (
        <div >

            {/* section 1 starts */}
            <section >
                <div style={{ backgroundColor: " #71BCE1", position: "relative" }}>
                    <img className="d-block w-100" src={BannerImg} alt="banner" style={{ height: "auto" }} />

                    <div className="" style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -30%)" }}>
                        <h1 className='banner-heading text-center mt-4'>Thinking of selling your home?</h1>
                        <p className='banner-content text-center mt-4'>Get an instant estimate of your home’s value. You can quickly determine the estimated value of your home by answering a few quick questions.</p>

                        <div>
                            <input className='search' searchtype="text" placeholder="Enter Email Address....." />
                        </div>
                        <div className="text-center mt-2">
                            <button className='search-button text-center' type="submit">Get free Estimate</button>
                        </div>

                    </div>
                </div>

            </section>
            {/* section 1 ends */}

            {/* section 2 starts */}


            <section style={{ marginTop: 0, height: "277px", backgroundColor: "#ECF4FA", display: "flex", justifyContent: "center", alignItems: "center" }} className="partnersection">
                <div>
                    <h3 style={{ marginTop: "16px", color: "#000", fontFamily: "Barlow", fontSize: "25px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal" }} className="featured text-center mt-2">featured on</h3>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="partners">
                        <img style={{ width: "123.858px", height: "67.34px", margin: "8px" }} className='partnerlogo' src={PartnerLogo1} alt="img" />
                        <img style={{ width: "123.858px", height: "67.34px", margin: "8px" }} className='partnerlogo' src={PartnerLogo2} alt="img" />
                        <img style={{ width: "123.858px", height: "67.34px", margin: "8px" }} className='partnerlogo' src={PartnerLogo3} alt="img" />
                        <img style={{ width: "123.858px", height: "67.34px", margin: "8px" }} className='partnerlogo' src={PartnerLogo4} alt="img" />
                        <img style={{ width: "123.858px", height: "67.34px", margin: "8px" }} className='partnerlogo' src={PartnerLogo5} alt="img" />
                    </div>
                </div>
            </section>
            {/* section 2 ends */}




            {/* section 3 starts */}

            <section className="features-section">
                <div className="container">
                    <div className="row text-center">

                        <div className="col-md-3">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img src={AimImg1} className="rounded-circle z-depth-1 img-fluid" alt='img' />
                                </div>
                                <div className='testinonial-box'>
                                    <h4 className="sectiontitle testimonial-heading ">Visibility</h4>

                                    <p className="sectioncontent testimonial-content">
                                        Your house will appear as a ‘featured listing’ on the home<br />
                                        page, ensuring your house gets the maximum visibility
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img src={AimImg2} className="rounded-circle z-depth-1 img-fluid" alt='img' />
                                </div>
                                <div className='testinonial-box'>
                                    <h4 className="sectiontitle testimonial-heading">John Doe</h4>
                                    <p className="sectioncontent testimonial-content"> You are backed by a team of Real estate agents who know
                                        the market in and out. With their market insights,
                                        experience and sound data, your home will sell in no time.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img src={AimImg3} className="rounded-circle z-depth-1 img-fluid" alt='img' />
                                </div>
                                <div className='testinonial-box'>
                                    <h4 className="sectiontitle testimonial-heading">Maria Kate</h4>
                                    <p className=" sectioncontent testimonial-content">
                                        Users get instant notifications about new listings, price
                                        hikes, price drops, and neighborhood alerts. We get your
                                        property shown to people who are actively looking andeager to buy.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img src={AimImg4} className="rounded-circle z-depth-1 img-fluid" alt='img' />
                                </div>
                                <div className='testinonial-box'>
                                    <h4 className="sectiontitle testimonial-heading">Maria Kate</h4>
                                    <p className="sectioncontent testimonial-content">
                                        With professional staging and photos, we make your house
                                        reach the best of its abilities and show it off because looks are what sell.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 3 ends */}


            {/* section 4 starts */}
            <section className="messages-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="messages messages-heading text-center mt-4">The Canadian Home</h3>
                            <p className="messages messages-content text-center mt-4">What customers say about The Canadian Home experience</p>
                        </div>
                    </div>
                    <div className="slider-container mt-4">
                        <div className="slider">
                            <div className="slide">
                                <div className="card custom-card"> {/* Added "custom-card" class */}
                                    <div className="card-body">
                                        <p className="sectioncontent card-text text-center mt-4">
                                            The Canadian Home is absolutely amazing. It successfully surpasses all the other apps
                                            in this area. Their Chat function is what has been missing from online home search.
                                            The experts are always available with correct answers to anything.
                                        </p>
                                        <h3 className="sectiontitle card-heading text-center mt-4">John Brown</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="card custom-card"> {/* Added "custom-card" class */}
                                    <div className="card-body">
                                        <p className="sectioncontent card-text text-center mt-4">
                                            The Canadian Home is absolutely amazing. It successfully surpasses all the other apps
                                            in this area. Their Chat function is what has been missing from online home search.
                                            The experts are always available with correct answers to anything.
                                        </p>
                                        <h3 className="sectiontitle card-heading text-center mt-4">John Brown</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="card custom-card"> {/* Added "custom-card" class */}
                                    <div className="card-body">
                                        <p className="sectioncontent card-text text-center mt-4">
                                            The Canadian Home is absolutely amazing. It successfully surpasses all the other apps
                                            in this area. Their Chat function is what has been missing from online home search.
                                            The experts are always available with correct answers to anything.
                                        </p>
                                        <h3 className="sectiontitle card-heading text-center mt-4">John Brown</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dots">
                            <img src={DotImg} className="dot-image" alt="Navigation Dots" />
                        </div>
                    </div>
                </div>
            </section>



            {/* section 4 ends */}

        </div>
    )
}

export default Home
