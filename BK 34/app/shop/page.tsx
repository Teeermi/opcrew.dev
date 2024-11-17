"use client";

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {motion} from "framer-motion";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);


    const staggerContainer = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Czas między animacjami dzieci
            },
        },
    };

    const childVariant = {
        hidden: { opacity: 0, y: 20 }, // Ukryte na początku
        show: { opacity: 1, y: 0 },     // Widoczne po animacji
    };


    return (

        <motion.div className="shopContainer" variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}} // Animacja tylko raz, po osiągnięciu 20% widoczności
        >
            <motion.div className="ourTeamLabel" variants={childVariant}>
                <i className="fa-solid fa-people-group"></i>
                <h2>Shop</h2>
            </motion.div>
            <motion.h3 variants={childVariant} className="mainOurTeamsLabel">Discover our products
            </motion.h3>

            <motion.div
                className="shopItemsContainer"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.2}} // Animacja tylko raz, po osiągnięciu 20% widoczności
            >
                <motion.div className="shopItem1" variants={childVariant}>
                    <img src="/e9b0b8397b030bd5deb05ec1cd91d674.png" alt=""/>
                    <h2>BATTLE PASS</h2>
                    <div className="SliderBtnsShop">

                        <form action="/api/checkout_sessions?id=battlepass" method="POST">

                                <button type="submit" role="link">
                                    Buy now
                                </button>

                        </form>

                        <button>Learn more</button>
                    </div>


                </motion.div>


            </motion.div>
        </motion.div>


    )
        ;
}