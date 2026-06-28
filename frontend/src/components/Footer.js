import React from 'react'
import facebookIcon from "../assets/icons/square-facebook.svg";
import instagramIcon from "../assets/icons/square-instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

export const Footer = () => {
    return (
        <div className="f-info">
            <div className="f-info-socials">
                <img className="footer-social-icon" src={facebookIcon} alt="" loading="lazy" />
                <img className="footer-social-icon" src={instagramIcon} alt="" loading="lazy" />
                <img className="footer-social-icon" src={linkedinIcon} alt="" loading="lazy" />
            </div>
            <div className="f-info-brand">
                &copy; Wanderstay Privated Limited
            </div>
            <div className="f-info-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
            </div>
        </div>
    )
}
