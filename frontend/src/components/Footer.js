import React from 'react'

export const Footer = () => {
    return (
        <div className="f-info">
            <div className="f-info-socials">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-square-linkedin"></i>
            </div>
            <div className="f-info-brand">
                &copy; Wanderlust Privated Limited
            </div>
            <div className="f-info-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
            </div>
        </div>
    )
}
