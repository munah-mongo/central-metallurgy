"use client";
import styles from "../styles/contacts.module.css";
import Navbar from "@/components/body/navbar";
import Footer from "@/components/body/footer";
import { HeadElement } from "@/components/body/head";
import ContactForm from "@/components/global/contact-form";

export default function Contacts({ url }) {
  return (
    <>
      <HeadElement url="" image="" title="Contacts" description="" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />

      <Navbar />
      <div className={styles.contacts}>
        <div className={styles.contents}>
          <h2>GET IN TOUCH</h2>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.content}>
          <p>Do you have any questions for us or need a quote?</p>
        </div>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.box}>
              <div className={styles.icon}>
                <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div className={styles.text}>
                <h3>Address</h3>
                <p>1st Floor, New Market Plaza</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.text}>
                <h3>Office Tel</h3>
                <p>+254 700 000 000</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.text}>
                <h3>Email</h3>
                <p>info@email.com</p>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
