"use client";
import { useState } from "react";
import CopyCode from "../utils/CopyCode";

const TextAnimationCard = ({ children, name, code }) => {
  const codes = `<BlurReveal
  text="Emerging from the mist..."
  className="text-3xl font-light"
  delay={0.2}
  <BlurReveal
  text="Emerging from the mist..."
  className="text-3xl font-light"
  delay={0.2}
  <BlurReveal
  text="Emerging from the mist..."
  className="text-3xl font-light"
  delay={0.2}
  <BlurReveal
  text="Emerging from the mist..."
  className="text-3xl font-light"
  delay={0.2}
  <BlurReveal
  text="Emerging from the mist..."
  className="text-3xl font-light"
  delay={0.2}
/>`;
  const [showCode, setShowCode] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="w-fit my-2  bg-zinc-100 text-xs font-medium rounded-lg px-4 py-1 top-2 left-2">
          <p>{name}</p>
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          className="outline-none hover:underline underline-offset-4 px-2 text-[0.8rem] font-medium"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>
      <div className="w-fullh-fit max-h-60 ">
        {showCode ? (
          <pre className=" whitespace-pre-wrap">
            <CopyCode themeData={code} />
          </pre>
        ) : (
          <div className="h-60 flex border border-zinc-200 rounded-lg  justify-center items-center  relative">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAnimationCard;
