"use client";
import { useEffect, useState } from "react";
import TextAnimationCard from "./TextAnimationCard";
import { WordAnimationCode } from "@/utils/data";

const words = [
  "Creators",
  "Innovators",
  "Dreamers",
  "Builders",
  "Thinkers",
  "Visionaries",
];

function useWordCycle(words, interval) {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setIndex(Math.floor(Math.random() * words.length));
      setIsInitial(false);
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval, isInitial]);

  return words[index];
}

const WordAnimation = () => {
  const word = useWordCycle(words, 1600);
  return (
    <TextAnimationCard name="Word Animation Loop" code={WordAnimationCode}>
      <div className="inline-block text-primary">
        {word?.split("").map((char, index) => (
          <span
            key={`${word}-${char}-${index}`}
            className={`inline-block whitespace-pre opacity-0 animate-fadeUp`}
            style={{ animationDelay: `${index * 0.015}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </TextAnimationCard>
  );
};

export default WordAnimation;
