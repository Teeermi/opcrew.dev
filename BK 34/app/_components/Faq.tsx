"use client";

import {useState} from "react";
import {motion} from "framer-motion";


export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null); // Stan do zarządzania widocznością tekstu

    const staggerContainer = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Ustawienie odstępu między animacjami dzieci
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 }, // Początkowe ukrycie
        show: { opacity: 1, y: 0 }, // Widoczne po animacji
    };

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Zmiana stanu widoczności
    };

    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem itaque necessitatibus nostrum sint veritatis. Aliquam, architecto commodi!"
        },
        {
            question: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore?",
            answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            question: "Curabitur pretium tincidunt lacus?",
            answer: "Suspendisse potenti. In hac habitasse platea dictumst. Praesent blandit laoreet nibh."
        }
    ];

    return (
        <motion.div
            className="faqContainer"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.4}} // Animacja tylko raz, po osiągnięciu 60% widoczności
        >
            <motion.div className="faqLabel" variants={childVariants}>
                <i className="fa-solid fa-code"></i>
                <h2>Faq</h2>
            </motion.div>
            <motion.h3 className="mainFaqLabel" variants={childVariants}>
                Your questions answered here
            </motion.h3>

            <motion.div className="faqMain" layout>
                {faqData.map((item, index) => (
                    <motion.div className="faq1" variants={childVariants} key={index}>
                        <div className="faqUpWrapper">
                            <motion.h2 variants={childVariants}>
                                {item.question}
                            </motion.h2>
                            <motion.i
                                className="fa-solid fa-plus"
                                onClick={() => handleClick(index)}
                                variants={childVariants}
                            ></motion.i>
                        </div>
                        <motion.div
                            initial={{height: 0, opacity: 0}} // Początkowe wartości
                            animate={openIndex === index ? {height: "auto", opacity: 1} : {
                                height: 0,
                                opacity: 0
                            }} // Animacja wysokości
                            transition={{duration: 0.3, ease: "easeInOut"}} // Ustawienia animacji
                            style={{overflow: 'hidden'}} // Ukrywa elementy poza wysokością
                        >
                            <motion.h3
                                variants={childVariants}
                                style={{margin: 0}} // Zmniejsza domyślny margines
                            >
                                {item.answer}
                            </motion.h3>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}