"use client";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/body/navbar";
import Footer from "@/components/body/footer";
import styles from "../styles/about.module.css";
import { HeadElement } from "@/components/body/head";
import { metasitedata } from "@/lib/utils";

export default function About() {
  return (
    <div className={styles.container}>
      <HeadElement url="" image="" title="About" description="" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />

      <Navbar />

      {/* SECTION 1 */}
      <div className={styles.about_us} id="about_us">
        <div className={styles.contents}>
          <h1>WHO WE ARE</h1>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className={styles.about} id="about">
        <div className={styles.content} id="content">
          <div className={styles.left}>
            <Image src="/assets/website.jpg" width={680} height={420} alt="" />
          </div>

          <div className={styles.right}>
            <div className={styles.text}>About {metasitedata.title}.</div>
            <div className="flex flex-col gap-4">
              <p>
                {metasitedata.title} is a pioneering metallurgical testing
                laboratory that stands as a beacon of excellence in the heart of
                Kenya. With a steadfast commitment to precision, innovation, and
                customer satisfaction, we have established ourselves as a
                trusted partner for industries seeking comprehensive
                metallurgical solutions.
              </p>
              <p>
                At {metasitedata.title}, we do more than perform tests – we
                unravel the intricate secrets hidden within the atomic structure
                of materials. Our state-of-the-art laboratory facilities house
                an impressive array of advanced equipment, managed by a team of
                passionate metallurgists, engineers, and industry experts.
                Whether its scrutinizing microstructures, evaluating mechanical
                properties, investigating welding integrity, or conducting
                failure analyses, we embrace each challenge with an unwavering
                pursuit of accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3- CTA */}
      <div className={`flex flex-col ${styles.cta} px-20 mx-20 space-x-10`}>
        <h5 className="mx-20 lg:mx-44">
          What truly sets us apart is our dedication to collaboration. We
          believe in forging partnerships that transcend mere transactions. When
          you engage with {metasitedata.title}, you become a part of
          our pursuit of metallurgical excellence. Your challenges become our
          challenges, and your successes become our achievements.{" "}
        </h5>
      </div>

      <Footer />
    </div>
  );
}
