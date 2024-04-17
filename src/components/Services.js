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

          <h3>Produce</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem porro evenietsit amet
            consectetur adipisicing. <br />
            elit Consequatur dolorem porro.</p>
        </div>

        <div className={styles.serviceCol}><img src={image1} alt="image of different fruits and vegetables" />
          <h3>Technical Assistance</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem porro evenietsit amet
            consectetur adipisicing. <br />
            elit Consequatur dolorem porro.</p>
        </div>

        <div className={styles.serviceCol}><img src={image2} alt="image of different fruits and vegetables" />
          <h3>Nucleus Farms</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem porro evenietsit amet
            consectetur adipisicing. <br />
            elit Consequatur dolorem porro.</p>
        </div>

        <div className={styles.serviceCol}><img src={image3} alt="image of different fruits and vegetables" />
          <h3>Women Groups</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem porro evenietsit amet
            consectetur adipisicing. <br />
            elit Consequatur dolorem porro.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
