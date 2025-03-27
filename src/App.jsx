import React, { useState } from 'react';
import ProductCard from './Components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRating = (id, newRating) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const updatedTotalRatings = product.totalRatings + 1;
        const updatedAvgRating = ((product.avgRating * product.totalRatings) + newRating) / updatedTotalRatings;
        return { ...product, avgRating: updatedAvgRating, totalRatings: updatedTotalRatings };
      }
      return product;
    }));
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onRate={handleRating} />
        ))}
      </div>
    </div>
  );
}

export default App;