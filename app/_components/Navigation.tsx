"use client";

import Link from "next/link";
import { useSession } from "next-auth/react"
import {usePathname} from "next/navigation";
import dynamic from 'next/dynamic'
import {useEffect, useRef} from "react";
import useWindowDimensions from "./getWidth";

const CrispWithNoSSR = dynamic(
    () => import('./crisp'),
    { ssr: false }
)


export default function Navigation() {
    const { data: session } = useSession()
const pathname = usePathname();
const navExtended = useRef(null);

const {width} = useWindowDimensions();


useEffect(() => {
    if (width > 850) {
        navExtended.current.style.display = "none";
    }
}, [width]);

function handleClick() {
    navExtended.current.style.display === "none" ? navExtended.current.style.display = "flex" : navExtended.current.style.display = "none";
}



    return (
<>
    <CrispWithNoSSR />

    <div className="navExtended" ref={navExtended} style={{display: `none`}}>
            <h2>opcrew </h2>

    </div>

    <div className='navOnPhone'>
        <div className="logo">
            <img src="/Designer%201.png" alt=""/>
            <h2>opcrew.dev</h2>
        </div>

        <div className="login">

               <Link href={"/login"}>Login</Link>
            <i className="fa-solid fa-bars" onClick={handleClick} ></i>
        </div>


    </div>


    <nav>
    <div className="logo">
            <img src="/Designer%201.png" alt=""/>
            <h2>opcrew.dev</h2>
        </div>
        <div className="nav">


            <Link href={"/"} className={pathname === "/" ? "homeBtn active" : "homeBtn"} >Home</Link>
            <Link href={"/shop"} className={pathname === "/shop" ? "shopBtn active" : "shopBtn"} >Shop</Link>
        </div>
        <div className="login">
            <Link href={"/login"}>Login</Link>
        </div>
        </nav>
</>
    )
}