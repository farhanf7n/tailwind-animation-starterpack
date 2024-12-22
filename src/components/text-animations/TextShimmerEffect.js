"use client";
import React from "react";
import TextAnimationCard from "./TextAnimationCard";
import { TextShimmerEffectCode } from "@/utils/data";
const TextShimmerEffect = ({
  text,
  className = "",
  shimmerDuration = 3, // Shimmer animation duration
}) => {
  return (
    <TextAnimationCard name="Shimmer Effect" code={TextShimmerEffectCode}>
      <div>
        <div
          className={`relative inline-block overflow-hidden text-black ${className}`}
          style={{
            background:
              "linear-gradient(90deg, #000000 10%, #c0c0c0 40%, #707070 100%)",
            backgroundSize: "200% 100%",
            animation: `shimmer ${shimmerDuration}s infinite linear`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {text}
        </div>
      </div>
    </TextAnimationCard>
  );
};

export default TextShimmerEffect;
