import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "../styles/aboutus.module.css";


const AboutUsText = `<ul>
            <li>With the blend of Ayurveda and modern science, we present you Vedayuu. Here's our effort to serve you 100% natural products with the hands of nature. We make sure that you feel better and live a healthy life. Ayurveda teaches us to love and honour who we are, not as what people think or tell us, who we should be </li>
            <li>What’s our sole motto?</li>
            <li>Our mission is to make a healthy lifestyle easy and affordable for everyone. Most of us Indians are common people, who deserve to have our desires and needs met. We aim to be the most affordable premium cosmetics and healthcare brand.</li>
            <li>What do we think about our customers?</li>
            <li>We believe that our customers are a part of our family. We ensure these things to make sure our company’s products are best suited for your health and beauty:</li>
            <li>We make sure that our products go through all the required tests(GMP, FSSAI, ISO and many more) and meet the safety standards that you as a customer expect. We believe in delivering products which are gentle as well as efficient. In this attempt, we make sure we use the best available ingredients(natural,plant-based or manmade) which are both certified safe as well as efficacious in getting the job done. We buy the best sources from world-famous manufacturers and deliver right to your doorstep </li>
        </ul>`;

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles.AboutUsRoot}>
        <span className={styles.AboutUsTitle}>About Vedayuu</span>
        <span
          className={styles.Body}
          dangerouslySetInnerHTML={{ __html: AboutUsText }}
        />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
