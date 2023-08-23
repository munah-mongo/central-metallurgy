"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/body/footer";
import styles from "./styles/homer.module.css";
import Navbar from "@/components/body/navbar";
import { useState } from "react";
import { HeadElement } from "@/components/body/head";
import { metasitedata } from "@/lib/utils";

export default function Homer() {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <HeadElement url="" image="" title="HomePage" description="" />
      <Navbar />

      {/* SECTION 1 */}
      <div className={styles.containerInfo}>
        {/* <div className={styles.overlay}></div> */}
        <video
          src="/video/home-video.mp4"
          autoPlay
          loop
          muted
          className={styles.video}
        />

        <div
          className={`flex justify-center items-center text-center ${styles.content} px-48`}
        >
          <h1>Welcome to {metasitedata.title}</h1>
          <p className={styles.centerText}>
            At {metasitedata.title}, we are committed to providing top-notch
            metallurgical testing and analysis services. Our state-of-the-art
            facilities and experienced team ensure accurate and reliable results
            for your materials.
          </p>
        </div>
      </div>
      {/* SECTION 2 yarn create next-app@latest central-metallurgy --typescript --tailwind --eslint
       */}
      <div className={styles.containerInfo2}>
        <div className={styles.grid}>
          <Link href="/digimarketing">
            <div className={styles.card}>
              {/* <span><i class='fas fa-arrow-alt-right'></i></span> */}
              <h2>EXPLORE</h2>
              <h2> OUR SERVICES </h2>
              <div className={styles.wrapper}>
                <div className={styles.anime}>
                  {/* <p className={styles.statictxt}>...</p> */}
                  <ul className={styles.dynamictxt}>
                    <li>
                      <span>Metallurgical Analysis</span>
                    </li>
                    <li>
                      <span>Material Testing</span>
                    </li>
                    <li>
                      <span>Failure Analysis</span>
                    </li>
                    <li>
                      <span>Welding Inspection</span>
                    </li>
                    <li>
                      <span>Consultation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>&rarr;</p>
            </div>
          </Link>
          <Link href="/tech_hub">
            <div className={styles.cardits}>
              {/* <span><i class='fas fa-arrow-alt-right'></i></span> */}
              <h2>EXPLORE</h2>
              <h2> EXTERNAL RESOURCES</h2>
              <div className={styles.animer}>
                {/* <p className={styles.statictxt}>...</p> */}
                <ul className={styles.dynamictxt}>
                  <li>
                    <span>Licensing & Permitting</span>
                  </li>
                  <li>
                    <span>Mineral Reporting Downloads</span>
                  </li>
                  <li>
                    <span>Maps</span>
                  </li>
                  <li>
                    <span>Gemology</span>
                  </li>
                  <li>
                    <span>Mineral Trading & Networking</span>
                  </li>
                  <li>
                    <span>Service Providers</span>
                  </li>
                  <li>
                    <span>Mining Companies</span>
                  </li>
                  <li>
                    <span>Resources -Exploration</span>
                  </li>
                  <li>
                    <span>Mineral Exchange & Auction</span>
                  </li>
                </ul>
              </div>
              <p>&rarr;</p>
            </div>
          </Link>
        </div>

        <div className={styles.text1}>
          <p className={styles.txt2}>
            Unveil a spectrum of specialized metallurgical solutions at{" "}
            {metasitedata.title}. From precise material testing and
            comprehensive analysis to expert consultation, we drive industries
            towards peak performance. With state-of-the-art facilities and a
            skilled team, we're your material potential's key partner.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className={styles.newSec1}>
        <div className={styles.features}></div>
        <div className={styles.innerSection}>
          <h2 className={styles.titled}>WHY US</h2>
          <div className="accordion">
            {data.map((item, i) => (
              <div className="item" key={item.question}>
                <div
                  className={`${styles.title} text-foreground`}
                  onClick={() => toggle(i)}
                >
                  <h4 className="text-white">{`${item.question}`}</h4>
                  <span className="text-white">
                    {selected === i ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={
                    selected === i
                      ? "flair show text-white"
                      : "flair text-white"
                  }
                >{`${item.answer}`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className={styles.newSec2}>
        <div className={styles.heading}>How we Deliver Excellence </div>

        <div className={styles.teamContent}>
          <div className={styles.left}>
            <h3 className="text-lg font-semibold">
              At {metasitedata.title}, our approach to metallurgical analysis
              and testing is centered around precision, collaboration, and
              delivering actionable results. Here's a glimpse into how we work:
            </h3>
            <p>
              <strong>Understanding Your Needs:</strong> We begin by closely
              collaborating with you to understand your unique requirements and
              objectives. Whether you need material testing, failure analysis,
              or consultation, our team takes the time to grasp the intricacies
              of your project.
            </p>
            <p>
              <strong>State-of-the-Art Testing:</strong> Our cutting-edge
              laboratory facilities come into play, where advanced equipment and
              technology are used to conduct a range of tests, from
              microstructure examinations to mechanical property assessments.
            </p>
            <p>
              <strong>Actionable Insights:</strong> The results of our analyses
              are presented in clear, insightful reports. We not only provide
              raw data but also offer interpretations and recommendations that
              enable you to make informed decisions about your materials and
              products.
            </p>
          </div>

          <div className={styles.right}>
            <Image src="/assets/concepts.jpg" width={680} height={420} alt="" />
          </div>
        </div>

        <div className={styles.img_wrapper}>
          <Image
            src="/assets/problem-solving.png"
            alt=""
            width={1500}
            height={160}
          />
        </div>

        <div className={styles.heading1}>Our Market</div>
        <div className={styles.teamContent1}>
          <div className={styles.left}>
            <Image src="/assets/team.jpg" width={680} height={420} alt="" />
          </div>

          <div className={styles.right}>
            <p>
              {metasitedata.title} proudly serves a diverse array of industries
              with our specialized metallurgical services. From the
              manufacturing sector, where material integrity and performance are
              paramount, to the automotive and aerospace industries, where
              safety and precision are non-negotiable, our expertise caters to
              the unique demands of each field. We extend our services to
              construction, energy, and more, providing comprehensive material
              testing, analysis, and consultation that drive quality,
              compliance, and innovation.{" "}
            </p>
            <p>
              Regardless of the industry, our commitment to precision, advanced
              technology, and personalized solutions positions us as a trusted
              partner, ensuring that the materials powering your products are
              optimized for peak performance and reliability.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
const data = [
  {
    question: "We Posses Extra-Ordinary Expertise",

    answer:
      " Our seasoned team of metallurgical experts brings years of industry experience, ensuring accurate analysis and actionable insights for your materials",
  },
  {
    question: "We are Know for Our Advanced Facilities",
    answer:
      "Equipped with cutting-edge technology, our state-of-the-art laboratory enables us to deliver precise testing and analysis that meet the highest standards.",
  },
  {
    question: "We Take Pride In Providing Tailored Solutions",
    answer:
      "We understand that each industry has unique requirements. Our personalized approach ensures that our services are customized to address your specific needs.",
  },
  {
    question: "We Deliver Comprehensive Services",
    answer:
      "From material testing and analysis to failure investigations and consultation, we offer a complete suite of services to cover every aspect of metallurgy.",
  },
  {
    question: "We are Committed to Excellence",
    answer:
      "Our unwavering commitment to excellence drives us to go above and beyond, ensuring that you receive the highest quality of service and insights.",
  },
];
