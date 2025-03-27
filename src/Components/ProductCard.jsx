import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';
import './ProductCard.css';

const ProductCard = ({ product, onRate }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
      <RatingWidget onRate={(rating) => onRate(product.id, rating)} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRate: PropTypes.func.isRequired,
};

export default ProductCard;