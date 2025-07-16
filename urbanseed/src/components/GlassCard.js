import React from 'react';
import './GlassCard.css';

const GlassCard = ({ 
  image, 
  title, 
  price, 
  location, 
  onViewDetails, 
  className = '',
  children 
}) => {
  return (
    <div className={`glass-card ${className}`}>
      {image && (
        <div className="glass-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="glass-card-content">
        {title && <h3 className="glass-card-title">{title}</h3>}
        {location && <p className="glass-card-location">{location}</p>}
        {price && <p className="glass-card-price">{price}</p>}
        {children}
        {onViewDetails && (
          <button 
            className="glass-card-button"
            onClick={onViewDetails}
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default GlassCard;
