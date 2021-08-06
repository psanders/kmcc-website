import styles from '../styles/Form.module.css';

const Form = () => (
  <form action="//kaffeineminds.us5.list-manage.com/subscribe/post?u=9c97729231d96745c04a14353&amp;id=896fbd67dd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
    <div className={styles.form}>
        <input style={{width: "234px"}} type="text" id="mce-EMAIL" name="EMAIL" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  />
        <div style={{position: "absolute", left: "-5000px;"}} aria-hidden="true"><input type="text" name="b_9c97729231d96745c04a14353_896fbd67dd" tabIndex="-1" /></div>
        <button type="submit" value="Subscribe" name="subscribe" form="mc-embedded-subscribe-form">subscribe</button>
    </div>
  </form>
)

export default Form;