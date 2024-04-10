import React from 'react'
import styles from './Home.module.css'
import heroImage from '../images/fruits.png'
import image1 from '../images/kisspng-salad-vegetable-tomato.png'
import image2 from '../images/raw-chicken.png'
import image3 from '../images/kisspng-cereal-rice-food-whole-grain-wheat-whole-grains.png'
import image4 from '../images/duong-ngan-r7uz4y9y-Og-unsplash.png'
import image5 from '../images/devi-puspita-amartha-yahya-Ti2QQ36R5dQ-unsplash.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div>
          <p className={styles.headline}>Unlocking value and delivering quality.</p>
          <p className={styles.subheadline}>We offer a wide range of high quality products and services at the best prices. Explore our range today.</p>
          <a className={styles.sectioncta} href="#products">Explore our products</a>
        </div>
        <div className={styles.image}>
          <img src={heroImage} alt="image of different fruits and vegetables" />
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.section1}>what we do</p>
        <p className={styles.section2}>Get your fresh farm produce and commodities</p>
        <p className={styles.section3}>At High Yield Suppliers, we supply our clients with fresh farm produce and other dry foods all from well trained and dedicated farmers</p>
      </div>
      <div className={styles.products}>
        <p className={styles.section1}>our products</p>
        <p className={styles.section2}>Discover our wide range of products</p>
        <p className={styles.section3}>We take pride in offering a diverse range of high-quality products tailored to meet your needs</p>
        <div className={styles.list}>
          <div className={styles.listitem}>
            <div className={styles.itemimage}><img src={image1} alt="image of fruits and vegetables" /></div>
            <p className={styles.itemname}>Fresh fruits and vegetables</p>
            <p className={styles.itemdescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestiae adipisci consequatur placeat suscipit amet doloribus, voluptates sit accusantium veritatis tenetur natus. Neque aut veritatis corrupti dolores odio dicta</p>
          </div>
          <div className={styles.listitem}>
            <div className={styles.itemimage}><img src={image2} alt="image of raw chicken" /></div>
            <p className={styles.itemname}>Meat and poultry products</p>
            <p className={styles.itemdescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestiae adipisci consequatur placeat suscipit amet doloribus, voluptates sit accusantium veritatis tenetur natus. Neque aut veritatis corrupti dolores odio dicta</p>
          </div>
          <div className={styles.listitem}>
            <div className={styles.itemimage}><img src={image3} alt="image of wheat in and poured around a sack" /></div>
            <p className={styles.itemname}>Dry food commodities</p>
            <p className={styles.itemdescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestiae adipisci consequatur placeat suscipit amet doloribus, voluptates sit accusantium veritatis tenetur natus. Neque aut veritatis corrupti dolores odio dicta</p>
          </div>
          <div className={styles.listitem}>
            <div className={styles.itemimage}><img src={image4} alt="image of flowers" /></div>
            <p className={styles.itemname}>Fresh cut and potted flowers</p>
            <p className={styles.itemdescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestiae adipisci consequatur placeat suscipit amet doloribus, voluptates sit accusantium veritatis tenetur natus. Neque aut veritatis corrupti dolores odio dicta</p>
          </div>
          <div className={styles.listitem}>
            <div className={styles.itemimage}><img src={image5} alt="image of plant seedlings" /></div>
            <p className={styles.itemname}>Seedlings</p>
            <p className={styles.itemdescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestiae adipisci consequatur placeat suscipit amet doloribus, voluptates sit accusantium veritatis tenetur natus. Neque aut veritatis corrupti dolores odio dicta</p>
          </div>
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