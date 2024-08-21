// src/components/Header.js
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                <img src="src/assets/logo.png" alt="Logo" />
                    <div className="logo-text">
                    </div>
                </div>
                <img src="src/assets/tagline.png" alt="Tagline" className="tagline-img"/>
                <div className="contact-info">
                    <div className="phone">
                        <div className="phone-icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="text">
                            <span>1-800-1234-567</span>
                            <span className="gap"></span> {/* Add a small gap between phone numbers */}
                            <span>1-800-3214-654</span>
                        </div>
                    </div>
                    <div className="address">
                        <div className="location-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text">
                            <span>2130 Fulton Street San Diego</span>
                            <span>CA 94117-1080 USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
