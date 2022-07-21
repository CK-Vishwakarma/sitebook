import React from "react";
import "./restaurantDetailsPage.scss";
import pizzaMain from "../../assets/pizza1.jpg";
import pizza2 from "../../assets/pizza2.jpg";
import pizza3 from "../../assets/pizza3.jpg";
import burger from "../../assets/burger.jpg";
import { AiFillCamera, AiFillInfoCircle } from "react-icons/ai";
import { TbArrowFork } from "react-icons/tb"
import { BsFillBookmarkFill, BsFillShareFill } from "react-icons/bs"
const RestaurantDetailsPage = () => {
    return (
        <div className="restaurant-details-page">
            <section className="image-gallary">
                <div className="main-image">
                    <img className="img-fitting " src={pizzaMain} alt="pizza" />
                </div>
                <div className="thumbnail-images">
                    <div className="thumbnail-img">
                        <img className="img-fitting " src={burger} alt="pizza" />
                    </div>
                    <div className="thumbnail-img">
                        <img className="img-fitting " src={pizza2} alt="pizza" />
                    </div>
                    <div className="thumbnail-img">
                        <img className="img-fitting " src={pizza3} alt="pizza" />
                    </div>
                    <div className="thumbnail-img">
                        <div className="upload-icon">
                            <AiFillCamera />
                        </div>
                        <div className="upload-text">Add Photos</div>
                    </div>
                </div>
            </section>
            <section className="address-info flexBox jcspb">
                <div className="address">
                    <h1>Dream Arena</h1>
                    <p>Lashkar,Gwalior</p>
                    <p>Sandwich, Pizza, Fast Food, Chinese, Cafe</p>
                    <div className="timing flexBox">
                        <div className="time">
                            <div>
                                <span className="open">Opens </span>
                                <span>at 11:30 AM</span>
                            </div>
                            <div>
                                <span className="close">Closes </span>
                                <span>at 10:00 PM</span>
                            </div>
                        </div>
                        <div className="more-info">
                            <AiFillInfoCircle />
                        </div>
                    </div>
                </div>
                <div className="rating flexBox">
                    <div className="points">4.5</div>
                    <div className="reviews">
                        <div>106</div>
                        <div>Dining Reviews</div>
                    </div>
                </div>
            </section>
            <section className="empty-div"></section>
            <section className="actions flexBox">
                <div className="btn-pills">
                    <div className="icon">
                        <TbArrowFork />
                    </div>
                    <div className="text">Direction</div>
                </div>
                <div className="btn-pills">
                    <div className="icon">
                        <BsFillBookmarkFill />
                    </div>
                    <div className="text">Bookmark</div>
                </div>
                <div className="btn-pills">
                    <div className="icon">
                        <BsFillShareFill />
                    </div>
                    <div className="text">Share</div>
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetailsPage;
