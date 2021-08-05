import coffee from '@images/coffee.png';
import coffeeDrinker from '@images/man-drinking-coffee.png';
import computerDesk from '@images/man-on-computer.png';
import Form from '@components/Form.js';
import Image from 'next/image';
import MadeInUSA from '@images/usa-product.svg';
import TitleSVG from '@images/coffee-for-coders.svg';
import shirt from '@images/shirt.png';
import styles from '../styles/Home.module.css';
import { useAppContext } from '@context/AppContext';

export default function Home() {
  const { viewportWidth } = useAppContext();
  const breakpoint = 1080;

  return (
    <>
      <div className={styles.leadspace}>
        { (viewportWidth >= breakpoint) && (
          <video autoPlay muted loop className={styles.video}>         
            <source src="/videos/bg-video.mp4" type="video/mp4"/>       
          </video>
        )}
        <h1 className={styles.headline}><span className="gold">Good</span> from <br/>the ground up</h1>
        <div className={styles.leadspaceSubscribe}>
          <h3>Upgrade your day with Kaffeine Minds.</h3>
          <Form />
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>Coffee Developed For <br /><span className="gold">Developers by developers</span></h2>
          <p>Smooth and Rich in Taste Deep, Dark Aromatic Experience Pure Blended Awesomeness</p>
        </div>
      </div>


      <div id="products" className={styles.forCoders}>
        <div className={styles.forCodersWrapper}>
          <div className={styles.forCodersImage}>
            <div className={styles.svgTitleMobile}>
              <TitleSVG />
            </div>
            <Image
              src={coffee}
              alt="Kaffeine Minds coffee products on display"
            />
          </div>
          <div className={styles.forCodersContent}>
            <div className={styles.svgTitle}>
              <TitleSVG />
            </div>
            <div className={styles.forCodersCopy}>
              <p>You live an always-on, always busy lifestyle, which means coffee should do more than give you a caffeine kick; it should also taste amazing.</p>
              <p>That is why we at KMCC source the highest-quality Arabica beans to give you the ideal balance of flavor, energy, and a smooth, low-acidity finish. We want you to keep your mind sharp when developing code, coming up with algorithms, and building that next big business with coffee that fits your real, everyday life.</p>
            </div>
            <div className={styles.svgUSA}>
              <MadeInUSA />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondary}>
        <div className={styles.secondaryContent}>
          <h2>WE ARE LAUNCHING SOON<br /><span className="gold">BUT YOU DO NOT HAVE TO WAIT</span></h2>
          <p>You do not have to wait until we launch to enjoy our fantastic selection of coffee options. KMCC coffee is available on Amazon.com</p>
        </div>
        <Image
          src={computerDesk}
          alt="person working on laptop at desk"
        />
      </div>

      <div className={styles.swag}>
        <div className={styles.subscribe}>
          <h2>When to <br /><span className="gold">snag your swag</span></h2>
          <p>Sign up to find out when the swag is available for order.</p>
          <Form />
        </div>
        <div className={styles.swagImg}>
          <Image
            src={shirt}
            alt="kaffeine minds t-shirt"
          />
        </div>
        
      </div>

      <div id="about-us" className={styles.why}>
        <div className={styles.whyWrapper}>
          <div className={styles.whyHeader}>
            <h2>Who we are <br /><span className="gold">+ Why we are doing this</span></h2>
            <div className={styles.whyImage}>
              <Image
                src={coffeeDrinker}
                alt="person drinking coffee looking out of a window"
              />
            </div>
          </div>
          <div className={styles.whyContent}>
            <p>We are a veteran-owned and operated company, importing high-quality coffee beans, especially blending and roasting them, and shipping them directly to our consumers.</p>
            <p>We recognize that the coffee customer journey is more than just providing a fantastic cup of coffee.</p>
            <p>Our medium and dark roasts are packed with energy. Ideal for professionals who want to improve focus and maximize performance, especially those entrepreneurs and self-starters focused on software or development productivity.</p>
            <p className="bold">We exist to help you become the best version of yourself one cup of coffee at the time.</p>
          </div>
        </div>
      </div>

      <div className={styles.upcoming}>
        <p>Kaffeine Minds is coming this Summer, stay up to date.</p>
        <Form />
      </div>
    </>
  )
}
