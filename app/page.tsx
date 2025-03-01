"use client";

import "./style.css";
import FormNewsletter from "@/app/_components/FormNewsletter";
import Faq from "@/app/_components/Faq";
import FooterV2 from "@/app/_components/FooterV2";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { getScripts } from "@/app/_lib/data-service";
import { useEffect, useState } from "react";

export default function Home() {
  interface Script {
    id: string;
    title: string;
    description: string;
    youtube_link: string;
  }

  const [scriptsArray, setScriptsArray] = useState<Script[]>([]);

  const items = [
    {
      icon: "fa-server",
      title: "Custom FiveM Scripts for Unique Servers",
      description:
        "We create tailored FiveM scripts to elevate your server's gameplay and functionality, ensuring optimal performance and player engagement",
    },
    {
      icon: "fa-laptop-code",
      title: "Top-Quality Code for Security and Speed",
      description:
        "Our code solutions prioritize security and speed, offering resilient performance and seamless user experience",
    },
    {
      icon: "fa-file",
      title: "Professional Websites Built to Impress",
      description:
        "We build responsive, user-friendly websites that capture your brand and engage visitors effectively",
    },
    {
      icon: "fa-headset",
      title: "Reliable Support When You Need It",
      description:
        "Our team provides quick and effective support to keep your systems running smoothly at all times",
    },
    {
      icon: "fa-thumbs-up",
      title: "Bespoke Projects Tailored to You",
      description:
        "We handle custom requests with precision, delivering results that align perfectly with your goals",
    },
    {
      icon: "fa-hand-holding-dollar",
      title: "High Quality That’s Budget-Friendly",
      description:
        "Get top-tier digital solutions without stretching your budget, offering quality and affordability",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const test = await getScripts();
      setScriptsArray(test);
    }
    fetchData();
  }, []);

  const itemZ = [
    { src: "https://skillicons.dev/icons?i=lua", alt: "Lua" },
    { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
    { src: "https://skillicons.dev/icons?i=react", alt: "React" },
    { src: "https://skillicons.dev/icons?i=vue", alt: "Vue" },
    { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
    { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind" },
    { src: "https://skillicons.dev/icons?i=figma", alt: "Figma" },
    { src: "https://skillicons.dev/icons?i=redux", alt: "Redux" },
    { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
    { src: "https://skillicons.dev/icons?i=vite", alt: "Vite" },
    { src: "https://skillicons.dev/icons?i=css", alt: "CSS" },
    { src: "https://skillicons.dev/icons?i=html", alt: "HTML" },
    { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
    { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
  ];

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  function scrollUp(element: string) {
    const elementFind = document.querySelector(`${element}`);
    elementFind?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div className="headerBtnBg" variants={childVariant}>
          <div className="headerBtnContent">
            <h2>Built for Servers, Designed for Success</h2>
          </div>
        </motion.div>

        <motion.h3 variants={childVariant}>We turn</motion.h3>
        <motion.h4 variants={childVariant}>dreams into reality</motion.h4>
        <motion.h5 variants={childVariant}>
          Solutions, Development, Innovation, Support, and Much More
        </motion.h5>

        <motion.div variants={childVariant}>
          <FormNewsletter />
        </motion.div>

        <motion.div className="headerImg" variants={childVariant}></motion.div>

        <motion.h6
          className="mainH6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          At OPCREW, we embrace a variety of programming languages to create
          powerful solutions. Check out the languages and technologies that
          shape our success!
        </motion.h6>

        <motion.div
          className="headerImgContainer"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {itemZ.map((item, index) => (
            <motion.img
              src={item.src}
              alt={item.alt}
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            />
          ))}
        </motion.div>

        <motion.div className="circle1" variants={childVariant}></motion.div>
        <motion.div
          className="light1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, rotate: 35 },
          }}
        ></motion.div>
        <motion.div
          className="light2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, rotate: 35 },
          }}
        ></motion.div>
      </motion.header>

      <motion.div
        className="whyUsContainer"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div className="circle2" variants={childVariant}></motion.div>
        <motion.div className="whyUsLabel" variants={childVariant}>
          <i className="fa-solid fa-question"></i>
          <h2>Why us</h2>
        </motion.div>

        <motion.h3 className="mainWhyUsLabel" variants={childVariant}>
          Discover what makes us unique
        </motion.h3>

        <motion.div
          className="whyUsItemContainer"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {items.map((item, index) => (
            <motion.div className="whyUs1" key={index} variants={childVariant}>
              <i className={`fa-solid ${item.icon}`}></i>
              <h4>{item.title}</h4>
              <h5>{item.description}</h5>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="ourTeamContainer"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div className="circle3" variants={childVariant}></motion.div>
        <motion.div className="ourTeamLabel" variants={childVariant}>
          <i className="fa-solid fa-people-group"></i>
          <h2>Our team</h2>
        </motion.div>
        <motion.h3 variants={childVariant} className="mainOurTeamsLabel">
          Meet the dedicated team you can trust
        </motion.h3>

        <motion.div
          className="ourTeamItemContainer"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="ourTeam1 termi" variants={childVariant}>
            <div className="info">
              <div className="topSection">
                <div className="toptxt">
                  <h4>Termi</h4>
                  <h5>Developer and CEO</h5>
                </div>
                <a href="https://github.com/Teeermi">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <p>
                Open-minded programmer with a focus on innovation and
                efficiency. Known for a problem-solving mindset and a passion
                for transforming complex ideas into practical, intuitive
                solutions.
              </p>
            </div>
          </motion.div>

          <motion.div className="ourTeam1 pk" variants={childVariant}>
            <div className="info">
              <h4>definitelynotpk</h4>
              <h5>Developer and CEO</h5>
              <p>
                Skilled scripts developer with a focus on high-quality code and
                performance optimization, renowned for a strategic approach to
                software solutions. Committed to producing high-quality,
                optimized solutions that exceed client expectations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scriptsContainer"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div className="circle4" variants={childVariant}></motion.div>
        <motion.div className="scriptsLabel" variants={childVariant}>
          <i className="fa-solid fa-code"></i>
          <h2>Scripts</h2>
        </motion.div>
        <motion.h3 variants={childVariant} className="mainScriptsLabel">
          Explore Our Collection of Best Scripts
        </motion.h3>

        <motion.div className="tescikk" variants={childVariant}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="abc"
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {scriptsArray.map((item: Script) => {
              return (
                <motion.div
                  className="SliderContainer"
                  variants={childVariant}
                  key={item.id}
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="SliderBtns">
                    <Link href={`/products/${item.id}`}>Buy now</Link>
                    <Link href={item.youtube_link}>Preview</Link>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </motion.div>
      </motion.div>

      {/*<div className="feedbackContainer">*/}
      {/*  <div className="feedbackLabel">*/}
      {/*    <i className="fa-solid fa-comment"></i>*/}
      {/*    <h2>Feedback</h2>*/}
      {/*  </div>*/}
      {/*  <h3 className="mainFeedbackLabel">Customer Feedback</h3>*/}

      {/*  <div className="feedContainer">*/}
      {/*    <div className="feed1">*/}
      {/*      <h2>lorem</h2>*/}
      {/*      <div className="feedCustomer">*/}
      {/*        <img*/}
      {/*            src="https://s3-alpha-sig.figma.com/img/c10c/358d/0b5e1fcd7d840a8bd1205e3605a7d921?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPpagq5X0gT2STX0PxHcs6Pu4Jno40P5-lHg30vzWYZxy~ZY-5tb5iDDylCbGX3hDvlQHn4M0ATNh5S4vTkI2Tu8RLl1x8vQi-PcMAv2NGPg-nGuibrzOJ3zgEIQJHrHpqstox9-vqhBlNHGauQr1YzCn5mVQmqvXEP-LkGzdvEd4iKBZdztaOxtci8a-odnjfUPE08C8Oi0~gNLdkChOnp8qVs3HAbl6tKUSO5nO7XXa2BYFIM3sviMS5q4ruJ6HZgh-svDLspZbmpJ5OZ40HmaDfMsgbtHMiOdA61h0DLZnnBlNww3w435FJHDeDvmTMhd6EduORQClCXRtjdFVA__"*/}
      {/*            alt=""/>*/}
      {/*        <div className="feedTxt">*/}
      {/*          <h3>definitelynotpk</h3>*/}
      {/*          <h4>Lorem</h4>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="feed1"></div>*/}
      {/*    <div className="feed1"></div>*/}

      {/*  </div>*/}

      {/*</div>*/}

      {/*<div className="statsContainer">*/}
      {/*  <div className="statsLabel">*/}
      {/*    <i className="fa-solid fa-chart-simple"></i>*/}
      {/*    <h2>Stats</h2>*/}
      {/*  </div>*/}
      {/*  <h3 className="mainStatsLabel">Our Achievements in Figures</h3>*/}

      {/*  <div className="statsMain">*/}
      {/*    <div className="blurED">*/}
      {/*      <div className="stat1">*/}
      {/*        <h2>1500</h2>*/}
      {/*        <h3>Lorem</h3>*/}
      {/*      </div>*/}
      {/*      <div className="stat1">*/}
      {/*        <h2>1500</h2>*/}
      {/*        <h3>Lorem</h3>*/}
      {/*      </div>*/}
      {/*      <div className="stat1">*/}
      {/*        <h2>1500</h2>*/}
      {/*        <h3>Lorem</h3>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <Faq />

      <motion.div
        className="discordContainer"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div className="discordText" variants={childVariant}>
          <h2>Get in touch with our support team instantly</h2>
          <p>
            Do you have any questions or concerns, or do you need help with your
            order? Join our server by clicking below.
          </p>
          <a href="https://discord.gg/7DWNCbBB">Join our discord</a>
        </motion.div>

        <motion.div className="testt" variants={childVariant}>
          <img src="/image%202.png" alt="Discord server preview" />
        </motion.div>
        <motion.div className="circle6" variants={childVariant}></motion.div>
      </motion.div>

      <footer>
        <div className="leftSide">
          <div className="brand">
            <img src="/Designer%201.png" alt="" />
            <h2>opcrew.dev</h2>
          </div>
          <h3>
            opcrew.dev. is a group of developers creating well-thought-out and
            secure scripts for FiveM, delivering excellent quality by utilizing
            a variety of modern techniques
          </h3>
          <h4>
            Disclaimer: This website is in no way affiliated with, authorized,
            maintained, sponsored or endorsed by Rockstar Inc. (rockstar.com) or
            any of its affiliates or subsidiaries. Images belong to respected
            owners.
          </h4>
        </div>

        <div className="rightSide">
          <h2>Informations</h2>

          <div className="refsContainer">
            <h3 onClick={() => scrollUp("nav")}>Home</h3>
            <Link href={"/shop"}>Shop</Link>
            <h3 onClick={() => scrollUp(".whyUsContainer")}>Why us</h3>
          </div>

          <div className="refsContainerv2">
            <h3 onClick={() => scrollUp(".ourTeamContainer")}>Our team</h3>
            <h3 onClick={() => scrollUp(".scriptsContainer")}>Scripts</h3>
            <h3 onClick={() => scrollUp(".faqContainer")}>Faq</h3>
            <h3 onClick={() => scrollUp(".discordContainer")}>Discord</h3>
          </div>

          <div className="迪克">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6253 16.2582H8.50494L6.91495 10.1924C6.83949 9.91334 6.67925 9.66667 6.44354 9.5504C5.85531 9.25823 5.20712 9.0257 4.5 8.90843V8.6749H7.91567C8.38708 8.6749 8.74064 9.0257 8.79957 9.43313L9.62454 13.8086L11.7438 8.6749H13.8052L10.6253 16.2582ZM14.9838 16.2582H12.9813L14.6302 8.6749H16.6327L14.9838 16.2582ZM19.2234 10.7757C19.2823 10.3673 19.6359 10.1337 20.0483 10.1337C20.6965 10.0751 21.4026 10.1924 21.9919 10.4835L22.3454 8.85081C21.7562 8.61727 21.108 8.5 20.5198 8.5C18.5762 8.5 17.162 9.55041 17.162 11.0082C17.162 12.1173 18.1637 12.6996 18.8708 13.0504C19.6359 13.4002 19.9305 13.6338 19.8716 13.9835C19.8716 14.5082 19.2823 14.7418 18.6941 14.7418C17.9869 14.7418 17.2798 14.5669 16.6327 14.2747L16.2791 15.9085C16.9862 16.1996 17.7512 16.3169 18.4584 16.3169C20.6376 16.3745 21.9919 15.3251 21.9919 13.75C21.9919 11.7665 19.2234 11.6502 19.2234 10.7757ZM29 16.2582L27.41 8.6749H25.7022C25.3486 8.6749 24.9951 8.90843 24.8772 9.25823L21.9329 16.2582H23.9943L24.4058 15.1502H26.9386L27.1743 16.2582H29ZM25.9968 10.7171L26.585 13.5751H24.9361L25.9968 10.7171Z"
                fill="#172B85"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8055 8.14192L17.0275 8.52349V7.08202L18.8055 6.70752V8.14192ZM11.5803 7.52718L9.852 7.89461L9.84491 13.5545C9.84491 14.6003 10.6312 15.3705 11.6795 15.3705C12.2603 15.3705 12.6853 15.2645 12.9191 15.1373V13.7029C12.6924 13.7948 11.5733 14.1198 11.5733 13.074V10.5656H12.9191V9.06051H11.5733L11.5803 7.52718ZM7.39418 10.4737C7.01876 10.4737 6.79209 10.5797 6.79209 10.8553C6.79209 11.1562 7.18219 11.2885 7.66615 11.4527C8.45512 11.7204 9.49355 12.0728 9.49794 13.3779C9.49794 14.6427 8.48502 15.3705 7.01168 15.3705C6.40251 15.3705 5.73667 15.2504 5.07792 14.9677V13.286C5.67292 13.611 6.42376 13.8513 7.01168 13.8513C7.40834 13.8513 7.69168 13.7453 7.69168 13.4203C7.69168 13.087 7.26881 12.9346 6.75828 12.7507C5.98078 12.4706 5 12.1173 5 10.9401C5 9.68939 5.95625 8.94039 7.39418 8.94039C7.9821 8.94039 8.56293 9.03225 9.15085 9.26543V10.9259C8.61252 10.6362 7.93251 10.4737 7.39418 10.4737ZM27.9429 8.94039C29.6217 8.94039 30.5 10.3677 30.5 12.1766C30.5 12.2743 30.4953 12.4377 30.4913 12.5762V12.5762V12.5762V12.5762V12.5763C30.4884 12.6782 30.4858 12.7666 30.4858 12.8055H27.0221C27.1 13.6393 27.7092 13.8796 28.3962 13.8796C29.0975 13.8796 29.65 13.7312 30.1317 13.4909V14.9041C29.65 15.1726 29.0125 15.3634 28.1696 15.3634C26.4412 15.3634 25.2371 14.2894 25.2371 12.1625C25.2371 10.3677 26.2571 8.94039 27.9429 8.94039ZM27.9358 10.3748C27.4895 10.3748 27.0008 10.7069 27.0008 11.5054H28.8283C28.8283 10.7069 28.3679 10.3748 27.9358 10.3748ZM15.1221 9.58341L15.0088 9.06052H13.4788V15.2433H15.2496V11.0531C15.6676 10.5091 16.3759 10.608 16.5955 10.6857V9.06052C16.3688 8.97573 15.5401 8.82028 15.1221 9.58341ZM17.0274 9.06052H18.8053V15.2433H17.0274V9.06052ZM22.5028 8.94039C21.8086 8.94039 21.3624 9.26543 21.1145 9.49154L21.0224 9.05345H19.4641V17.2925L21.2349 16.918L21.242 14.9183C21.497 15.102 21.8724 15.3634 22.4957 15.3634C23.7637 15.3634 24.9182 14.3459 24.9182 12.106C24.9112 10.0568 23.7424 8.94039 22.5028 8.94039ZM22.0778 13.8089C21.6599 13.8089 21.412 13.6605 21.242 13.4768L21.2349 10.8553C21.419 10.6504 21.674 10.509 22.0778 10.509C22.7224 10.509 23.1686 11.2298 23.1686 12.1554C23.1686 13.1023 22.7295 13.8089 22.0778 13.8089Z"
                fill="#6461FC"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.3462 8.93296C8.81624 8.97261 9.28628 8.69506 9.58006 8.34316C9.86894 7.98135 10.0599 7.49563 10.0109 7C9.59475 7.01983 9.08064 7.27755 8.78686 7.63936C8.51757 7.95161 8.28745 8.45715 8.3462 8.93296ZM13.9377 15.3167V7.58981H16.8021C18.2807 7.58981 19.3138 8.62072 19.3138 10.1274C19.3138 11.6342 18.2611 12.675 16.7629 12.675H15.1226V15.3167H13.9377ZM10.006 9.02714C9.5919 9.00301 9.21406 9.1532 8.90886 9.27451C8.71246 9.35257 8.54614 9.41868 8.41961 9.41868C8.27762 9.41868 8.10444 9.34904 7.90999 9.27085C7.65521 9.16839 7.36392 9.05125 7.05845 9.05687C6.35829 9.06679 5.70709 9.46825 5.34966 10.1076C4.61522 11.3863 5.1587 13.2796 5.86866 14.3205C6.2163 14.8359 6.63248 15.4009 7.18086 15.3811C7.42211 15.3719 7.59566 15.2974 7.77526 15.2202C7.98203 15.1314 8.19683 15.0391 8.53223 15.0391C8.85599 15.0391 9.0614 15.129 9.25858 15.2152C9.44606 15.2973 9.62611 15.376 9.89339 15.3712C10.4614 15.3613 10.8188 14.8557 11.1664 14.3403C11.5416 13.7871 11.7064 13.2471 11.7314 13.1652L11.7344 13.1557C11.7338 13.1551 11.7291 13.153 11.721 13.1492C11.5956 13.0911 10.637 12.6469 10.6278 11.4557C10.6186 10.4559 11.3881 9.94937 11.5093 9.86963L11.5093 9.86962C11.5166 9.86477 11.5216 9.8615 11.5238 9.85979C11.0342 9.12626 10.2704 9.04696 10.006 9.02714ZM21.478 15.3761C22.2223 15.3761 22.9126 14.9945 23.226 14.3898H23.2505V15.3166H24.3472V11.4706C24.3472 10.3554 23.4659 9.63672 22.1096 9.63672C20.8513 9.63672 19.921 10.3653 19.8867 11.3665H20.9541C21.0423 10.8907 21.478 10.5784 22.0754 10.5784C22.8 10.5784 23.2064 10.9204 23.2064 11.5499V11.9761L21.7277 12.0653C20.3519 12.1496 19.6077 12.7195 19.6077 13.7108C19.6077 14.712 20.3764 15.3761 21.478 15.3761ZM21.7962 14.4592C21.1646 14.4592 20.7631 14.1519 20.7631 13.6811C20.7631 13.1954 21.1499 12.9129 21.8893 12.8683L23.2063 12.784V13.2202C23.2063 13.9438 22.5992 14.4592 21.7962 14.4592ZM27.9851 15.619C27.5102 16.9721 26.9667 17.4181 25.8112 17.4181C25.7231 17.4181 25.4293 17.4082 25.3607 17.3884V16.4616C25.4342 16.4715 25.6153 16.4814 25.7084 16.4814C26.2323 16.4814 26.526 16.2584 26.7072 15.6785L26.8149 15.3365L24.8075 9.71108H26.0462L27.4416 14.2758H27.4661L28.8616 9.71108H30.066L27.9851 15.619ZM15.1225 8.60087H16.4886C17.5168 8.60087 18.1044 9.15598 18.1044 10.1324C18.1044 11.1088 17.5168 11.6688 16.4837 11.6688H15.1225V8.60087Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.627 12.0646C25.627 16.5185 22.0165 20.1292 17.5628 20.1292C13.109 20.1292 9.49859 16.5185 9.49859 12.0646C9.49859 7.61064 13.109 4 17.5628 4C22.0165 4 25.627 7.61064 25.627 12.0646ZM19.5002 9.06828C20.6219 9.45351 21.4425 10.0303 21.2815 11.1038C21.1646 11.8899 20.7272 12.2701 20.1461 12.4032C20.9434 12.8167 21.2151 13.6014 20.9626 14.5502C20.4832 15.9157 19.3437 16.0306 17.8282 15.7452L17.4601 17.213L16.5717 16.9922L16.9347 15.5441C16.7044 15.4871 16.469 15.4261 16.2265 15.361L15.862 16.8162L14.9747 16.5954L15.3422 15.1245L13.5527 14.6748L13.9941 13.6613C13.9941 13.6613 14.6492 13.8342 14.6401 13.8216C14.8916 13.8836 15.0035 13.7203 15.0476 13.6119L16.0448 9.62797C16.0559 9.43989 15.9906 9.20291 15.6307 9.11316C15.6444 9.10358 14.9853 8.95332 14.9853 8.95332L15.2217 8.00789L17.0137 8.4501L17.3781 6.99591L18.266 7.21676L17.9092 8.64221C18.1481 8.69616 18.388 8.75112 18.6214 8.80911L18.9757 7.39274L19.8641 7.61359L19.5002 9.06828ZM17.3744 11.4941C17.9796 11.6545 19.2965 12.0037 19.526 11.0882C19.7601 10.1516 18.4808 9.86878 17.8544 9.73028L17.8543 9.73027C17.7833 9.71457 17.7208 9.70074 17.6697 9.68801L17.2273 11.4558C17.2694 11.4662 17.3189 11.4794 17.3744 11.4941ZM16.6888 14.3404C17.4136 14.5313 18.9989 14.9489 19.2511 13.9402C19.5093 12.9088 17.9723 12.5652 17.2223 12.3976C17.1385 12.3789 17.0646 12.3624 17.004 12.3473L16.5161 14.2956C16.5656 14.3079 16.6237 14.3232 16.6887 14.3403L16.6888 14.3404Z"
                fill="#F7931A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6253 16.2582H8.50494L6.91495 10.1924C6.83949 9.91334 6.67925 9.66667 6.44354 9.5504C5.85531 9.25823 5.20712 9.0257 4.5 8.90843V8.6749H7.91567C8.38708 8.6749 8.74064 9.0257 8.79957 9.43313L9.62454 13.8086L11.7438 8.6749H13.8052L10.6253 16.2582ZM14.9838 16.2582H12.9813L14.6302 8.6749H16.6327L14.9838 16.2582ZM19.2234 10.7757C19.2823 10.3673 19.6359 10.1337 20.0483 10.1337C20.6965 10.0751 21.4026 10.1924 21.9919 10.4835L22.3454 8.85081C21.7562 8.61727 21.108 8.5 20.5198 8.5C18.5762 8.5 17.162 9.55041 17.162 11.0082C17.162 12.1173 18.1637 12.6996 18.8708 13.0504C19.6359 13.4002 19.9305 13.6338 19.8716 13.9835C19.8716 14.5082 19.2823 14.7418 18.6941 14.7418C17.9869 14.7418 17.2798 14.5669 16.6327 14.2747L16.2791 15.9085C16.9862 16.1996 17.7512 16.3169 18.4584 16.3169C20.6376 16.3745 21.9919 15.3251 21.9919 13.75C21.9919 11.7665 19.2234 11.6502 19.2234 10.7757ZM29 16.2582L27.41 8.6749H25.7022C25.3486 8.6749 24.9951 8.90843 24.8772 9.25823L21.9329 16.2582H23.9943L24.4058 15.1502H26.9386L27.1743 16.2582H29ZM25.9968 10.7171L26.585 13.5751H24.9361L25.9968 10.7171Z"
                fill="#172B85"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8055 8.14192L17.0275 8.52349V7.08202L18.8055 6.70752V8.14192ZM11.5803 7.52718L9.852 7.89461L9.84491 13.5545C9.84491 14.6003 10.6312 15.3705 11.6795 15.3705C12.2603 15.3705 12.6853 15.2645 12.9191 15.1373V13.7029C12.6924 13.7948 11.5733 14.1198 11.5733 13.074V10.5656H12.9191V9.06051H11.5733L11.5803 7.52718ZM7.39418 10.4737C7.01876 10.4737 6.79209 10.5797 6.79209 10.8553C6.79209 11.1562 7.18219 11.2885 7.66615 11.4527C8.45512 11.7204 9.49355 12.0728 9.49794 13.3779C9.49794 14.6427 8.48502 15.3705 7.01168 15.3705C6.40251 15.3705 5.73667 15.2504 5.07792 14.9677V13.286C5.67292 13.611 6.42376 13.8513 7.01168 13.8513C7.40834 13.8513 7.69168 13.7453 7.69168 13.4203C7.69168 13.087 7.26881 12.9346 6.75828 12.7507C5.98078 12.4706 5 12.1173 5 10.9401C5 9.68939 5.95625 8.94039 7.39418 8.94039C7.9821 8.94039 8.56293 9.03225 9.15085 9.26543V10.9259C8.61252 10.6362 7.93251 10.4737 7.39418 10.4737ZM27.9429 8.94039C29.6217 8.94039 30.5 10.3677 30.5 12.1766C30.5 12.2743 30.4953 12.4377 30.4913 12.5762V12.5762V12.5762V12.5762V12.5763C30.4884 12.6782 30.4858 12.7666 30.4858 12.8055H27.0221C27.1 13.6393 27.7092 13.8796 28.3962 13.8796C29.0975 13.8796 29.65 13.7312 30.1317 13.4909V14.9041C29.65 15.1726 29.0125 15.3634 28.1696 15.3634C26.4412 15.3634 25.2371 14.2894 25.2371 12.1625C25.2371 10.3677 26.2571 8.94039 27.9429 8.94039ZM27.9358 10.3748C27.4895 10.3748 27.0008 10.7069 27.0008 11.5054H28.8283C28.8283 10.7069 28.3679 10.3748 27.9358 10.3748ZM15.1221 9.58341L15.0088 9.06052H13.4788V15.2433H15.2496V11.0531C15.6676 10.5091 16.3759 10.608 16.5955 10.6857V9.06052C16.3688 8.97573 15.5401 8.82028 15.1221 9.58341ZM17.0274 9.06052H18.8053V15.2433H17.0274V9.06052ZM22.5028 8.94039C21.8086 8.94039 21.3624 9.26543 21.1145 9.49154L21.0224 9.05345H19.4641V17.2925L21.2349 16.918L21.242 14.9183C21.497 15.102 21.8724 15.3634 22.4957 15.3634C23.7637 15.3634 24.9182 14.3459 24.9182 12.106C24.9112 10.0568 23.7424 8.94039 22.5028 8.94039ZM22.0778 13.8089C21.6599 13.8089 21.412 13.6605 21.242 13.4768L21.2349 10.8553C21.419 10.6504 21.674 10.509 22.0778 10.509C22.7224 10.509 23.1686 11.2298 23.1686 12.1554C23.1686 13.1023 22.7295 13.8089 22.0778 13.8089Z"
                fill="#6461FC"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.3462 8.93296C8.81624 8.97261 9.28628 8.69506 9.58006 8.34316C9.86894 7.98135 10.0599 7.49563 10.0109 7C9.59475 7.01983 9.08064 7.27755 8.78686 7.63936C8.51757 7.95161 8.28745 8.45715 8.3462 8.93296ZM13.9377 15.3167V7.58981H16.8021C18.2807 7.58981 19.3138 8.62072 19.3138 10.1274C19.3138 11.6342 18.2611 12.675 16.7629 12.675H15.1226V15.3167H13.9377ZM10.006 9.02714C9.5919 9.00301 9.21406 9.1532 8.90886 9.27451C8.71246 9.35257 8.54614 9.41868 8.41961 9.41868C8.27762 9.41868 8.10444 9.34904 7.90999 9.27085C7.65521 9.16839 7.36392 9.05125 7.05845 9.05687C6.35829 9.06679 5.70709 9.46825 5.34966 10.1076C4.61522 11.3863 5.1587 13.2796 5.86866 14.3205C6.2163 14.8359 6.63248 15.4009 7.18086 15.3811C7.42211 15.3719 7.59566 15.2974 7.77526 15.2202C7.98203 15.1314 8.19683 15.0391 8.53223 15.0391C8.85599 15.0391 9.0614 15.129 9.25858 15.2152C9.44606 15.2973 9.62611 15.376 9.89339 15.3712C10.4614 15.3613 10.8188 14.8557 11.1664 14.3403C11.5416 13.7871 11.7064 13.2471 11.7314 13.1652L11.7344 13.1557C11.7338 13.1551 11.7291 13.153 11.721 13.1492C11.5956 13.0911 10.637 12.6469 10.6278 11.4557C10.6186 10.4559 11.3881 9.94937 11.5093 9.86963L11.5093 9.86962C11.5166 9.86477 11.5216 9.8615 11.5238 9.85979C11.0342 9.12626 10.2704 9.04696 10.006 9.02714ZM21.478 15.3761C22.2223 15.3761 22.9126 14.9945 23.226 14.3898H23.2505V15.3166H24.3472V11.4706C24.3472 10.3554 23.4659 9.63672 22.1096 9.63672C20.8513 9.63672 19.921 10.3653 19.8867 11.3665H20.9541C21.0423 10.8907 21.478 10.5784 22.0754 10.5784C22.8 10.5784 23.2064 10.9204 23.2064 11.5499V11.9761L21.7277 12.0653C20.3519 12.1496 19.6077 12.7195 19.6077 13.7108C19.6077 14.712 20.3764 15.3761 21.478 15.3761ZM21.7962 14.4592C21.1646 14.4592 20.7631 14.1519 20.7631 13.6811C20.7631 13.1954 21.1499 12.9129 21.8893 12.8683L23.2063 12.784V13.2202C23.2063 13.9438 22.5992 14.4592 21.7962 14.4592ZM27.9851 15.619C27.5102 16.9721 26.9667 17.4181 25.8112 17.4181C25.7231 17.4181 25.4293 17.4082 25.3607 17.3884V16.4616C25.4342 16.4715 25.6153 16.4814 25.7084 16.4814C26.2323 16.4814 26.526 16.2584 26.7072 15.6785L26.8149 15.3365L24.8075 9.71108H26.0462L27.4416 14.2758H27.4661L28.8616 9.71108H30.066L27.9851 15.619ZM15.1225 8.60087H16.4886C17.5168 8.60087 18.1044 9.15598 18.1044 10.1324C18.1044 11.1088 17.5168 11.6688 16.4837 11.6688H15.1225V8.60087Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.627 12.0646C25.627 16.5185 22.0165 20.1292 17.5628 20.1292C13.109 20.1292 9.49859 16.5185 9.49859 12.0646C9.49859 7.61064 13.109 4 17.5628 4C22.0165 4 25.627 7.61064 25.627 12.0646ZM19.5002 9.06828C20.6219 9.45351 21.4425 10.0303 21.2815 11.1038C21.1646 11.8899 20.7272 12.2701 20.1461 12.4032C20.9434 12.8167 21.2151 13.6014 20.9626 14.5502C20.4832 15.9157 19.3437 16.0306 17.8282 15.7452L17.4601 17.213L16.5717 16.9922L16.9347 15.5441C16.7044 15.4871 16.469 15.4261 16.2265 15.361L15.862 16.8162L14.9747 16.5954L15.3422 15.1245L13.5527 14.6748L13.9941 13.6613C13.9941 13.6613 14.6492 13.8342 14.6401 13.8216C14.8916 13.8836 15.0035 13.7203 15.0476 13.6119L16.0448 9.62797C16.0559 9.43989 15.9906 9.20291 15.6307 9.11316C15.6444 9.10358 14.9853 8.95332 14.9853 8.95332L15.2217 8.00789L17.0137 8.4501L17.3781 6.99591L18.266 7.21676L17.9092 8.64221C18.1481 8.69616 18.388 8.75112 18.6214 8.80911L18.9757 7.39274L19.8641 7.61359L19.5002 9.06828ZM17.3744 11.4941C17.9796 11.6545 19.2965 12.0037 19.526 11.0882C19.7601 10.1516 18.4808 9.86878 17.8544 9.73028L17.8543 9.73027C17.7833 9.71457 17.7208 9.70074 17.6697 9.68801L17.2273 11.4558C17.2694 11.4662 17.3189 11.4794 17.3744 11.4941ZM16.6888 14.3404C17.4136 14.5313 18.9989 14.9489 19.2511 13.9402C19.5093 12.9088 17.9723 12.5652 17.2223 12.3976C17.1385 12.3789 17.0646 12.3624 17.004 12.3473L16.5161 14.2956C16.5656 14.3079 16.6237 14.3232 16.6887 14.3403L16.6888 14.3404Z"
                fill="#F7931A"
              />
            </svg>
          </div>
        </div>
      </footer>

      <FooterV2 />
    </>
  );
}
