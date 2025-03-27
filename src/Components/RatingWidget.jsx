import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingWidget.css';

const RatingWidget = ({ onRate }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`star ${selectedRating >= star ? 'selected' : ''}`}
          onClick={() => setSelectedRating(star)}
        >
          ★
        </span>
      ))}
      <button onClick={() => onRate(selectedRating)} disabled={selectedRating === 0}>Submit</button>
    </div>
  );
};

RatingWidget.propTypes = {
  onRate: PropTypes.func.isRequired,
};

export default RatingWidget;