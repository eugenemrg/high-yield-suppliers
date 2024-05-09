import React, { useState, useEffect } from 'react';
import styles from './Services.module.css'
import image1 from '../images/machineries.webp'
import image2 from '../images/teaplantation.webp'
import image3 from '../images/womenteagroup.webp'
import heroImage from '../images/producefarm.avif'



function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/freshness-organic-vegetables-healthy-autumn-salad-generated-by-artificial-intelligence_25030-60649.jpg",
    "https://newhampshirebulletin.com/wp-content/uploads/2021/11/GettyImages-1283206620-1024x599.jpg",
    "https://www.njc.edu/sites/default/files/areaofstudy/banner/banner-agribusiness-073119.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);


  return (
    <div className={styles.Services}>
      <div className={styles.hero}>
        <img className={styles.heroImage} src={images[currentImageIndex]} alt="Hero" />
        <div className={styles.heroContent}>
          <h2>Services </h2>
        </div>
      </div>
      <div className={styles.serviceCards}>
        <div className={styles.serviceCol}>
        
          <img src={heroImage} alt="image of different fruits and vegetables" />

          <h3>Production</h3>
          <p>We operate a nucleus farm supported by 100+ women smallholders in Machakos county for the production of fresh fruit 
            and vegetables, fish and poultry for the local market (Harvesting /Packaging vegetables) </p>
        </div>

        <div className={styles.serviceCol}><img src={image1} alt="image of different fruits and vegetables" />
          <h3>Technical Assistance</h3>
          <p>We provide certified farm inputs and extension services to our smallholder producers enabling them to meet the precise quality and volume requirements of our 
            buyers such as Good Agricultural Practices (GAP) (picture of Extension services / advise) </p>
        </div>

        <div className={styles.serviceCol}><img src={image2} alt="image of different fruits and vegetables" />
          <h3>Propagation</h3>
          <p> We have set up an in-house vegetable propagation nursery for the production of high-quality
             planting material free of pests and diseases for our farmers (picture of a plant nursery).
           </p>
        </div>

        <div className={styles.serviceCol}><img src={image3} alt="image of different fruits and vegetables" />
          <h3>Post Harvest Handling</h3>
          <p>Our produce is cleaned, inspected and bulked on-site ready for cold-chain
             transportation and distribution to wholesale, institutional and retail customers (picture of cold-chain transportation) </p>
        </div>
      </div>
    </div>
  )
}

export default Services
