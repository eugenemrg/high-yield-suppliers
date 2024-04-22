import React, { useRef } from 'react'
import styles from './Home.module.css'
import heroImage from '../images/produce.webp'
import image1 from '../images/fruits.webp'
import image2 from '../images/meat.webp'
import image3 from '../images/rice.webp'
import image4 from '../images/flower.webp'
import image5 from '../images/seedling.webp'
import { Link } from 'react-router-dom'

function Home() {
  const listRef = useRef(null);

  const scrollToStart = () => {
    listRef.current.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

  const scrollToEnd = () => {
    listRef.current.scrollTo({
      left: listRef.current.scrollWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div>
          <p className={styles.headline}>Unlocking value and delivering quality.</p>
          <p className={styles.subheadline}>We offer a wide range of high quality products and services at the best prices. Explore our range today.</p>
          <a className={styles.sectioncta} href="#products">Explore our products</a>
        </div>
        <div className={styles.image}>
          <img src={heroImage} alt="different fruits and vegetables" />
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.section1}>what we do</p>
        <p className={styles.section2}>Get your fresh farm produce and commodities</p>
        <p className={styles.section3}>At High Yield Suppliers, we supply our clients with fresh farm produce and other dry foods all from well trained and dedicated farmers</p>
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.infosmall}>established</p>
          <p className={styles.infolarge}>2017</p>
        </div>
        <div>
          <p className={styles.infosmall}>over</p>
          <p className={styles.infolarge}>6+</p>
          <p className={styles.infosmall}>years supplying</p>
        </div>
        <div>
          <p className={styles.infosmall}>available in</p>
          <p className={styles.infolarge}>47</p>
          <p className={styles.infosmall}>counties and beyond</p>
        </div>
      </div>
      <div className={styles.products} id='products'>
        <p className={styles.section1}>our products</p>
        <p className={styles.section2}>Discover our wide range of products</p>
        <p className={styles.section3}>We take pride in offering a diverse range of high-quality products tailored to meet your needs. Get in touch and place your order.</p>
        <p className={styles.section4}><Link to='/contact' className={styles.btn}>Place your order now</Link></p>
        <div className={styles.listparent}>
          <div className={styles.listicon}><i onClick={scrollToStart} className="fa-solid fa-chevron-left"></i></div>
          <div ref={listRef}  className={styles.list}>
            <div className={styles.listitem}>
              <div className={styles.itemimage}><img src={image1} alt="fruits and vegetables" /></div>
              <p className={styles.itemname}>Fresh fruits and vegetables</p>
              <p className={styles.itemdescription}>Indulge in nature's bounty with our vibrant selection of farm-fresh produce, bursting with flavor and nutrients to elevate your culinary creations. We offer greens, bananas, mangoes, apples, among others</p>
            </div>
            <div className={styles.listitem}>
              <div className={styles.itemimage}><img src={image2} alt="raw chicken" /></div>
              <p className={styles.itemname}>Meat and poultry products</p>
              <p className={styles.itemdescription}>Elevate your meals with our meat and poultry sourced and prepared to meet your business needs, ensuring quality and satisfaction with every order. We offer beef, mutton, eggs, fish, chicken, among others</p>
            </div>
            <div className={styles.listitem}>
              <div className={styles.itemimage}><img src={image3} alt="wheat in and poured around a sack" /></div>
              <p className={styles.itemname}>Dry food commodities</p>
              <p className={styles.itemdescription}>Explore our pantry essentials, from hearty grains to nutritious dry foods, sourced for quality and convenience to fuel your daily adventures. We offer rice, sugar, cereals, tea leaves, flours, among others</p>
            </div>
            <div className={styles.listitem}>
              <div className={styles.itemimage}><img src={image4} alt="flowers" /></div>
              <p className={styles.itemname}>Fresh cut and potted flowers</p>
              <p className={styles.itemdescription}>Add a touch of elegance to any occasion with our exquisite blooms, we freshly cut and potted flowers</p>
            </div>
            <div className={styles.listitem}>
              <div className={styles.itemimage}><img src={image5} alt="plant seedlings" /></div>
              <p className={styles.itemname}>Seedlings</p>
              <p className={styles.itemdescription}>Cultivate your green thumb with our diverse selection of seedlings, nurtured for growth and ready to embark on their journey to become thriving plants in your garden or farm.</p>
            </div>
          </div>
          <div className={styles.listicon}><i onClick={scrollToEnd} className="fa-solid fa-chevron-right"></i></div>
        </div>
      </div>
      <div className={styles.servives}>
        <p className={styles.section1}>services</p>
        <p className={styles.section2}>Beyond Freshness</p>
        <p className={styles.section3}>Dive into the core of our identity as a company through an exploration of our distinct services</p>
        <p className={styles.section4}><Link to='/services' className={styles.btn}>Learn More</Link></p>
      </div>
    </div>
  )
}

export default Home