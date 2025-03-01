"use client";

export default function FooterV2() {
  function scrollUp() {
    const element = document.querySelector("nav");
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="footerV2">
      <h2>opcrew.dev. Wszelkie prawa zastrzeżone.</h2>
      <button onClick={scrollUp}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <h3>Privacy Terms Impressum</h3>
    </div>
  );
}
