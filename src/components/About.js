import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://newhampshirebulletin.com/wp-content/uploads/2021/11/GettyImages-1283206620-1024x599.jpg",
    "https://img.freepik.com/free-photo/freshness-organic-vegetables-healthy-autumn-salad-generated-by-artificial-intelligence_25030-60649.jpg",
    "https://www.njc.edu/sites/default/files/areaofstudy/banner/banner-agribusiness-073119.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

 return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <img className={styles.heroImage} src={images[currentImageIndex]} alt="Hero" />
        <div className={styles.heroContent}>
          <h2>About Us</h2>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.vision}`}>
          <div className={styles.circle}><h3>Livelihoods</h3></div>
          <p>
            Women-owned and operated, integrated production system for high-value fruits and vegetables
             100+ women as year-round producers under irrigation
          </p>
        </div>
        <div className={`${styles.card} ${styles.mission}`}>
          <div className={styles.circle}><h3>Sustainability</h3></div>
          <p>
           140 acres - Total dam area under eco-conservation and sustainable fish production
           100 acres – Total area under sustainable fruit and vegetable production
           Focus on sustainable, low-carbon, protein value chains for a growing urban population
          </p>
        </div>
        <div className={`${styles.card} ${styles.workforce}`}>
          <div className={styles.circle}><h3>Impact</h3></div>
          <p>
            300% increase in smallholder producer incomes
            Up to 70% expected increase in margins due to enhanced value chain efficiency 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
