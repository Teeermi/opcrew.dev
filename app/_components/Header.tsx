"use client";

import { useShared } from "./SharedContext";

import FormNewsletter from "@/app/_components/FormNewsletter";
import { useRef, useEffect } from "react";

export default function Header() {
  const headerElement = useRef<HTMLDivElement>(null);
  const { setHeaderRef } = useShared();

  useEffect(() => {
    setHeaderRef(headerElement);
  }, [setHeaderRef]);

  return (
    <header ref={headerElement}>
      <div className="headerBtnBg">
        <div className="headerBtnContent">
          <h2>Built for Servers, Designed for Success</h2>
        </div>
      </div>
      <h3>We turn</h3>
      <h4>dreams into reality</h4>
      <h5>Solutions, Development, Innovation, Support, and Much More</h5>
      <FormNewsletter />
      <div className="headerImg"></div>
      <h6 className="mainH6">
        At OPCREW, we embrace a variety of programming languages to create
        powerful solutions. Check out the languages and technologies that shape
        our success!
      </h6>
      <div className="headerImgContainer">
        <img src="https://skillicons.dev/icons?i=lua" alt="Lua" />
        <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
        <img src="https://skillicons.dev/icons?i=react" alt="React" />
        <img src="https://skillicons.dev/icons?i=vue" alt="Vue" />
        <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
        <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" />
        <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />
        <img src="https://skillicons.dev/icons?i=redux" alt="Redux" />
        <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
        <img src="https://skillicons.dev/icons?i=vite" alt="Vite" />
        <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
        <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
        <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
      </div>

      <div className="circle1"></div>
      <div className="light1"></div>
      <div className="light2"></div>
    </header>
  );
}
