"use client";
import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import TextAnimationCard from "./TextAnimationCard";
import { TextWordBlurRevealUpCode } from "@/utils/data";

const TextWordBlurRevealUp = ({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.15, // Adjusted delay for words
}) => {
  const [key, setKey] = useState(0); // Key to force component reload

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1); // Increment key to trigger re-render
  };

  return (
    <>
      <TextAnimationCard
        name="Text Blur Reveal Up by Word"
        code={TextWordBlurRevealUpCode}
      >
        <div key={key} className="p-4">
          <span className={`inline-block ${className} overflow-hidden`}>
            {text.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block animate-word-reveal-up opacity-0"
                style={{
                  animationDelay: `${delay + wordIndex * wordDelay}s`,
                  animationFillMode: "forwards",
                }}
              >
                {word === " " ? "\u00A0" : word}
                <span>&nbsp;</span>
              </span>
            ))}
          </span>
        </div>
        <div className="absolute top-0 p-4 right-0">
          <button onClick={reloadComponent} className="outline-none">
            <GrPowerReset />
          </button>
        </div>
      </TextAnimationCard>
    </>
  );
};

export default TextWordBlurRevealUp;
