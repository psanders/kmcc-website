import IconFB from '@images/fb.svg';
import IconIG from '@images/ig.svg';
import IconLI from '@images/li.svg';
import Stamp from '@images/veteran-owned.svg';
import styles from '../styles/Footer.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <Stamp className={styles.stamp} />
          <div className={styles.nav}>
            <ul>
              <li><a href="#about-us">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="https://amazon.com/shops/kaffeineminds">Shop</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.contact}>
          <p className="gold">Contact Us</p>
          <a href="mailto:info@kaffeineminds.com">info@kaffeineminds.com</a>
          <div className={styles.social}>
            <ul>
              <li>
                <a href="https://www.facebook.com/kaffeineminds" rel="norefereer noreferrer" target="_blank"><IconFB /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/kaffeineminds" rel="norefereer noreferrer" target="_blank"><IconIG /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/kaffeineminds" rel="norefereer noreferrer" target="_blank"><IconLI /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>&copy; 2021 Kaffeine Minds Coffee Co. All rights reserved.</p>
    </footer>
  )
}

export default Footer;