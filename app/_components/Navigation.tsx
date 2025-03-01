"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import useWindowDimensions from "./getWidth";

const CrispWithNoSSR = dynamic(() => import("./crisp"), { ssr: false });

export default function Navigation() {
  const pathname = usePathname();
  const navExtended = useRef<HTMLDivElement>(null);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 850) {
      if (navExtended.current) {
        navExtended.current.style.display = "none";
      }
    }
  }, [width]);

  function handleClick() {
    if (navExtended.current) {
      if (navExtended.current.style.display === "none") {
        navExtended.current.style.display = "flex";
      } else {
        navExtended.current.style.display = "none";
      }
    }
  }

  function clickCheck() {
    navExtended.current.style.display = "none";
  }

  return (
    <>
      <CrispWithNoSSR />

      <div
        className="navExtended"
        ref={navExtended}
        style={{ display: `none` }}
      >
        <Link href={"/"} onClick={clickCheck}>
          Home
        </Link>
        <Link href={"/shop"} onClick={clickCheck}>
          Shop
        </Link>
      </div>

      <div className="navOnPhone">
        <div className="logo">
          <img src="/Designer%201.png" alt="" />
          <h2>opcrew.dev</h2>
        </div>

        <div className="login">
          <i className="fa-solid fa-bars" onClick={handleClick}></i>
        </div>
      </div>

      <nav>
        <div className="logo">
          <img src="/Designer%201.png" alt="" />
          <h2>opcrew.dev</h2>
        </div>
        <div className="nav">
          <Link
            href={"/"}
            className={pathname === "/" ? "homeBtn active" : "homeBtn"}
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className={pathname === "/shop" ? "shopBtn active" : "shopBtn"}
          >
            Shop
          </Link>
        </div>
        <div className="login">
          <a href="">123</a>
        </div>
      </nav>
    </>
  );
}
