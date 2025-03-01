"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getScripts } from "@/app/_lib/data-service";
import Link from "next/link";

export default function PreviewPage() {
  const [scriptsArray, setScriptsArray] = useState<
    { id: string; name: string }[]
  >([]);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const test = await getScripts();
      setScriptsArray(test);
      console.log(test);
    }
    fetchData();
  }, []);

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

  return (
    <>
      {scriptsArray.length > 0 ? (
        <motion.div
          className="shopContainer"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <motion.div className="circle6" variants={childVariant}></motion.div>

          <motion.div
            className="ourTeamLabel"
            variants={childVariant}
            style={{ marginTop: "-3.5rem" }}
          >
            <i className="fa-solid fa-people-group"></i>
            <h2>Shop</h2>
          </motion.div>
          <motion.h3 variants={childVariant} className="mainOurTeamsLabel">
            Discover our products
          </motion.h3>

          <motion.div
            className="shopItemsContainer"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {scriptsArray.map((item) => {
              return (
                <motion.div
                  className="shopItem1"
                  variants={childVariant}
                  key={item.id}
                >
                  <img src="/e9b0b8397b030bd5deb05ec1cd91d674.png" alt="" />
                  <h2>BATTLE PASS</h2>
                  <div className="SliderBtnsShop">
                    <form
                      action="/api/checkout_sessions?id=battlepass"
                      method="POST"
                    >
                      <button type="submit" role="link">
                        Buy now
                      </button>
                    </form>

                    <Link href={`/products/${item.id}`}>Learn more</Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}
