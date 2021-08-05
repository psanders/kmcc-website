import Logo from '@images/logo.svg';
import styles from '../styles/Masthead.module.css';

const Masthead = () => {

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="https://amazon.com/shops/kaffeineminds">Shop</a>
          <a href="#about-us">About us</a>
        </nav>
      </div>
    </div>
  )
}

export default Masthead;