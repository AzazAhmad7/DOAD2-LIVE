import React, { useEffect, useRef } from "react";

const logos = [
  { src: "./images/apple.png", alt: "Drupal", name: "Apple" },
  { src: "./images/facebook.png", alt: "Android", name: "facebook" },
  { src: "./images/pinterest.png", alt: "Apple iOS", name: "Pinterest" },
  { src: "./images/github.png", alt: "React JS", name: "github" },
  { src: "./images/slack.png", alt: "Kentico", name: "slack" },
  { src: "./images/typescript.png", alt: "Sitecore", name: "typescrip" },
  // Add more logos as needed
];

const HorizontalScrollSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1; // Adjust scroll speed as needed
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    startAutoScroll();

    // scrollContainer.addEventListener("mouseenter", stopAutoScroll);
    // scrollContainer.addEventListener("mouseleave", startAutoScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <div className="scroll-section bg-primary-light">
      <div className="scroll-container" ref={scrollContainerRef}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="logo-item border border-blue-300">
            <img src={logo.src} alt={logo.alt} className="logo-image" />
            {/*<p className="logo-name">{logo.name}</p>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
