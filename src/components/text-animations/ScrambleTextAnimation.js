"use client";
import React, { useState, useEffect, useCallback } from "react";
import TextAnimationCard from "./TextAnimationCard";
import { GrPowerReset } from "react-icons/gr";
import { scrambleTextAnimationCode } from "@/utils/data";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const ScrambleTextAnimation = ({
  text,
  className = "",
  delay = 0,
  scrambleSpeed = 50,
  duration = 1500,
  code,
}) => {
  const [displayChars, setDisplayChars] = useState(text.split(""));
  const [isAnimating, setIsAnimating] = useState(false);

  const scrambleChar = useCallback(() => {
    return characters[Math.floor(Math.random() * characters.length)];
  }, []);

  const [key, setKey] = useState(0); // Key to force component reload

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1); // Increment key to trigger re-render
  };

  useEffect(() => {
    let timeoutId;
    let intervalId;
    const iterations = Math.floor(duration / scrambleSpeed);
    let currentIteration = 0;

    const startAnimation = () => {
      setIsAnimating(true);

      intervalId = setInterval(() => {
        currentIteration++;

        setDisplayChars((prev) =>
          text.split("").map((targetChar, index) => {
            if (targetChar === " ") return " ";

            // Gradually increase chance of settling on final character
            const progress = currentIteration / iterations;
            const charProgress = index / text.length;

            if (progress > charProgress && Math.random() > 0.5) {
              return targetChar;
            }

            if (prev[index] === targetChar && Math.random() > 0.3) {
              return targetChar;
            }

            return scrambleChar();
          })
        );

        if (currentIteration >= iterations) {
          clearInterval(intervalId);
          setDisplayChars(text.split(""));
          setIsAnimating(false);
        }
      }, scrambleSpeed);
    };

    timeoutId = setTimeout(startAnimation, delay * 100);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, scrambleSpeed, duration, scrambleChar, key]);

  return (
    <TextAnimationCard
      name="Scramble Text Animation"
      code={scrambleTextAnimationCode}
    >
      <span key={key} className={`inline-block ${className}`}>
        {displayChars.map((char, index) => (
          <span
            key={`${index}-${char}`}
            className={`inline-block transition-all duration-100 ${
              isAnimating ? "" : ""
            }`}
            style={{
              opacity: isAnimating ? 0.9 : 1,
              transition: "all 0.1s ease-out",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <div className="absolute top-0 p-4 right-0">
        <button onClick={reloadComponent} className=" outline-none ">
          <GrPowerReset />
        </button>
      </div>
    </TextAnimationCard>
  );
};

export default ScrambleTextAnimation;
