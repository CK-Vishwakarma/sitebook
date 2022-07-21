import React from 'react'
import { IoLogoFacebook } from 'react-icons/io5'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import "./footer.scss"
const Footer = () => {
    return (
        <article className='footer-container gridBox'>
            <div className='logo-icon'>
                Logo
            </div>
            <div className="contact-details gridBox">
                <div>
                    Find the best Restaurants, Deals, Discounts & Offers.
                </div>
                <div>
                    Contact: +91 789654231
                </div>
                <div className="social-icons">
                    <span>
                        <RiWhatsappFill />
                    </span>
                    <span>
                        <AiFillInstagram />
                    </span>
                    <span>
                        <IoLogoFacebook />
                    </span>
                </div>
            </div>
            <div className="copyright">
                © 2022, sitebook.co.in. All Rights Reserved.
            </div>
        </article>
    )
}

export default Footer