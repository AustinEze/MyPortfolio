// Loader.jsx
import React, { useEffect, useState } from 'react';
import '../styles/loader.css';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`load ${showLoader ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="loader"></div>
        <p className="loader-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec odio ac urna efficitur ultrices.
        </p>
      </div>
    </div>
  );
};

export default Loader;
