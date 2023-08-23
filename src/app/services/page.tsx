"use client";
import Image from "next/image";
import Navbar from "@/components/body/navbar";
import Footer from "@/components/body/footer";
import styles from "../styles/digi.module.css";
import { HeadElement } from "@/components/body/head";
import { metasitedata } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: metasitedata.title + "Services",
  description: metasitedata.description,
};

export default function SiteServices() {
  return (
    <>
      <HeadElement
        url=""
        image=""
        title="Services"
        description=""
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />

      <Navbar />
      <div className={styles.service} id="service">
        <div className={styles.contents}>
          <h1>Our Services</h1>
        </div>
      </div>

      {/* SERVICE MAIN SECTION */}
      <div id="oneone" className={styles.newSec3}>
        <div className={styles.features1}></div>
        <div className={styles.innerSection1}>
          <h6>01. </h6>
          <div className={styles.text}>
            <span>Metallurgical Analysis</span>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Our Metallurgical Analysis service at {metasitedata.title} is
              designed to unveil the hidden properties and characteristics of
              materials, providing invaluable insights to drive informed
              decision-making. With a deep-rooted commitment to precision and
              excellence, our team of skilled metallurgists utilizes
              cutting-edge technology and methodologies to delve into the
              microstructure and composition of materials. Through meticulous
              examinations, we decipher the intricate arrangement of grains,
              phases, and defects, shedding light on mechanical properties,
              corrosion susceptibility, and overall integrity.
            </p>
            <p>
              Whether its determining hardness, evaluating grain size,
              conducting microscopic assessments, or assessing the impact of
              manufacturing processes, our Metallurgical Analysis is a
              cornerstone of our offerings. We empower industries to optimize
              their materials for performance, safety, and longevity, enabling
              them to meet and exceed stringent quality standards. With
              unwavering dedication to accuracy and a passion for exploration,
              our Metallurgical Analysis service is a testament to our
              commitment to partnering with clients on their journey towards
              metallurgical excellence.
            </p>
          </div>
          <div className={styles.faq1}></div>
          <Link href="/contacts">INTERESTED</Link>
        </div>
      </div>

      <div id="twotwo" className={styles.newSec4}>
        <div className={styles.innerSection4}>
          <h6>02.</h6>
          <div className={styles.text4}>
            <span>Material Testing</span>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Our Material Testing services at {metasitedata.title} are at the
              forefront of quality assessment and performance optimization. With
              a profound understanding of the critical role materials play in
              various industries, our testing processes delve deep into the
              heart of materials to reveal their properties, behaviors, and
              potential. From the strength and durability of metals to the
              intricacies of polymers and composites, our comprehensive testing
              methodologies provide invaluable insights that drive informed
              decision-making and product excellence.
            </p>
            <p>
              Our team of skilled metallurgists and engineers harnesses
              cutting-edge technology and industry-standard protocols to conduct
              meticulous tests on a wide spectrum of materials. Whether you
              require tensile strength assessments, impact resistance
              evaluations, corrosion susceptibility analyses, or microstructure
              examinations, our Material Testing services offer a holistic
              understanding of material characteristics. We recognize that each
              industry has unique requirements, and our tailored approach
              ensures that our tests align with specific application demands.
              With precision as our hallmark, we empower industries to make
              materials that withstand the test of time, enhancing product
              quality, reliability, and customer satisfaction.
            </p>
          </div>

          <Link href="/contacts">INTERESTED</Link>
        </div>
        <div className={styles.features4}></div>
      </div>

      <div id="threethree" className={styles.newSec5}>
        <div className={styles.features5}></div>
        <div className={styles.innerSection5}>
          <h6>03.</h6>
          <div className={styles.text}>
            <span>Failure Analysis</span>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Our Failure Analysis service at {metasitedata.title} is your key
              to unraveling the mysteries behind unexpected material failures.
              When components fail prematurely, it can disrupt operations,
              compromise safety, and lead to financial losses. Our experienced
              team of metallurgical experts specializes in meticulously
              investigating the root causes of failures, employing a
              multi-faceted approach that combines cutting-edge technology with
              a deep understanding of material behavior. We meticulously examine
              fractured surfaces, assess microstructural changes, and conduct
              rigorous mechanical tests to decipher the intricate sequence of
              events that led to failure.
            </p>
            <p>
              At {metasitedata.title}, we leave no stone unturned in our pursuit
              of answers. Whether it&apos;s a brittle fracture, fatigue crack,
              corrosion-induced failure, or any other type of material
              breakdown, we meticulously collect data, analyze patterns, and
              provide comprehensive reports that not only identify the primary
              causes but also offer actionable recommendations for preventing
              future failures. Our commitment to excellence drives us to provide
              insights that empower industries to make informed decisions about
              material selection, manufacturing processes, and design
              modifications. With our Failure Analysis service, you gain more
              than just answers – you gain the knowledge to fortify your
              materials against unforeseen challenges and ensure the longevity
              and reliability of your products.
            </p>
          </div>
          <Link href="/contacts">INTERESTED</Link>
        </div>
      </div>

      <div id="fourfour" className={styles.newSec6}>
        <div className={styles.innerSection6}>
          <h6>04.</h6>
          <div className={styles.text}>
            <span>Welding Inspection</span>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Our Welding Inspection Services at {metasitedata.title} are
              designed to ensure the integrity, quality, and safety of welded
              components across diverse industries. We understand the pivotal
              role welding plays in the structural and functional integrity of
              your products. Our seasoned welding inspectors bring a wealth of
              experience and expertise, employing a meticulous approach to
              assess welds for conformity with industry standards and
              regulations.
            </p>
            <p>
              With a commitment to precision, we offer comprehensive welding
              inspection services that encompass visual examinations,
              non-destructive testing, and structural integrity assessments. Our
              inspectors leverage cutting-edge technology and techniques to
              identify potential defects, discontinuities, and imperfections
              that could compromise weld quality. Whether it&apos;s a
              construction project, manufacturing process, or any application
              where welding is critical, our services contribute to enhanced
              weld quality, reduced risk of failures, and adherence to
              compliance requirements.
            </p>
          </div>

          <Link href="/contacts">INTERESTED</Link>
        </div>
        <div className={styles.features6}></div>
      </div>

      <div id="fivefive" className={styles.newSec5}>
        <div className={styles.features7}></div>
        <div className={styles.innerSection5}>
          <h6>05.</h6>
          <div className={styles.text}>
            <span>Consultation</span>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              At {metasitedata.title}, our commitment to providing exceptional
              consultation services is a testament to our dedication in
              elevating your materials and processes. Our consultation services
              are designed to bridge the gap between theory and application,
              offering you expert insights and strategic guidance to enhance the
              quality and performance of your materials.
            </p>
            <p>
              With a team of seasoned metallurgists and engineers at your
              disposal, our consultation process begins by understanding the
              unique challenges and goals of your project. Whether you require
              assistance in selecting the right materials for a specific
              application, optimizing your production processes for greater
              efficiency, or overcoming material-related obstacles, our experts
              leverage their deep industry knowledge to provide tailored
              solutions. We take pride in our collaborative approach, working
              closely with you to ensure a comprehensive understanding of your
              needs before delivering actionable recommendations. Whether you&apos;re
              seeking to improve mechanical properties, corrosion resistance, or
              material selection, our consultation services empower you to make
              informed decisions that yield tangible improvements in your
              products&apos; performance, durability, and longevity.
            </p>
          </div>
          <Link href="/contacts">INTERESTED</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
