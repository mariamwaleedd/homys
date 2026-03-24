import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyDetails.css';

import heroImg from '../imgs/StaysHero.png';
import group14 from '../imgs/Group 14.png'; 
import rect6 from '../imgs/Rectangle 6.png';
import rect9 from '../imgs/Rectangle 9.png';
import rect10 from '../imgs/Rectangle 10.png';
import rect11 from '../imgs/Rectangle 11.png';
import frm from '../imgs/Rectangle 11.png';
import frame from '../imgs/Rectangle 11.png';

const PropertyDetails = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const navigate = useNavigate();
  
  const heroImages = [heroImg, rect10, rect11, group14];

  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevHero = () => {
    setCurrentHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="property-details-page">
      <section className="pd-hero">
        <div className="pd-hero-slider">
          <img src={heroImages[currentHeroIndex]} alt="Hero" className="pd-hero-img" />
          <button className="pd-nav-btn prev" onClick={prevHero}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="pd-nav-btn next" onClick={nextHero}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </section>

      <section className="pd-main-container">
        <div className="pd-left-content">
          <div className="pd-header">
            <h1 className="pd-title">Executive Ocean Suite</h1>
            <p className="pd-location">Downtown, North Coast • Property ID: HOM-2044</p>
            <div className="pd-specs-row">
              <div className="pd-spec-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#112a3d" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 110-8 4 4 0 010 8z" /></svg>
                <span>2 Guests</span>
              </div>
              <div className="pd-spec-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#112a3d" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                <span>1 Bedroom</span>
              </div>
              <div className="pd-spec-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#112a3d" strokeWidth="1.5"><path d="M2 12h20M7 7v3M17 7v3" /><rect x="2" y="10" width="20" height="10" rx="2" /></svg>
                <span>King Bed</span>
              </div>
              <div className="pd-spec-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#112a3d" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2zM7 21h10" /></svg>
                <span>1200 sqft</span>
              </div>
            </div>
          </div>

          <div className="pd-info-grid">
            <div className="pd-info-section">
              <h2 className="pd-section-title">The Space</h2>
              <p className="pd-text">
                Experience the pinnacle of coastal luxury in our Executive Ocean Suite. Designed for 
                travelers seeking refined convenience and elegance, this property offers a seamless blend 
                of modern design and effortless comfort. 
              </p>
              <div className="pd-room-details-list">
                <div className="pd-room-detail-item">
                  <span className="label">Bed Type:</span>
                  <span className="value">Ultra-Premium King Mattress</span>
                </div>
                <div className="pd-room-detail-item">
                  <span className="label">View:</span>
                  <span className="value">Panoramic Mediterranean Sea</span>
                </div>
                <div className="pd-room-detail-item">
                  <span className="label">Floor:</span>
                  <span className="value">Top Level / Penthouse Access</span>
                </div>
                <div className="pd-room-detail-item">
                  <span className="label">Climate:</span>
                  <span className="value">Smart Dual-Zone AC & Heating</span>
                </div>
              </div>
            </div>

            <div className="pd-info-section">
              <h2 className="pd-section-title">Room Features</h2>
              <ul className="pd-features-list">
                <li>Custom marble-finish bathroom with rain shower</li>
                <li>Private walk-out terrace with outdoor lounge</li>
                <li>Fully equipped kitchenette with Nespresso machine</li>
                <li>Ergonomic workstation with high-speed fiber optic link</li>
                <li>In-room smart safe for personal belongings</li>
                <li>Premium 400-thread count Egyptian cotton linens</li>
              </ul>
            </div>
          </div>

          <div className="pd-about-grid">
            <div className="pd-about-text">
              <h2 className="pd-sub-title">Detailed Experience</h2>
              <p>
                Our Executive Rooms are designed to provide a sanctuary that doesn't compromise on functionality. 
                Whether you're here for a weekend escape or a remote working session, the acoustic insulation 
                and natural light create an environment of pure focus and relaxation.
              </p>
              <button className="pd-action-btn">Request Full Brochure</button>
            </div>
            <div className="pd-about-img-wrapper">
              <img src={group14} alt="Interior View" />
            </div>
          </div>

          <div className="pd-amenities">
            <h2 className="pd-sub-title">Amenities & Services</h2>
            <div className="pd-amenities-grid">
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.59 16a6 6 0 016.82 0M12 20h.01" /></svg>
                <span>Ultra High-Speed Wifi</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6c.6.5 1.2 1 2.5 1s2-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" /></svg>
                <span>Private Infinity Pool</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2" /></svg>
                <span>4K Smart TV / Streaming</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /></svg>
                <span>Kitchen & Bar Service</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" /></svg>
                <span>24/7 Guest Concierge</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M5 12h14M12 1L5 12l7 11 7-11-7-11z" /></svg>
                <span>Daily Housekeeping</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9" /></svg>
                <span>Secured Parking</span>
              </div>
              <div className="amenity-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                <span>Luxury Toiletries</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="pd-booking-sidebar">
          <div className="pd-booking-card">
            <h3 className="pd-booking-title">Reserve This Suite</h3>
            <div className="pd-price-display">
              <span className="pd-price-val">$ 280</span>
              <span className="pd-price-unit">/ night</span>
            </div>
            <div className="pd-booking-inputs">
              <div className="pd-input-group">
                <label>Arrival</label>
                <input type="date" />
              </div>
              <div className="pd-input-group">
                <label>Departure</label>
                <input type="date" />
              </div>
              <div className="pd-input-group full-width">
                <label>Guests</label>
                <select>
                  <option>1 Guest</option>
                  <option selected>2 Guests</option>
                  <option>3 Guests</option>
                </select>
              </div>
            </div>
            <button className="pd-primary-btn" onClick={() => navigate('/cart')}>Book Now</button>
            <p className="pd-guarantee">✓ No booking fees applied</p>
          </div>
        </aside>
      </section>

      <section className="pd-gallery">
        <h2 className="pd-gallery-title">Visual Journal</h2>
        <div className="pd-gallery-grid">
          <img src={rect6} alt="Gallery" />
          <img src={rect9} alt="Gallery" />
          <img src={rect10} alt="Gallery" />
          <img src={rect11} alt="Gallery" />
          <img src={frm} alt="Gallery" />
          <img src={frame} alt="Gallery" />
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;