
import React from 'react';
import facebookIcon from "../../assets/images/facebook_icon.png";
import twitterIcon from "../../assets/images/twitter_icon.png";
import instagramIcon from "../../assets/images/instagram_icon.png";
import youtubeIcon from "../../assets/images/youtube_icon.png";
import "./Footer.css";
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <img src={facebookIcon} alt='' />
                <img src={twitterIcon} alt='' />
                <img src={instagramIcon} alt='' />
                <img src={youtubeIcon} alt='' />
            </div>
            <ul>
                <li>audio Description</li>
                <li>Help Center</li>
                <li>Gift cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie preferences</li>
                <li>Corporate Informations</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
            <p className='copyright-text'>© 2006-2025 Netflix, Inc.</p>
        </div>
    );
}

export default Footer
