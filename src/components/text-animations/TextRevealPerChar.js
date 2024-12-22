"use client";
import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import TextAnimationCard from "./TextAnimationCard";
import { TextBlurRevealCode } from "@/utils/data";

const TextBlurReveal = ({
  text,
  className = "",
  delay = 0,
  charDelay = 0.08,
}) => {
  const [key, setKey] = useState(0); // Key to force component reload

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1); // Increment key to trigger re-render
  };

  return (
    <>
      <TextAnimationCard
        name="Text Blur Reveal by Character"
        code={TextBlurRevealCode}
      >
        <div key={key} className=" p-4 ">
          <span className={`inline-block ${className}overflow-hidden`}>
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-char-reveal transform opacity-0"
                style={{
                  animationDelay: `${delay + index * charDelay}s`,
                  animationFillMode: "forwards",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
        <div className="absolute top-0 p-4 right-0">
          <button onClick={reloadComponent} className=" outline-none ">
            <GrPowerReset />
          </button>
        </div>
      </TextAnimationCard>
    </>
  );
};

export default TextBlurReveal;
